export default class UserInfo {
  constructor({ nameSelector, occupationSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userOccupation = document.querySelector(occupationSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      occupation: this._userOccupation.textContent
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._inputsData = data;

    this._userName.textContent = this._inputsData.inputName;
    this._userOccupation.textContent = this._inputsData.inputOccupation;
  }
}