const elementsSection = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.element');
const addBtn = document.querySelector('.profile__add-btn');
const elementsPopup = document.querySelector('#elements-popup');
const elementsPopupExitBtn = elementsPopup.querySelector('.popup__exit-btn');
const elementsFormElement = elementsPopup.querySelector('.form');
const elementsFormInputTitle = elementsPopup.querySelector('[name="inputElementTitle"]');
const elementsFormInputLink = elementsPopup.querySelector('[name="inputElementLink"]');

const editBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('#profile-popup');
const profilePopupExitBtn = profilePopup.querySelector('.popup__exit-btn');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');
const profileFormElement = profilePopup.querySelector('.form');

const imgPopup = document.querySelector('#img-popup');
const imgPopupExitBtn = imgPopup.querySelector('.popup__exit-btn');
const popupImage = imgPopup.querySelector('.popup__img');
const popupImageTitle = imgPopup.querySelector('.popup__img-title');


const handleLikeBtn = (evt) => {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('element__like-btn_active');
};

const handleDeleteBtn = (evt) => {
  evt.target.closest('.element').remove();
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('click', handleLayoutClick);
  document.addEventListener('keydown', handleEscKeyPress);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('click', handleLayoutClick);
  document.removeEventListener('keydown', handleEscKeyPress);
}

const handleImgClick = (evt) => {
  const imageUrl = evt.target.src;
  const imageAlt = evt.target.alt;
  const element = evt.target.closest('.element');
  popupImage.src = imageUrl;
  popupImageTitle.textContent = element.querySelector('.element__name').textContent;
  popupImage.alt = imageAlt;

  openPopup(imgPopup);
};

const handleLayoutClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

const handleEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  }
};

const fillCard = (item) => {
  const element = elementsTemplate.cloneNode(true);
  const elementPic = element.querySelector('.element__pic');
  const likeBtn = element.querySelector('.element__like-btn');
  const deleteBtn = element.querySelector('.element__remove-btn');
  element.querySelector('.element__name').textContent = item.name;
  elementPic.src = item.link;
  elementPic.alt = item.description;
  likeBtn.addEventListener('click', handleLikeBtn);
  deleteBtn.addEventListener('click', handleDeleteBtn);
  elementPic.addEventListener('click', handleImgClick);
  return element;
};

const renderCard = (card, wrap, isAppend) => {
  if (isAppend) {
    wrap.append(card);
  } else {
    wrap.prepend(card);
  }
};

initialCards.forEach((item) => {
  const newCard = fillCard(item);
  renderCard(newCard, elementsSection, true);
});

function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  const newElement = {
    name: elementsFormInputTitle.value,
    link: elementsFormInputLink.value,
    description: `Вид на ${elementsFormInputTitle.value}`
  };
  const newCard = fillCard(newElement);
  renderCard(newCard, elementsSection, false);
  closePopup(elementsPopup);
};

function fillInput() {
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
  openPopup(profilePopup);
  setEventListeners(formValidationConfig, profilePopup);
  hideInputError(formValidationConfig, profilePopup, profileInputName);
  hideInputError(formValidationConfig, profilePopup, profileInputOccupation);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
  closePopup(profilePopup);
};

function handleAddBtnClick() {
  elementsFormInputTitle.value = '';
  elementsFormInputLink.value = '';
  elementsFormElement.querySelector('.form__submit-btn').classList.add('form__submit-btn_inactive');
  openPopup(elementsPopup);
};

editBtn.addEventListener('click', fillInput);
profilePopupExitBtn.addEventListener('click', () => closePopup(profilePopup));
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
addBtn.addEventListener('click', handleAddBtnClick);
elementsPopupExitBtn.addEventListener('click', () => closePopup(elementsPopup));
elementsFormElement.addEventListener('submit', handleElementsFormSubmit);
imgPopupExitBtn.addEventListener('click', () => closePopup(imgPopup));