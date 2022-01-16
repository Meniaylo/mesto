let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupExitBtn = popup.querySelector('.popup__exit-btn');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let profileInputName = popup.querySelector('.form__input_subj_name');
let profileInputOccupation = popup.querySelector('.form__input_subj_occupation');
let formElement = document.querySelector('.form');


function showPopup() {
  popup.classList.add('popup_active');
}

function hidePopup() {
  popup.classList.remove('popup_active');
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

editBtn.addEventListener('click', showPopup);
editBtn.addEventListener('click', fillInput);
popupExitBtn.addEventListener('click', hidePopup);
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', hidePopup);