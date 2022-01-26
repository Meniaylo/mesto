const editBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.profile__popup');
const profilePopupExitBtn = profilePopup.querySelector('.popup__exit-btn');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileInputName = profilePopup.querySelector('.form__input_subj_name');
const profileInputOccupation = profilePopup.querySelector('.form__input_subj_occupation');
const formElement = document.querySelector('.form');

const addBtn = document.querySelector('.profile__add-btn');
const elementsPopup = document.querySelector('.elements__popup');
const elementsPopupExitBtn = elementsPopup.querySelector('.popup__exit-btn');


function profilePopupOnOff() {
  profilePopup.classList.toggle('popup_active');
}

function elementsPopupOnOff() {
  elementsPopup.classList.toggle('popup_active');
}

function fillInput() {
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
}

editBtn.addEventListener('click', profilePopupOnOff);
editBtn.addEventListener('click', fillInput);
profilePopupExitBtn.addEventListener('click', profilePopupOnOff);
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', profilePopupOnOff);

addBtn.addEventListener('click', elementsPopupOnOff);
elementsPopupExitBtn.addEventListener('click', elementsPopupOnOff);