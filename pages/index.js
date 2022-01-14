let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupExitBtn = popup.querySelector('.popup__exit-btn');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


function showPopup() {
  popup.classList.add('popup_active');
}

function hidePopup() {
  popup.classList.remove('popup_active');
}

function fillInput() {
  let profileInputs = popup.querySelectorAll('input');
  profileInputs[0].value = profileName.textContent;
  profileInputs[1].value = profileOccupation.textContent;
}

editBtn.addEventListener('click', showPopup);
editBtn.addEventListener('click', fillInput);
popupExitBtn.addEventListener('click', hidePopup);

