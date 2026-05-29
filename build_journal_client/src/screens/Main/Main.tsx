import { observer } from "mobx-react-lite";
import style from "./Main.module.css";
import mainStore from "../../stores/mainStore";
import { CreateRecord, RecordEl } from "../../shared";

const Main = observer(() => {
  return (
    <div className={style.main}>
      <CreateRecord />
      <div className={style.main_container}>
        <div className={style.filter}></div>
        <div className={style.main_block}>
          {mainStore.recordList.data &&
            mainStore.recordList.data.map((el, index) => (
              <RecordEl
                key={el.id}
                elData={el}
                index={index + 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
});

export default Main;
