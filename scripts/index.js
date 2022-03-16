import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';

const addBtn = document.querySelector('.profile__add-btn');
const elementsPopup = document.querySelector('#elements-popup');
const elementsFormElement = elementsPopup.querySelector('.form');
const elementsFormInputTitle = elementsPopup.querySelector('[name="inputElementTitle"]');
const elementsFormInputLink = elementsPopup.querySelector('[name="inputElementLink"]');

const editBtn = document.querySelector('.profile__edit-btn');

const profilePopup = document.querySelector('#profile-popup');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');
const profileFormElement = profilePopup.querySelector('.form');


// function openPopup(popup) {
//   popup.classList.add('popup_active');
//   document.addEventListener('keydown', handleEscKeyPress);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_active');
//   document.removeEventListener('keydown', handleEscKeyPress);
// }

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_active') || evt.target.classList.contains('popup__exit-btn')) {
      closePopup(popup);
    }
  });
});

const handleEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  }
};

const createCard = (item) => {
  const newCard = new Card(item, '#elements-template', handleCardClick).generateCard();
  return newCard;
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard, true);
  }
}, '.elements')

cardList.renderItems();


function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  const newElement = {
    name: elementsFormInputTitle.value,
    link: elementsFormInputLink.value,
    description: `Вид на ${elementsFormInputTitle.value}`
  };
  const newCard = createCard(newElement);
  cardList.addItem(newCard, false);
  
  closePopup(elementsPopup);
};

function fillInput() {
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
  openPopup(profilePopup);
  profileValidation.resetValidation();
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
  openPopup(elementsPopup);
  elementsValidation.resetValidation();
};

function handleCardClick(title, link, alt) {
  const newPopupWithImage = new PopupWithImage('#img-popup');
  newPopupWithImage.open(title, link, alt);
  newPopupWithImage.setEventListeners();
}

const profileValidation = new FormValidator(formValidationConfig, profilePopup);
profileValidation.enableValidation();
const elementsValidation = new FormValidator(formValidationConfig, elementsPopup);
elementsValidation.enableValidation();

editBtn.addEventListener('click', fillInput);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
addBtn.addEventListener('click', handleAddBtnClick);
elementsFormElement.addEventListener('submit', handleElementsFormSubmit);