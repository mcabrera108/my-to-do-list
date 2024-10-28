import { useContext } from "react";
import projectContext from "../context/projectContext";
import style from "../style_modules/main.module.css";
import Task from "./Task";

function Home() {
  const { tasks } = useContext(projectContext);
  return (
    <div className={style.taskWrapper}>
      {tasks?.map((task) => {
        return <Task indTask={task} key={task.id} />;
      })}
    </div>
  );
}
export default Home;
