const Api = {
  headers(additionals = {}) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Headers(Object.assign(additionals, headers));
  },

  async get(url, headers = {}) {
    return fetch(url, {
      headers: this.headers(headers),
      method: 'GET',
    })
      .then(res => this.formatResponse(res))
      .catch(error => this.formatError(error));
  },

  async delete(url, headers = {}) {
    return fetch(url, {
      headers: this.headers(headers),
      method: 'DELETE',
    })
      .then(res => this.formatResponse(res))
      .catch(error => this.formatError(error));
  },

  async post(url, data, headers = {}) {
    return fetch(url, {
      headers: this.headers(headers),
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => this.formatResponse(res))
      .catch(error => this.formatError(error));
  },

  async put(url, data, headers = {}) {
    return fetch(url, {
      headers: this.headers(headers),
      method: 'PUT',
      body: JSON.stringify(data),
    })
      .then(res => this.formatResponse(res))
      .catch(error => this.formatError(error));
  },

  formatResponse(res) {
    return res.json().then(json => {
      return {
        data: json,
        status: res.status,
        headers: res.headers,
        success: res.ok,
      };
    });
  },

  formatError(error) {
    console.log(error);
    return {
        message: error.message,
    };
  },
};

export default Api;