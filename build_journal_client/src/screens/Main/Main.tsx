import { observer } from "mobx-react-lite";
import style from "./Main.module.css";
import mainStore from "../../stores/mainStore";
import { ComentModal, CreateRecord, RecordEl } from "../../shared";
import { useMemo, useState } from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import transformDate from "../../lib/transformDate";

const Main = observer(() => {
  const [isActiveComment, setIsActiveComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>();
  const [sortOrder, setSortOrder] = useState<string>("new");

  const parseDate = (dateString: string) => {
    const dateStr = transformDate(dateString);
    const [day, month, year] = dateStr.split(".");

    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  };

  const sortedItems = useMemo(() => {
    if (!mainStore.recordList.data) return;
    return [...mainStore.recordList.data].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      return sortOrder === "old" ? dateA - dateB : dateB - dateA;
    });
  }, [sortOrder, mainStore.recordList.data]);

  return (
    <div className={style.main}>
      {mainStore.createRecordIsActive === "update" || mainStore.createRecordIsActive === "create" ? <CreateRecord /> : null}
      {isActiveComment ? <ComentModal comment={comment} setIsActiveComment={() => setIsActiveComment(false)} /> : null}
      <div className={style.main_container}>
        <div className={style.filter}>
          <div>Сортировка по дате:</div>
          <button className={style.toggleSort} onClick={() => setSortOrder((prev) => (prev === "new" ? "old" : "new"))}>
            {sortOrder === "new" ? <FaSortAmountUp /> : <FaSortAmountDown />}
          </button>
        </div>
        <div className={style.main_block}>
          {sortedItems &&
            sortedItems.map((el, index) => (
              <RecordEl
                setComment={(comment) => {
                  setComment(comment);
                  setIsActiveComment(true);
                }}
                key={el.id}
                elData={el}
                index={index + 1}
              />
            ))}
        </div>
        <div className={style.footer}>
          <div className={style.footer_block}>
            <button
              disabled={!mainStore.pagination?.hasPrev}
              className={style.prev}
              onClick={() => {
                if (!mainStore.pagination?.hasPrev) return;
                mainStore.setPage(mainStore.page - 1);
              }}
              style={!mainStore.pagination?.hasPrev ? { backgroundColor: "#3d3d3d", cursor: "auto", color: "#838181" } : undefined}
            >
              Prev
            </button>
            <button
              disabled={!mainStore.pagination?.hasNext}
              className={style.next}
              onClick={() => {
                if (!mainStore.pagination?.hasNext) return;
                mainStore.setPage(mainStore.page + 1);
              }}
              style={!mainStore.pagination?.hasNext ? { backgroundColor: "#3d3d3d", cursor: "auto", color: "#838181" } : undefined}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Main;
