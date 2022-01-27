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

const elementsSection = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.element');

const addBtn = document.querySelector('.profile__add-btn');
const elementsPopup = document.querySelector('.elements__popup');
const elementsPopupExitBtn = elementsPopup.querySelector('.popup__exit-btn');
const elementsFormElement = elementsPopup.querySelector('.form');
const elementsFormInputTitle = elementsPopup.querySelector('[name="inputElementTitle"]');
const elementsFormInputLink = elementsPopup.querySelector('[name="inputElementLink"]');


const editBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.profile__popup');
const profilePopupExitBtn = profilePopup.querySelector('.popup__exit-btn');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileInputName = profilePopup.querySelector('[name="inputName"]');
const profileInputOccupation = profilePopup.querySelector('[name="inputOccupation"]');
const profileFormElement = profilePopup.querySelector('.form');


initialCards.forEach((item) => {
  const element = elementsTemplate.cloneNode(true);
  element.querySelector('.element__name').textContent = item.name;
  element.querySelector('.element__pic').src = item.link;
  element.querySelector('.element__pic').alt = item.description;
  elementsSection.prepend(element);
});

function toggleProfilePopup() {
  profilePopup.classList.toggle('popup_active');
}

function fillInput() {
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
}

function toggleElementsPopup() {
  elementsPopup.classList.toggle('popup_active');
}

function handleElementsFormSubmit(evt) {
  evt.preventDefault();

  
}

editBtn.addEventListener('click', toggleProfilePopup);
editBtn.addEventListener('click', fillInput);
profilePopupExitBtn.addEventListener('click', toggleProfilePopup);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
profileFormElement.addEventListener('submit', toggleProfilePopup);
addBtn.addEventListener('click', toggleElementsPopup);
elementsPopupExitBtn.addEventListener('click', toggleElementsPopup);
elementsFormElement.addEventListener('submit', handleElementsFormSubmit);
elementsFormElement.addEventListener('submit', toggleElementsPopup);