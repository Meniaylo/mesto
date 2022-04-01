export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items, isAppend) {
    this._initialArray = items;
    this._initialArray.forEach(item => this.addItem(item, isAppend));
  }

  addItem(item, isAppend) {
    const card = this._renderer(item);
    if (isAppend) {
      this._container.append(card);
    } else {
      this._container.prepend(card);
    }
  }
}