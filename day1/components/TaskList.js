import { Component } from "./Component.js";

export class TaskList extends Component {
  constructor(selector, taskList) {
    super(selector);
    this.taskList = taskList;
    this.template = this.generateTemplate();
    this.render();
  }

  generateTemplate() {
    let html = "<ul>";
    this.taskList.forEach((e) => {
      html += `<li>${e}</li>`;
    });

    html += "<ul>";
    return html;
  }
  reRender() {
    this.template = this.generateTemplate();
    this.render("#list");
  }
}
