import style from "./CreateRecord.module.css";
import { MdClose } from "react-icons/md";

const CreateRecord = () => {
  return (
    <div className={style.createRecord}>
      <div className={style.createRecord_container}>
        <div className={style.createRecord_body}>
          <div className={style.createRecord_body_content}>
            <div className={style.createRecord_heder}>
              <h1>Создать новую запись</h1>
              <button className={style.close}>
                <MdClose />
              </button>
            </div>
            <div className={style.createRecord_content}>
              <div></div>
            </div>
            <div className={style.createRecord_footer}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecord;
