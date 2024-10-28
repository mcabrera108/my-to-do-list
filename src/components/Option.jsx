import style from "../style_modules/main.module.css";
function Option(props) {
  return (
    <div className={style.sidenavOptionBtn}>
      <a href={props.projectObject.url}>{props.projectObject.projectTitle}</a>
    </div>
  );
}
export default Option;
