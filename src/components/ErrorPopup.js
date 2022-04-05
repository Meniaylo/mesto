import Popup from "./Popup.js";

export default class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._handleConfirmation = handleConfirmation;
  }


  setEventListeners() {
    super.setEventListeners();

    this._popupElement.addEventListener('submit', (evt) => {
    // evt.preventDefault();

    this._handleConfirmation();
    });
  }
}