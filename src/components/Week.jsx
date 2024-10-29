import Task from "./Task";
import { useContext } from "react";
import projectContext from "../context/projectContext";
import style from "../style_modules/main.module.css";
import { formatToTimeZone } from "date-fns-timezone";

function Week() {
  let curr = new Date();
  let first = curr.getDate() - curr.getDay();
  let firstday = new Date(curr.setDate(first)).toISOString();
  let lastday = new Date(curr.setDate(first + 6)).toISOString();

  const format = "YYYY-MM-DD";
  const outputFirst = formatToTimeZone(firstday, format, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  const outputLast = formatToTimeZone(lastday, format, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  const { tasks } = useContext(projectContext);
  return (
    <div className={style.taskWrapper}>
      {tasks?.map((task) => {
        if (task.taskDate >= outputFirst && task.taskDate <= outputLast) {
          return <Task indTask={task} key={task.id} />;
        }
      })}
    </div>
  );
}
export default Week;
