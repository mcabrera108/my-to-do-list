import Task from "./Task";
import { useContext } from "react";
import projectContext from "../context/projectContext";
import style from "../style_modules/main.module.css";
import { formatToTimeZone } from "date-fns-timezone";

function Today() {
  const todayDate = new Date();
  const format = "YYYY-MM-DD";
  const output = formatToTimeZone(todayDate, format, {
    timeZone: "America/Chicago",
  });
  const { tasks } = useContext(projectContext);
  return (
    <div className={style.taskWrapper}>
      {tasks?.map((task) => {
        if (output === task.taskDate) {
          return <Task indTask={task} key={task.id} />;
        }
      })}
    </div>
  );
}
export default Today;
