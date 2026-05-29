import style from "./Header.module.css";
import { MdAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_container}>
        <div className={style.header_block}>
          <div className={style.header_logo}>
            <h1 className={style.header_title}>Work Tracker</h1>
          </div>
          <div className={style.header_settings}>
            <button className={style.add_new_record}>
              <span>Добавить новую запись</span>
              <MdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
