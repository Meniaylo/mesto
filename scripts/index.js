import Card from './Card.js';
import FormValidator from './FormValidator.js';

const elementsSection = document.querySelector('.elements');
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

const renderCard = (card, wrap, isAppend) => {
  if (isAppend) {
    wrap.append(card);
  } else {
    wrap.prepend(card);
  }
};

initialCards.forEach((item) => {
  const newCard = new Card(item, '#elements-template', openPopup).generateCard();
  renderCard(newCard, elementsSection, true);
});

function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  const newElement = {
    name: elementsFormInputTitle.value,
    link: elementsFormInputLink.value,
    description: `Вид на ${elementsFormInputTitle.value}`
  };
  const newCard = new Card(newElement, '#elements-template', openPopup).generateCard();
  renderCard(newCard, elementsSection, false);
  closePopup(elementsPopup);
};

function fillInput() {
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
  openPopup(profilePopup);
  new FormValidator(formValidationConfig)._setEventListeners(profilePopup);
  new FormValidator(formValidationConfig)._hideInputError(profilePopup, profileInputName);
  new FormValidator(formValidationConfig)._hideInputError(profilePopup, profileInputOccupation);
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

const validation = new FormValidator(formValidationConfig);
validation.enableValidation();