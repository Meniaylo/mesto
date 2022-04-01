export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._title = data.name;
    this._imageLink = data.link;
    this._description = `Вид на ${data.name}`;
    this._likedUsers = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._removeBtn = this._element.querySelector('.element__remove-btn');
    this._likesCounter = this._element.querySelector('.element__like-counter');
    console.log(this._likedUsers);
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
    this._image = this._element.querySelector('.element__pic');
    this._image.src = this._imageLink;
    this._image.alt = this._description;
    this._element.querySelector('.element__name').textContent = this._title;
    this._likesCounter.textContent = this._likedUsers.length;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-btn_active');
    });

    this._removeBtn.addEventListener('click', () => {
      this._element.remove();
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._title, this._imageLink, this._description);
    });
  }
}