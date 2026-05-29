import transformDate from "../../lib/transformDate";
import type { IRecord } from "../../types/dataTypes/IRecord";
import style from "./RecordEl.module.css";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface IProps {
  elData: IRecord;
  index: number;
}

const RecordEl = ({ elData, index }: IProps) => {
  return (
    <div className={style.recordEl}>
      <div>{index}.</div>
      <div>{transformDate(elData.date)}</div>
      <div>{`${elData.surename} ${elData.name} ${elData.middlename}`}</div>
      <div>{elData.rolevalue}</div>
      <div>{elData.workview}</div>
      <div>{`${elData.volumeofwork}${elData.unitvalue}`}</div>
      <div style={!elData.comment ? { color: "#ffffff4f" } : undefined}>{elData.comment ? elData.comment : "Нет коментария !"}</div>
      <div className={style.actionsElem}>
        <button className={style.updateElem}>
          <FaPen />
        </button>
        <button className={style.deleteElem}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default RecordEl;
