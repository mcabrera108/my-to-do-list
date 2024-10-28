import Task from "./Task";
import { useContext } from "react";
import projectContext from "../context/projectContext";
import style from "../style_modules/main.module.css";

function Week() {
  let curr = new Date();
  let first = curr.getDate() - curr.getDay();

  let firstday = new Date(curr.setDate(first)).toISOString();
  let lastday = new Date(curr.setDate(first + 6)).toISOString();

  const { tasks } = useContext(projectContext);

  return (
    <div className={style.taskWrapper}>
      {tasks?.map((task) => {
        console.log(firstday + " " + lastday);
        if (task.taskDate >= firstday && task.taskDate <= lastday) {
          return <Task indTask={task} key={task.id} />;
        }
      })}
    </div>
  );
}
export default Week;
