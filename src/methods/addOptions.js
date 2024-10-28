import { v4 as uuid } from "uuid";

const addOptions = [
  {
    addTitle: "Task",
    id: uuid(),
    isTaskMenu: true,
  },
  {
    addTitle: "Project",
    id: uuid(),
    isTaskMenu: false,
  },
];
export default addOptions;
