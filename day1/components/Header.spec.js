import { Header } from "./Header.js";
import { screen } from "@testing-library/dom";

test("Header renders", () => {
  document.body.innerHTML = "<div id='header'></div>";

  const headerComponent = new Header("#header");

  expect(headerComponent).toBeDefined();

  expect(screen.getByText(/Hello World/i)).toBeTruthy();
});
