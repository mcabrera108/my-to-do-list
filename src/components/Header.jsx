import style from "../style_modules/header.module.css";
import { useContext } from "react";
import projectContext from "../context/projectContext";
function Header() {
  const { toggle, handleSetHeaderToggle } = useContext(projectContext);

  return (
    <header className={style.headerContainer}>
      <div className={style.headerWrapper}>
        <a className={style.logoContainer} href="/">
          My To-Do-List
        </a>
        <div
          className={`${style.navAuthContainer} + ${
            toggle ? style.active : style.notActive
          }`}
        ></div>
      </div>
      <a className={style.iconBurger} onClick={handleSetHeaderToggle}>
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </a>
    </header>
  );
}
export default Header;
