import Task from "./Task";
import { useContext } from "react";
import projectContext from "../context/projectContext";
import style from "../style_modules/main.module.css";

function Today() {
  const todayDate = new Date();
  const { tasks } = useContext(projectContext);
  return (
    <div className={style.taskWrapper}>
      {tasks?.map((task) => {
        if (todayDate.toISOString().substring(0, 10) === task.taskDate) {
          return <Task indTask={task} key={task.id} />;
        }
      })}
    </div>
  );
}
export default Today;
