import { Component } from "./Component.js";

export class Header extends Component {
  constructor(selector) {
    super(selector);
    this.template = this.generateTemplate();
    this.render();
  }

  generateTemplate() {
    return `
      <h1>Hello World! Let's test the DOM!</h1>
      `;
  }
}
