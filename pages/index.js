let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupExitBtn = document.querySelector('.popup__exit-btn');
let inputName = document.querySelector('.form__input-name');
let inputOccupation = document.querySelector('.form__input-occupation');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


function showPopup() {
  popup.classList.add('popup_active');
}
editBtn.addEventListener('click', showPopup);

function hidePopup() {
  popup.classList.remove('popup_active');
}
popupExitBtn.addEventListener('click', hidePopup);

function fillPlaceholderName () {
  
}