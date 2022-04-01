export default class Api {
  constructor(apiInfo) {
    this._baseUrl = apiInfo.baseUrl;
    this._headers = apiInfo.headers;
  }


  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
    .then(dataObject => dataObject)
    .catch(err => console.log(err))
  }


  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
    .then(res => this._handleServerResponse(res))
  }


  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._handleServerResponse(res))
  }


  patchUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.inputName,
        about: data.inputOccupation
      })
    })
  }
}
