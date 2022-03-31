export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-38/cards', {
      headers: {
        authorization: "44e7fc01-af6b-414e-a259-74a30bc2c0eb",
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohortId/users/me', {
      method: 'GET'
    })
  }
}
