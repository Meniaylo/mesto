import Popup from "./Popup.js";

export default class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(id) {
    super.open();
    this._cardId = id;
    console.log(this._cardId);
  }
}