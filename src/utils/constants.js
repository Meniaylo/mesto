export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    description: 'Солнечная долина Архыза'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    description: 'Зимняя река'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    description: 'Спальные районы с воздуха'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    description: 'Пейзаж с вулканом'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    description: 'Железная дорога среди леса'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    description: 'Побережье Байкала зимой'
  }
];
  
export const formValidationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  inputErrorClass: 'form__input-error_active',
  inputIsInvalidClass: 'form__input_type_error',
  submitBtnSelector: '.form__submit-btn',
  submitBtnInactiveClass: 'form__submit-btn_inactive'
};

export const apiInfo = {
  token: '44e7fc01-af6b-414e-a259-74a30bc2c0eb',
  cohort: 'cohort-38',
  baseUrl: 'https://nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: '44e7fc01-af6b-414e-a259-74a30bc2c0eb',
    'content-type': 'application/json'
  }
}