import Popup from "./Popup.js";

export default class PopupToSetAvatar extends Popup {
  constructor ({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popupElement.querySelector('.form');
  }

  close() {
    super.close();
    this._form.reset();
  }


}