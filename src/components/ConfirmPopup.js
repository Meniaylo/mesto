import Popup from "./Popup.js";

export default class ConfirmPopup extends Popup {
  constructor({ popupSelector, handleConfirmation }) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
  }


  open(id, element) {
    super.open();
    this._cardId = id;
    this._card = element;
  }


  setEventListeners() {
    super.setEventListeners();

    this._popupElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    this._handleConfirmation(this._cardId, this._card);
    });
  }
}