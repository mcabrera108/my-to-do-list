import { v4 as uuid } from "uuid";

const sidenavCalendarOptions = [
  {
    projectTitle: "Home",
    id: uuid(),
    url: "/",
  },
  {
    projectTitle: "Today",
    id: uuid(),
    url: "/today",
  },
  {
    projectTitle: "Week",
    id: uuid(),
    url: "/week",
  },
];
export default sidenavCalendarOptions;
