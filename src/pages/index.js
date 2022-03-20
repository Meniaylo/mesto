import './index.css';

import { initialCards, formValidationConfig } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const addBtn = document.querySelector('.profile__add-btn');
const editBtn = document.querySelector('.profile__edit-btn');

const profilePopup = document.querySelector('#profile-popup');
const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');



const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  occupationSelector: '.profile__occupation'
})


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = new Card(item, '#elements-template', handleCardClick).generateCard();
    return newCard;
  }
}, '.elements')

cardList.renderItems(true);


const elementAddPopup = new PopupWithForm({
  popupSelector: '#elements-popup',
  handleFormSubmit: (data) => {
    const inputsData = data;
    
    const newElement = {
      name: inputsData.inputElementTitle,
      link: inputsData.inputElementLink,
      description: `Вид на ${inputsData.inputElementTitle}`
    };
    
    cardList.addItem(newElement, false);
    elementAddPopup.close();
  }
})
elementAddPopup.setEventListeners();


const profileChangePopup = new PopupWithForm({
  popupSelector: '#profile-popup',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    profileChangePopup.close();
    }
})
profileChangePopup.setEventListeners();


function handleEditBtnClick() {
  const user = userInfo.getUserInfo();
  profileInputName.value = user.name;
  profileInputOccupation.value = user.occupation;

  profileChangePopup.open();

  formValidators['profileCtrl'].resetValidation();
};


function handleAddBtnClick() {
  elementAddPopup.open();
  
  formValidators['elementsCtrl'].resetValidation();
};

const newPopupWithImage = new PopupWithImage('#img-popup');
newPopupWithImage.setEventListeners();

function handleCardClick(title, link, alt) {
  newPopupWithImage.open(title, link, alt);
}


const formValidators = {}

const enableValidation = (formValidationConfig) => {
  const formsList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
  formsList.forEach((formElement) => {
    const validator = new FormValidator(formValidationConfig, formElement);

    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    
    validator.enableValidation();
  });
};

enableValidation(formValidationConfig);


editBtn.addEventListener('click', handleEditBtnClick);
addBtn.addEventListener('click', handleAddBtnClick);