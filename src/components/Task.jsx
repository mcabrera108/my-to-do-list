import { useContext, useEffect, useRef, useState } from "react";
import style from "../style_modules/main.module.css";
import projectContext from "../context/projectContext";
function Task(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1022);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [isComplete, setIsComplete] = useState(props.indTask.isComplete);
  const [borderStyle, setBorderStyle] = useState({
    borderLeft: "5px solid gray",
  });
  const dropdownRef = useRef(null);
  const { handleSetSummaryFlag, handleDeleteTask, handleSetEditFlag } =
    useContext(projectContext);
  function updateSetDesktop() {
    setDesktop(window.innerWidth > 1022);
  }
  function updateDropdown() {
    setDropdownMenu(!dropdownMenu);
  }
  function handleChecked() {
    let tempArr = JSON.parse(localStorage.getItem("tasks") || "[]");
    let index;
    for (index = 0; index < tempArr.length; index++) {
      if (tempArr[index].taskID === props.indTask.taskID) {
        console.log("Setting isComplete to: " + !tempArr[index].isComplete);
        tempArr[index].isComplete = !tempArr[index].isComplete;
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tempArr));
    setIsComplete(tempArr[index].isComplete);
  }

  useEffect(() => {
    window.addEventListener("resize", updateSetDesktop);
    return () => window.removeEventListener("resize", updateSetDesktop);
  });

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    switch (props.indTask.priority) {
      case "High":
        setBorderStyle({
          borderLeft: "5px solid red",
        });
        break;
      case "Medium":
        setBorderStyle({
          borderLeft: "5px solid rgb(255, 205, 112)",
        });
        break;
      case "Low":
        setBorderStyle({
          borderLeft: "5px solid blue",
        });
    }
  }, [props.indTask.priority]);

  return (
    <div className={style.indvTaskContainer} style={borderStyle}>
      <div className={style.taskCheckContainer}>
        <input
          type="checkbox"
          id={props.indTask.id}
          name={props.indTask.id}
          value={props.indTask.id}
          className={style.taskCheckboxInput}
          checked={isComplete ? true : false}
          onChange={handleChecked}
        />
        <div
          className={`${style.taskNameContainer} + ${
            isComplete ? style.checked : style.notChecked
          }`}
        >
          {props.indTask.taskTitle}
        </div>
      </div>
      {isDesktop ? (
        <div className={style.taskDetailsContainer}>
          <button
            className={style.taskDetailsBtn}
            onClick={() => handleSetSummaryFlag(props.indTask)}
          >
            Details
          </button>
          <span className={style.taskDateSpan}>{props.indTask.taskDate}</span>
          <div
            className={style.iconContainer}
            onClick={() => {
              handleSetEditFlag(props.indTask);
            }}
          >
            <i
              className="fa fa-pencil-square-o fa-lg"
              aria-hidden="true"
              title="Edit"
            ></i>
          </div>
          <div
            className={style.iconContainer}
            onClick={() => {
              handleDeleteTask(props.indTask);
            }}
          >
            <i
              className="fa fa-trash fa-lg"
              aria-hidden="true"
              title="Delete"
            ></i>
          </div>
        </div>
      ) : (
        <div className={style.taskDetailsContainer}>
          <div className={style.iconContainer} onClick={updateDropdown}>
            <i
              className="fa fa-ellipsis-v"
              aria-hidden="true"
              title="More Options"
            ></i>
          </div>
          {dropdownMenu ? (
            <div ref={dropdownRef} className={style.taskDropdown}>
              <div>
                <button onClick={() => handleSetSummaryFlag(props.indTask)}>
                  Details
                </button>
              </div>
              <div>
                <button onClick={() => handleSetEditFlag(props.indTask)}>
                  Edit
                </button>
              </div>
              <div>
                <button onClick={() => handleDeleteTask(props.indTask)}>
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
export default Task;
