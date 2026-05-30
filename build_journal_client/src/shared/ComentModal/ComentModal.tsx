import { MdClose } from "react-icons/md";
import style from "./ComentModal.module.css";
import { observer } from "mobx-react-lite";

interface IProps {
  comment: string | undefined;
  setIsActiveComment: () => void;
}

const ComentModal = observer(({ setIsActiveComment, comment }: IProps) => {
  return (
    <div className={style.comentModal}>
      <div className={style.comentModal_container}>
        <div className={style.comentModal_body}>
          <div className={style.comentModal_body_content}>
            <div className={style.comentModal_heder}>
              <h1>Комментарий</h1>
              <button className={style.close} onClick={() => setIsActiveComment()}>
                <MdClose />
              </button>
            </div>
            <div className={style.comentModal_content}>
              <p className={style.comment}>{comment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ComentModal;
