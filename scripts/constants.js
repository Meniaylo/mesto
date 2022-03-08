const initialCards = [
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
  
  const formValidationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    inputErrorClass: 'form__input-error_active',
    inputIsInvalidClass: 'form__input_type_error',
    submitBtnSelector: '.form__submit-btn',
    submitBtnInactiveClass: 'form__submit-btn_inactive'
  };