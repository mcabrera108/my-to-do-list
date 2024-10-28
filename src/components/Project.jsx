import { useContext } from "react";
import style from "../style_modules/main.module.css";
import projectContext from "../context/projectContext";
import Task from "./Task";
function Project() {
  let taskCount = 0;
  const currentUrl = window.location.pathname;
  const { tasks, handleDeleteProject } = useContext(projectContext);
  return (
    <div className={style.taskWrapper}>
      {tasks?.map((task) => {
        if (task.url === currentUrl) {
          taskCount++;
          return <Task indTask={task} key={task.id} />;
        }
      })}
      {taskCount === 0 ? (
        <div
          className={style.headerProjectContainer}
          onClick={() => {
            handleDeleteProject();
          }}
        >
          <button>Delete Project</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Project;
