import { Component } from "./Component.js";

export class Form extends Component {
  constructor(selector, dependentList) {
    super(selector);
    this.template = this.generateTemplate();
    this.dependentList = dependentList;
    this.render();
    this.activateForm();
  }
  generateTemplate() {
    return `
      <form>
      <label for="todo-input">Enter new todo:</label>
      <input type="text" placeholder="Do something..." id="todo-input"/>
      <button type="submit">Add Todo</button>
      </form>
      `;
  }

  activateForm() {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo(document.querySelector("input").value);
      document.querySelector("input").value = "";
    });
  }

  addTodo(text) {
    this.dependentList.taskList.push(text);
    this.dependentList.reRender();
  }
}
