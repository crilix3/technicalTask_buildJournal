import deleteRecord from "../../api/deleteRecord";
import getCreatebleData from "../../api/getCreatebleData";
import getUpdateRecord from "../../api/getUpdateRecord";
import transformDate from "../../lib/transformDate";
import type { IRecord } from "../../types/dataTypes/IRecord";
import style from "./RecordEl.module.css";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineModeComment } from "react-icons/md";

interface IProps {
  elData: IRecord;
  index: number;
  setComment: (comment: string) => void;
}

const RecordEl = ({ elData, index, setComment }: IProps) => {
  return (
    <div className={style.recordEl}>
      <div>{index}.</div>
      <div>{transformDate(elData.date)}</div>
      <div>{`${elData.surename} ${elData.name} ${elData.middlename}`}</div>
      <div>{elData.rolevalue}</div>
      <div className={style.overflowText}>{elData.workview}</div>
      <div>{`${elData.volumeofwork}${elData.unitvalue}`}</div>
      <div>
        <button style={!elData.comment ? { color: "#ffffff4f", cursor: "auto" } : undefined} className={style.commentsBtn} onClick={() => setComment(elData.comment)}>
          <MdOutlineModeComment />
        </button>
      </div>
      <div className={style.actionsElem}>
        <button
          className={style.updateElem}
          onClick={() => {
            getCreatebleData();
            getUpdateRecord(elData.id);
          }}
        >
          <FaPen />
        </button>
        <button className={style.deleteElem} onClick={() => deleteRecord(elData.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default RecordEl;
