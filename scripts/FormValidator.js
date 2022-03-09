export default class FormValidator {
  constructor(validationSelectors, formElement) {
    this._formSelector = validationSelectors.formSelector;
    this._inputSelector = validationSelectors.inputSelector;
    this._inputErrorClass = validationSelectors.inputErrorClass;
    this._inputIsInvalidClass = validationSelectors.inputIsInvalidClass;
    this._submitBtnSelector = validationSelectors.submitBtnSelector;
    this._submitBtnInactiveClass = validationSelectors.submitBtnInactiveClass;
    this._formElement = formElement;
    this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitBtnSelector);
  }


  enableValidation() {
    this._toggleButtonState();

    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      })
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInputs()) {
      this._buttonElement.classList.add(this._submitBtnInactiveClass);
    } else {
      this._buttonElement.classList.remove(this._submitBtnInactiveClass);
    }
  }
  
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInputs() {
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputIsInvalidClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputElement) {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputIsInvalidClass);
  errorElement.classList.remove(this._inputErrorClass);
  errorElement.textContent = ' ';
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputsList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}