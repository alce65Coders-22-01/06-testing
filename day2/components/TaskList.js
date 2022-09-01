import { getDataFromApi } from "../services/apiRequest.js";
import { Component } from "./Component.js";

export class TaskList extends Component {
  constructor(selector) {
    super(selector);
    this.render();
  }

  async render() {
    const data = await getDataFromApi();

    let html = "<ul>";
    data.forEach((e) => {
      html += `<li>${e.text}</li>`;
    });

    html += "<ul>";
    this.template = html;

    super.render();
  }

  reRender() {
    this.template = this.generateTemplate();
    this.render("#list");
  }
}
