export class Component {
  constructor(selector) {
    this.selector = selector;
  }
  render() {
    document.querySelector(this.selector).innerHTML = this.template;
  }
}
