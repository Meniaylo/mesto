export default class UserInfo {
  constructor({ userProfileConfig, handleAvatarClick }) {
    this._userName = document.querySelector(userProfileConfig.nameSelector);
    this._userOccupation = document.querySelector(userProfileConfig.occupationSelector);
    this._userAvatar = document.querySelector(userProfileConfig.avatarSelector);
    this._avatarWrapperToClick = document.querySelector(userProfileConfig.avatarWrapperToClick);
    this._handleAvatarClick = handleAvatarClick;
    this._id = '';
  }

  setUserInfoFromServer(data) {
    this._userName.textContent = data.name;
    this._userOccupation.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._id = data.id;
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

  setAvatar(url) {
    this._userAvatar.src = url;
  }

  setEventListeners() {
    this._avatarWrapperToClick.addEventListener('click', (evt) => {
      this._handleAvatarClick();
    })
  }
}