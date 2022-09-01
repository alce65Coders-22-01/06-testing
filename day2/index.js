import { Header } from "./components/Header.js";
import { TaskList } from "./components/TaskList.js";

(() => {
  const tasks = ["Do laundry", "Learn code", "Sleep +7 hours"];
  new Header("#header");
  new TaskList("#list", tasks);
})();
