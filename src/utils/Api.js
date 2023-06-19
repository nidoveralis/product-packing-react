class Api {
  constructor() {
    this._headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    this._baseUrl = 'http://127.0.0.1';
  }

  _getResponseData(res) {
    if(!res) {
      console.log(res, res.status)
    }
    return res.json()
  }

  submitBox(data) {
    return fetch(`${this._baseUrl}/front-pull/v1/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        orderkey: data
      })
    })
    .then(res => this._getResponseData(res))
  }

  addedNewOrder(data) {
    return fetch(`${this._baseUrl}/api/new-order`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
      .then(res => this._getResponseData(res))
    })
  }

  checkProduct(data) {
    return fetch(`${this._baseUrl}/sku-check`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'sku':data
      })
      .then(res => this._getResponseData(res))
    })
  }

  checkCarton(data) {
    return fetch(`${this._baseUrl}/selected-carton`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'selected_carton':data
      })
      .then(res => this._getResponseData(res))
    })
  }

};

export const api = new Api();
