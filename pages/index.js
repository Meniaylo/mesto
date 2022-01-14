let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupExitBtn = document.querySelector('.popup__exit-btn');


function showPopup() {
  popup.classList.add('popup_active');
}
editBtn.addEventListener('click', showPopup);

function hidePopup() {
  popup.classList.remove('popup_active');
}
popupExitBtn.addEventListener('click', hidePopup);