export default class Card {
  constructor(myId, data, templateSelector, handleCardClick, handleRemoveBtnClick, handleLikeBtnClick) {
    this._title = data.name;
    this._imageLink = data.link;
    this._description = `Вид на ${data.name}`;
    this._likedUsers = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveBtnClick = handleRemoveBtnClick;
    this._handleLikeBtnClick = handleLikeBtnClick;
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._removeBtn = this._element.querySelector('.element__remove-btn');
    this._likesCounter = this._element.querySelector('.element__like-counter');
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._myId = myId;
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
    if (this._ownerId === this._myId) {
      this._removeBtn.classList.add('element__remove-btn_active');
    }
    
    const isLiked = this._likedUsers.some((user) => {
      return user._id === this._myId;
    })
    if (isLiked) {
      this._likeBtn.classList.add('element__like-btn_active');
    }

    this._setEventListeners();

    return this._element;
  }
  

  _setEventListeners() {
    this._likeBtn.addEventListener('click', (evt) => {
      this._handleLikeBtnClick(evt, this._id)
    });

    this._removeBtn.addEventListener('click', () => {
      this._handleRemoveBtnClick(this._id, this._element);
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._title, this._imageLink, this._description);
    });
  }
}