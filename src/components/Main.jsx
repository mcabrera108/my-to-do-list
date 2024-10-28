import Option from "./Option";
import Add from "./Add";
import style from "../style_modules/main.module.css";
import AddBtn from "./AddBtn";
import sidenavCalendarOptions from "../methods/sidenavCalendarOptions";
import { useContext } from "react";
import projectContext from "../context/projectContext";
import Details from "./Details";
import Edit from "./Edit";
function Main({ content }) {
  const {
    overlay,
    addFlag,
    summaryFlag,
    editFlag,
    projects,
    tasks,
    taskInput,
    taskDescription,
    taskDate,
    taskPriority,
    currentTaskDetails,
    toggle,
    handleSetSummaryFlag,
    handleSetProject,
    handleSetProjectInput,
    handleSetTaskInput,
    handleSetTask,
    handleSetTaskDescription,
    handleSetEditFlag,
    handleSetTaskDate,
    handleSetPriority,
    handleOverlay,
    projectInput,
  } = useContext(projectContext);

  return (
    <div className={style.mainContainer}>
      <div
        className={`${style.sidenavContainer} + ${
          toggle ? style.active : style.notActive
        }`}
      >
        <div className={style.sideNavOptionContainer}>
          <span className={style.sidenavOptionHeader}>Calendar</span>
        </div>
        <div>
          {sidenavCalendarOptions?.map((navOption) => {
            return <Option projectObject={navOption} key={navOption.id} />;
          })}
        </div>
        <div className={style.sideNavOptionContainer}>
          <span className={style.sidenavOptionHeader}>Projects</span>
        </div>
        <div className={style.sidenavProjectTitleContainer}>
          <div>
            {projects?.map((project) => {
              return <Option projectObject={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
      <div className={style.taskContainer}>{content}</div>
      <AddBtn handleOverlay={handleOverlay} />
      {(() => {
        if (overlay && summaryFlag)
          return (
            <>
              <div
                className={style.overlay}
                onClick={handleSetSummaryFlag}
              ></div>
              <Details indTask={currentTaskDetails} />
            </>
          );
        else if (overlay && addFlag)
          return (
            <>
              <div className={style.overlay} onClick={handleOverlay}></div>
              <Add
                handleSetProject={handleSetProject}
                handleSetProjectInput={handleSetProjectInput}
                handleSetTaskInput={handleSetTaskInput}
                handleSetTaskDescription={handleSetTaskDescription}
                handleSetTask={handleSetTask}
                handleSetPriority={handleSetPriority}
                handleSetTaskDate={handleSetTaskDate}
                projectInput={projectInput}
                taskDescription={taskDescription}
                taskInput={taskInput}
                taskDate={taskDate}
                taskPriority={taskPriority}
                task={tasks}
              />
            </>
          );
        else if (overlay && editFlag)
          return (
            <>
              <div className={style.overlay} onClick={handleSetEditFlag}></div>
              <Edit indTask={currentTaskDetails} />
            </>
          );
      })()}
    </div>
  );
}
export default Main;
