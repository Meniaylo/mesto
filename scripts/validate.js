const formValidationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  inputErrorClass: 'form__input-error_active',
  inputIsInvalidClass: 'form__input_type_error',
  submitBtnSelector: '.form__submit-btn',
  submitBtnInactiveClass: 'form__submit-btn_inactive'
}


const showInputError = (config, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputIsInvalidClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorClass);
};

const hideInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputIsInvalidClass);
  errorElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = " ";
};

const isValid = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, formElement, inputElement);
  }
};

const enableValidation = (config) => {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(config, formElement);
  })
};

const hasInvalidInputs = (inputsList) => {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (config, inputsList, buttonElement) => {
  if (hasInvalidInputs(inputsList)) {
    buttonElement.classList.add(config.submitBtnInactiveClass);
  } else {
    buttonElement.classList.remove(config.submitBtnInactiveClass);
  }
};

const setEventListeners = (config, formElement) => {
  const inputsList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitBtnSelector);
  toggleButtonState(config, inputsList, buttonElement);
  
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(config, formElement, inputElement);
      toggleButtonState(config, inputsList, buttonElement);
    })
  })
};

enableValidation(formValidationConfig);