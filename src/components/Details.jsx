import style from "../style_modules/add.module.css";
function Details({ indTask }) {
  let reformattedProj = indTask.url
    .replaceAll("%20", " ")
    .replace("/project/", "");
  return (
    <div className={style.addContainer}>
      <div className={style.addContainerHeader}>Task Details</div>
      <div className={style.addContainerBody}>
        <div className={style.addContainerMain}>
          <div className={style.detailsTitle}>Task Title</div>
          <div className={style.detailsTaskDesc}>{indTask.taskTitle}</div>
          <div className={style.detailsTitle}>Task Description</div>
          <div className={style.detailsTaskDesc}>{indTask.body}</div>
          <div className={style.detailsTitle}>Priority</div>
          <div className={style.detailsTaskDesc}>{indTask.priority}</div>
          <div className={style.detailsTitle}>Task Date</div>
          <div className={style.detailsTaskDesc}>{indTask.taskDate}</div>
          <div className={style.detailsTitle}>Task Project</div>
          <div className={style.detailsTaskDesc}>{reformattedProj}</div>
        </div>
      </div>
    </div>
  );
}
export default Details;
