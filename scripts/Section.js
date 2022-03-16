export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach(item => this._renderer(item));
  }

  addItem(element, isAppend) {
    if (isAppend) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }
}