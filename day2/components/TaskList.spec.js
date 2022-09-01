import { TaskList } from "./TaskList.js";
import { screen } from "@testing-library/dom";
import { getDataFromApi } from "../services/apiRequest.js";

// Mock global fetch
/* global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve([{ test: "Test 1" }, { test: "Test 1" }]),
}); */

// Mock full module and mock part of it THIS IS THE BEST OPTION
/* jest.mock("../services/apiRequest.js");

getDataFromApi.mockResolvedValue([{ test: "Test 1" }, { test: "Test 1" }]); */

// Mock only a part of module, this option only work sometimes, and depend on the mocked thing, it works on default exports
getDataFromApi = jest
  .fn()
  .mockResolvedValue([{ test: "Test 1" }, { test: "Test 1" }]);

test("TaskList render a list from given array", async () => {
  document.body.innerHTML = "<div id='list'></div>";

  new TaskList("#list");

  expect(await screen.findAllByRole("listitem")).toHaveLength(2);
});
