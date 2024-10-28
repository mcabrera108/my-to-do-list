import style from "../style_modules/main.module.css";
function AddTask(props) {
  return (
    <div className={style.sidenavOptionBtn}>
      <button
        onClick={() => {
          props.handleSetTaskMenu(props.addContent.isTaskMenu);
        }}
      >
        {props.addContent.addTitle}
      </button>
    </div>
  );
}
export default AddTask;
