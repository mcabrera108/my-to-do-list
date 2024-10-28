import style from "../style_modules/main.module.css";
import { useContext } from "react";
import projectContext from "../context/projectContext";
function AddBtn({ handleOverlay }) {
  const { toggle } = useContext(projectContext);
  return (
    <button
      className={`${style.addTaskBtn} + ${
        toggle ? style.active : style.notActive
      }`}
      title="Add Task"
      onClick={handleOverlay}
    >
      <i
        className="fa fa-plus-circle"
        style={{ color: "#fda899", textShadow: "1px 3px 10px darkgray" }}
        aria-hidden="true"
      ></i>
    </button>
  );
}
export default AddBtn;
