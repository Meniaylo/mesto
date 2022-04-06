import './index.css';

import { formValidationConfig, userProfileConfig, apiInfo, myId } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import ConfirmPopup from '../components/ConfirmPopup.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import Popup from '../components/Popup.js';

const addBtn = document.querySelector('.profile__add-btn');
const editBtn = document.querySelector('.profile__edit-btn');

const profilePopup = document.querySelector('#profile-popup');
const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');


const api = new Api(apiInfo);

const errorPopup = new Popup('#error-popup');


const userInfo = new UserInfo({
  userProfileConfig: userProfileConfig,
  handleAvatarClick: () => {
    popupToSetAvatar.open();
  }});


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userInfo.setUserInfoFromServer(data);
    cardList.renderItems(cards, true);
  })
  .catch((err) => {
    console.log(`Ошибка! ${err}`);
    errorPopup.open();
  })

userInfo.setEventListeners();


function handleCardClick(title, link, alt) {
  newPopupWithImage.open(title, link, alt);
}

function handleRemoveBtnClick(id, element) {
  confirmPopup.open(id, element);
}

function handleLikeBtnClick(evt, cardId) {
  if (!evt.target.classList.contains('element__like-btn_active')) {
    api.putLike(cardId)
    .then((res) => {
      this._likesCounter.textContent = res.likes.length;
    })
    .then(() => evt.target.classList.add('element__like-btn_active'))
    .catch((err) => {
      console.log(`Ошибка! ${err}`);
      errorPopup.open();
    })
  } else {
    api.deleteLike(cardId)
    .then((res) => {
      this._likesCounter.textContent = res.likes.length;
    })
    .then(() => evt.target.classList.remove('element__like-btn_active'))
    .catch((err) => {
      console.log(`Ошибка! ${err}`);
      errorPopup.open();
    })
  }
}

  const cardList = new Section({
    renderer: (item) => {
      const newCard = new Card(myId, item, '#elements-template', handleCardClick, handleRemoveBtnClick, handleLikeBtnClick).generateCard();
      return newCard;
    }
  }, '.elements')


const elementAddPopup = new PopupWithForm({
  popupSelector: '#elements-popup',
  handleFormSubmit: (data) => {
    elementAddPopup.submitBtn.textContent = 'Сохранение...';
    api.postCard(data)
    .then((res) => {
      cardList.addItem(res, false);
    })
    .then(() => elementAddPopup.close())
    .catch((err) => {
      console.log(`Ошибка! ${err}`);
      errorPopup.open();
    })
    .finally(() => elementAddPopup.submitBtn.textContent = 'Создать')
  }
})
elementAddPopup.setEventListeners();


const profileChangePopup = new PopupWithForm({
  popupSelector: '#profile-popup',
  handleFormSubmit: (data) => {
    profileChangePopup.submitBtn.textContent = 'Сохранение...';
    api.patchUserInfo(data)
    .then(() => userInfo.setUserInfo(data))
    .then(() => profileChangePopup.close())
    .catch((err) => {
      console.log(`Ошибка! ${err}`);
      errorPopup.open();
    })
    .finally(() => profileChangePopup.submitBtn.textContent = 'Создать')
    }
});
profileChangePopup.setEventListeners();


const popupToSetAvatar = new PopupWithForm({
  popupSelector: '#newAvatar-popup',
  handleFormSubmit: (inputValue) => {
    const url = inputValue.inputAvatarLink;
    popupToSetAvatar.submitBtn.textContent = 'Сохранение...';
    api.changeAvatar(url)
    .then(() => userInfo.setAvatar(url))
    .then(() => popupToSetAvatar.close())
    .catch((err) => {
      console.log(`Ошибка! ${err}`);
      errorPopup.open();
    })
    .finally(() => popupToSetAvatar.submitBtn.textContent = 'Создать')
  }
});
popupToSetAvatar.setEventListeners();


const confirmPopup = new ConfirmPopup({
  popupSelector: '#confirm-popup',
  handleConfirmation: (cardId, card) => {
    confirmPopup.submitBtn.textContent = 'Удаление...';
    api.deleteCard(cardId)
    .then(() => card.remove())
    .then(() => confirmPopup.close())
    .catch((err) => {
      console.log(`Ошибка! ${err}`);
      errorPopup.open();
    })
    .finally(() => confirmPopup.submitBtn.textContent = 'Да')
  }
});
confirmPopup.setEventListeners();


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