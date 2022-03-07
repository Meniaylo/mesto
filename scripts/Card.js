export default class Card {
  constructor(data, templateSelector, openPopup) {
    this._title = data.name;
    this._imageLink = data.link;
    this._description = data.description;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.element__pic');
    this._image.src = this._imageLink;
    this._image.alt = this._description;
    this._element.querySelector('.element__name').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-btn_active');
    });

    this._element.querySelector('.element__remove-btn').addEventListener('click', () => {
      this._element.remove();
    });

    this._image.addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  _handleImageClick() {
    const popupImage = document.querySelector('.popup__img');
    popupImage.src = this._image.src;
    document.querySelector('.popup__img-title').textContent = this._title;
    popupImage.alt = this._image.alt;

    this._openPopup(document.querySelector('#img-popup'));
  }
}