const editBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.profile__popup');
const profilePopupExitBtn = profilePopup.querySelector('.popup__exit-btn');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileInputName = profilePopup.querySelector('.form__input_subj_name');
const profileInputOccupation = profilePopup.querySelector('.form__input_subj_occupation');
const profileFormElement = profilePopup.querySelector('.form');

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

editBtn.addEventListener('click', toggleProfilePopup);
editBtn.addEventListener('click', fillInput);
profilePopupExitBtn.addEventListener('click', toggleProfilePopup);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
profileFormElement.addEventListener('submit', toggleProfilePopup);


const addBtn = document.querySelector('.profile__add-btn');
const elementsPopup = document.querySelector('.elements__popup');
const elementsPopupExitBtn = elementsPopup.querySelector('.popup__exit-btn');
const elementsFormElement = elementsPopup.querySelector('.form');

function toggleElementsPopup() {
  elementsPopup.classList.toggle('popup_active');
}

function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  
}

addBtn.addEventListener('click', toggleElementsPopup);
elementsPopupExitBtn.addEventListener('click', toggleElementsPopup);
elementsFormElement.addEventListener('submit', handleElementsFormSubmit);
elementsFormElement.addEventListener('submit', toggleElementsPopup);