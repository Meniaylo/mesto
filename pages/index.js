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

const handleImgClick = (evt) => {
  const imageUrl = evt.target.src;
  const imageAlt = evt.target.alt;
  const element = evt.target.closest('.element');
  popupImage.src = imageUrl;
  popupImageTitle.textContent = element.querySelector('.element__name').textContent;
  popupImage.alt = imageAlt;

  togglePopup(imgPopup);
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

const createCard = (card, wrap, isAppend) => {
  const newCard = fillCard(card);
  if (isAppend) {
    wrap.append(newCard);
  } else {
    wrap.prepend(newCard);
  }
};

initialCards.forEach((item) => {
  createCard(item, elementsSection, true);
});

function togglePopup(popup) {
  popup.classList.toggle('popup_active');
};

function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  const newElement = {
    name: elementsFormInputTitle.value,
    link: elementsFormInputLink.value,
    description: `Вид на ${elementsFormInputTitle.value}`
  };
  createCard(newElement, elementsSection, false);
  togglePopup(elementsPopup);
};

function fillInput() {
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
  togglePopup(profilePopup);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
  togglePopup(profilePopup);
};

editBtn.addEventListener('click', fillInput);
profilePopupExitBtn.addEventListener('click', () => togglePopup(profilePopup));
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
addBtn.addEventListener('click', () => togglePopup(elementsPopup));
elementsPopupExitBtn.addEventListener('click', () => togglePopup(elementsPopup));
elementsFormElement.addEventListener('submit', handleElementsFormSubmit);
imgPopupExitBtn.addEventListener('click', () => togglePopup(imgPopup));