import './index.css';

import { formValidationConfig, apiInfo } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const addBtn = document.querySelector('.profile__add-btn');
const editBtn = document.querySelector('.profile__edit-btn');

const profilePopup = document.querySelector('#profile-popup');
const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');



const api = new Api(apiInfo);


const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  occupationSelector: '.profile__occupation',
  avatarSelector: '.profile__avatar'
})

api.getUserInfo()
  .then((data) => {
    userInfo.setUserInfoFromServer(data);
  })


  const cardList = new Section({
    renderer: (item) => {
      const newCard = new Card(item, '#elements-template', handleCardClick).generateCard();
      return newCard;
    }
  }, '.elements')


api.getInitialCards()
  .then((data) => {
    cardList.renderItems(data, true);
  })



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
    api.postCard(data);
    elementAddPopup.close();
  }
})
elementAddPopup.setEventListeners();


const profileChangePopup = new PopupWithForm({
  popupSelector: '#profile-popup',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    api.patchUserInfo(data);
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