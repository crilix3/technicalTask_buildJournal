import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_container}>
        <div className={style.header_block}>
          <div className={style.header_logo}>
            <h1 className={style.header_title}>Work Tracker</h1>
          </div>
          <div className={style.header_settings}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
