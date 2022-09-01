import { TaskList } from "./TaskList.js";
import { screen } from "@testing-library/dom";

test("TaskList render a list from given array", () => {
  document.body.innerHTML = "<div id='list'></div>";

  const mockTasks = ["test 1", "test 2", "test 3"];

  const taskListComponent = new TaskList("#list", mockTasks);

  expect(screen.queryAllByRole("listitem", /test/i)).toHaveLength(3);
});
