import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Home from "./components/Home";
import Project from "./components/Project";
import Today from "./components/Today";
import Week from "./components/Week";
import projectContext from "./context/projectContext";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Router() {
  const [toggle, setToggle] = useState(false);

  const [overlay, setOverlay] = useState(false);
  const [addFlag, setAddFlag] = useState(false);
  const [summaryFlag, setSummaryFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  // Values for Projects Inputs
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects") || "[]")
  );
  const [projectInput, setProjectInput] = useState("");
  const [deleteInput, setDeleteInput] = useState("");

  // Values for tasks input
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("High");
  const [currentTaskDetails, setCurrentTaskDetails] = useState("");

  function handleOverlay() {
    setOverlay(!overlay);
    setAddFlag(!addFlag);
  }
  function handleSetSummaryFlag(indTask) {
    setOverlay(!overlay);
    setSummaryFlag(!summaryFlag);
    handleCurrentTaskDetails(indTask);
  }
  function handleSetEditFlag(indTask) {
    setOverlay(!overlay);
    setEditFlag(!editFlag);
    handleCurrentTaskDetails(indTask);
    // Handle Edit Task Details
  }
  function handleSetHeaderToggle() {
    setOverlay(!overlay);
    setToggle(!toggle);
  }
  function handleCurrentTaskDetails(indTask) {
    setCurrentTaskDetails(indTask);
  }
  function handleSetProjectInput(e) {
    setProjectInput(e.target.value);
  }
  function handleSetDeleteInput(e) {
    setDeleteInput(e.target.value);
  }
  function handleSetTaskInput(e) {
    setTaskInput(e.target.value);
  }
  function handleSetTaskDescription(e) {
    setTaskDescription(e.target.value);
  }
  function handleSetTaskDate(e) {
    setTaskDate(e.target.value);
  }
  function handleSetPriority(e) {
    let tempVal = e.target.value;
    if (tempVal === "High" || tempVal === "Medium" || tempVal === "Low") {
      setTaskPriority(tempVal);
    } else {
      setTaskPriority("Low");
    }
  }
  function handleEdit(e, indTask) {
    e.preventDefault();
    console.log(indTask);
    let tempArr = JSON.parse(localStorage.getItem("tasks") || "[]");

    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].id === indTask.id) {
        tempArr[i] = indTask;
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tempArr));
    setTasks(tempArr);
    setOverlay(!overlay);
    setEditFlag(!editFlag);
  }
  function handleSetProject(e) {
    e.preventDefault();
    let tempArr = JSON.parse(localStorage.getItem("projects") || "[]");
    let reformedProjectInp = projectInput.replaceAll(" ", "%20");
    let addProject = true;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].projectTitle === projectInput) {
        addProject = false;
      }
    }
    if (addProject) {
      tempArr.push({
        projectTitle: projectInput,
        id: uuid(),
        url: `/project/${reformedProjectInp}`,
      });
      localStorage.setItem("projects", JSON.stringify(tempArr));
      setProjects(tempArr);
      setProjectInput("");
    } else {
      alert("Not a valid Project Input");
    }
  }
  function handleDeleteProject() {
    const homeUrl = window.location.origin;
    const targetUrl = window.location.pathname;

    let tempArr = JSON.parse(localStorage.getItem("projects") || "[]");
    let index;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].url === targetUrl) {
        index = i;
        break;
      }
    }
    tempArr.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(tempArr));
    window.location.href = homeUrl;
  }
  function handleDeleteTask(indTask) {
    let index;
    let tempArr = JSON.parse(localStorage.getItem("tasks") || "[]");
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].taskID === indTask.taskID) {
        index = i;
        break;
      }
    }
    tempArr.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tempArr));
    setTasks(tempArr);
  }
  function handleSetTask(e) {
    e.preventDefault();
    let tempArr = JSON.parse(localStorage.getItem("tasks") || "[]");
    tempArr.push({
      taskTitle: taskInput,
      id: uuid(),
      taskDate: taskDate,
      body: taskDescription,
      priority: taskPriority,
      isComplete: false,
      taskID: uuid(),
      url: window.location.pathname,
    });
    localStorage.setItem("tasks", JSON.stringify(tempArr));
    setTasks(tempArr);
    setTaskInput("");
    setTaskDescription("");
    setTaskDate("");
    setTaskPriority("High");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App content={<Home />} />,
      errorElement: <Error />,
    },
    {
      path: "/today",
      element: <App content={<Today />} />,
    },
    {
      path: "/week",
      element: <App content={<Week />} />,
    },
    {
      path: "/project/:id",
      element: <App content={<Project />} />,
    },
  ]);
  return (
    <projectContext.Provider
      value={{
        overlay,
        addFlag,
        summaryFlag,
        editFlag,
        projects,
        projectInput,
        taskInput,
        deleteInput,
        tasks,
        taskDescription,
        taskPriority,
        taskDate,
        currentTaskDetails,
        toggle,
        handleOverlay,
        handleSetProjectInput,
        handleSetDeleteInput,
        handleSetProject,
        handleDeleteProject,
        handleSetTaskDate,
        handleEdit,
        handleSetTask,
        handleSetTaskInput,
        handleDeleteTask,
        handleSetEditFlag,
        handleSetTaskDescription,
        handleSetPriority,
        handleSetSummaryFlag,
        handleCurrentTaskDetails,
        handleSetHeaderToggle,
      }}
    >
      <RouterProvider router={router} />
    </projectContext.Provider>
  );
}
export default Router;
