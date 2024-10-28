import style from "../style_modules/add.module.css";
import addOptions from "../methods/addOptions";
import AddTask from "./AddTask";
import { useState } from "react";
function Add(props) {
  const [taskMenu, setTaskMenu] = useState(true);

  function handleSetTaskMenu(isTaskMenu) {
    setTaskMenu(isTaskMenu);
  }
  return (
    <div className={style.addContainer}>
      <div className={style.addContainerHeader}>Create a...</div>
      <div className={style.addContainerBody}>
        <div className={style.addContainerSideNav}>
          {addOptions.map((option) => {
            return (
              <AddTask
                addContent={option}
                key={option.id}
                handleSetTaskMenu={handleSetTaskMenu}
              />
            );
          })}
        </div>
        <div className={style.addContainerMain}>
          {taskMenu ? (
            <>
              <div className={style.addInputTitle}>New Task</div>
              <form onSubmit={props.handleSetTask}>
                <div className={style.addInputContainer}>
                  <label className={style.addContainerProjectTitleLabel}>
                    Task Title:{" "}
                  </label>
                  <input
                    type="text"
                    id="tasktitle"
                    name="tasktitle"
                    value={props.taskInput}
                    onChange={props.handleSetTaskInput}
                    className={style.addInput}
                    maxLength={30}
                    placeholder="This is a Task Title"
                    required={true}
                  />
                </div>
                <div className={style.addInputContainer}>
                  <div>
                    <label className={style.addContainerProjectTitleLabel}>
                      Task Description:{" "}
                    </label>
                  </div>
                  <textarea
                    type="text"
                    id="taskdesc"
                    name="taskdesc"
                    value={props.taskDescription}
                    className={style.addInput}
                    onChange={props.handleSetTaskDescription}
                    rows={2}
                    maxLength={100}
                    placeholder="Max Length is 100 characters..."
                  ></textarea>
                </div>
                <div className={style.addInputContainer}>
                  <div>
                    <label className={style.addContainerProjectTitleLabel}>
                      Task Date:
                    </label>
                  </div>
                  <input
                    type="date"
                    id="taskdate"
                    name={props.taskDate}
                    value={props.taskDate}
                    onChange={props.handleSetTaskDate}
                    className={style.addInput}
                    required={true}
                  />
                </div>
                <div className={style.addInputContainer}>
                  <div>
                    <label className={style.addContainerProjectTitleLabel}>
                      Priority:
                    </label>
                  </div>
                  <select
                    name="taskpriority"
                    id="taskpriority"
                    className={style.addInput}
                    value={props.taskPriority}
                    onChange={props.handleSetPriority}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <button type="submit" className={style.addSubmitBtn}>
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <div className={style.addInputTitle}>New Project</div>
              <form onSubmit={props.handleSetProject}>
                <div className={style.addInputContainer}>
                  <label className={style.addContainerProjectTitleLabel}>
                    Project Title:{" "}
                  </label>
                  <input
                    type="text"
                    id="projecttitle"
                    name="projecttitle"
                    value={props.projectInput}
                    onChange={props.handleSetProjectInput}
                    className={style.addInput}
                    placeholder="Max Length is 30 characters..."
                    maxLength={30}
                    required={true}
                  />
                </div>
                <button type="submit" className={style.addSubmitBtn}>
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Add;
