import { Form } from "./Form.js";
import { TaskList } from "./TaskList.js";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

test("When form is submited a new task is added to given tasklist", () => {
  document.body.innerHTML = "<div id='form'></div><div id='list'></div>";
  const mockTasks = ["test 1", "test 2", "test 3"];

  const taskListComponent = new TaskList("#list", mockTasks);
  const formComponent = new Form("#form", taskListComponent);

  expect(screen.queryAllByRole("listitem")).toHaveLength(3);

  userEvent.click(screen.getByLabelText("Enter new todo:"));
  userEvent.keyboard("Nueva tarea de prueba");
  userEvent.click(screen.getByRole("button", /Add Todo/i));

  expect(screen.getByText("Nueva tarea de prueba")).toBeTruthy();
  expect(screen.queryAllByRole("listitem")).toHaveLength(4);
});
