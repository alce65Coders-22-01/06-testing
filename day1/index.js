import { Header } from "./components/Header.js";
import { Form } from "./components/Form.js";
import { TaskList } from "./components/TaskList.js";

(() => {
  const tasks = ["Do laundry", "Learn code", "Sleep +7 hours"];
  new Header("#header");
  const taskListComponent = new TaskList("#list", tasks);
  new Form("#form", taskListComponent);
})();
