import { initialCards, formValidationConfig } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const addBtn = document.querySelector('.profile__add-btn');
const editBtn = document.querySelector('.profile__edit-btn');

const elementsPopup = document.querySelector('#elements-popup');
const profilePopup = document.querySelector('#profile-popup');

const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');



const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  occupationSelector: '.profile__occupation'
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
      
    const newCard = createCard(newElement);
    cardList.addItem(newCard, false);
    elementAddPopup.close();
  }
})


const profileChangePopup = new PopupWithForm({
  popupSelector: '#profile-popup',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    profileChangePopup.close();
    }
})


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


function handleEditBtnClick() {
  const user = userInfo.getUserInfo();
  profileInputName.value = user.name;
  profileInputOccupation.value = user.occupation;

  profileChangePopup.open();
  profileChangePopup.setEventListeners();

  profileValidation.resetValidation();
};


function handleAddBtnClick() {
  elementAddPopup.open();
  elementAddPopup.setEventListeners();
  
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


editBtn.addEventListener('click', handleEditBtnClick);
addBtn.addEventListener('click', handleAddBtnClick);