export default class UserInfo {
  constructor({ nameSelector, occupationSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userOccupation = document.querySelector(occupationSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  setUserInfoFromServer(data) {
    this._userName.textContent = data.name;
    this._userOccupation.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      occupation: this._userOccupation.textContent
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.inputName;
    this._userOccupation.textContent = data.inputOccupation;
  }
}