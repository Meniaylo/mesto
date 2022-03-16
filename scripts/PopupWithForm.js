export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
    }
    
    close() {
      super.close();
      // this.form.reset();
    }

    _getInputValues() {

    }

    setEventListeners() {

    }
  }