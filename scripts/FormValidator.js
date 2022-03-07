export default class FormValidator {
  constructor(validationSelectors) {
    this._formSelector = validationSelectors.formSelector;
    this._inputSelector = validationSelectors.inputSelector;
    this._inputErrorClass = validationSelectors.inputErrorClass;
    this._inputIsInvalidClass = validationSelectors.inputIsInvalidClass;
    this._submitBtnSelector = validationSelectors.submitBtnSelector;
    this._submitBtnInactiveClass = validationSelectors.submitBtnInactiveClass;
  }

  enableValidation() {
    const formsList = Array.from(document.querySelectorAll(this._formSelector));
    formsList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    })
  }

  _setEventListeners(formElement) {
    const inputsList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitBtnSelector);
    this._toggleButtonState(inputsList, buttonElement);

    inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(inputsList, buttonElement);
      })
    })
  }

  _toggleButtonState(inputsList, buttonElement) {
    if (this._hasInvalidInputs(inputsList)) {
      buttonElement.classList.add(this._submitBtnInactiveClass);
    } else {
      buttonElement.classList.remove(this._submitBtnInactiveClass);
    }
  }
  
  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInputs(inputsList) {
    return inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputIsInvalidClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorClass);
  }

  _hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputIsInvalidClass);
  errorElement.classList.remove(this._inputErrorClass);
  errorElement.textContent = ' ';
  }
}