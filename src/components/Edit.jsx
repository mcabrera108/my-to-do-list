import style from "../style_modules/add.module.css";
import projectContext from "../context/projectContext";
import { useContext, useState } from "react";
function Edit({ indTask }) {
  const { handleEdit } = useContext(projectContext);
  const [taskTitle, setTaskTitle] = useState(indTask.taskTitle);
  const [taskDescription, setTaskDescription] = useState(
    indTask.taskDescription
  );
  const [taskDate, setTaskDate] = useState(indTask.taskDate);
  const [taskPriority, setTaskPriority] = useState(indTask.priority);
  return (
    <div className={style.addContainer}>
      <div className={style.addContainerHeader}>Edit Task...</div>
      <div className={style.addContainerBody}>
        <div className={style.addContainerMain}>
          <form
            onSubmit={(event) => {
              handleEdit(event, {
                body: taskDescription,
                id: indTask.id,
                isComplete: indTask.isComplete,
                priority: taskPriority,
                taskDate: taskDate,
                taskID: indTask.taskID,
                taskTitle: taskTitle,
                url: indTask.url,
              });
            }}
          >
            <label className={style.addContainerProjectTitleLabel}>
              Task Title:{" "}
            </label>
            <input
              type="text"
              id="tasktitle"
              name="tasktitle"
              value={taskTitle}
              className={style.addInput}
              onChange={(e) => setTaskTitle(e.target.value)}
              required={true}
            />
            <div className={style.addInputContainer}>
              <div>
                <label className={style.addContainerProjectTitleLabel}>
                  Task Description:{" "}
                </label>
              </div>
              <textarea
                name="taskdesc"
                id="taskdesc"
                type="text"
                value={taskDescription}
                className={style.addInput}
                onChange={(e) => setTaskDescription(e.target.value)}
                rows={2}
                maxLength={100}
                placeholder="Max Length is 100 characters..."
              ></textarea>
              <div className={style.addInputContainer}>
                <div>
                  <label className={style.addContainerProjectTitleLabel}>
                    Task Date:
                  </label>
                </div>
                <input
                  type="date"
                  id="taskdate"
                  name="taskdate"
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
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
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <button type="submit" className={style.addSubmitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Edit;
