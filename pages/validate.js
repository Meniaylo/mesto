const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = " ";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const enableValidation = () => {
  const formsList = Array.from(document.querySelectorAll('.form'));
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  })
};

const hasInvalidInputs = (inputsList) => {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputsList, buttonElement) => {
  if (hasInvalidInputs(inputsList)) {
    buttonElement.classList.add('form__submit-btn_inactive');
  } else {
    buttonElement.classList.remove('form__submit-btn_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputsList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-btn');
  toggleButtonState(inputsList, buttonElement);
  
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputsList, buttonElement);
    })
  })
};

enableValidation();