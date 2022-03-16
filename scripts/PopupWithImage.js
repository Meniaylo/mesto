import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__img');
    this._popupTitle = this._popupElement.querySelector('.popup__img-title');
  }

  open(title, link, alt) {
    this._popupImage.src = link;
    this._popupImage.alt = alt;
    this._popupTitle.textContent = title;
    
    super.open();
  }
}