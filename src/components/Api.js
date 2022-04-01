export default class Api {
  constructor(apiInfo) {
    this._baseUrl = apiInfo.baseUrl;
    this._headers = apiInfo.headers;
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
    .then((res) => this._handleServerResponse(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._handleServerResponse(res))
    .then((dataObject) => {
      return dataObject;
    })
    .catch(err => console.log(err))
  }
}
