class Http {
  constructor(uri) {
    this.uri = uri;
    this.xhr = new XMLHttpRequest();
  }
  static serialize(obj) {
    let qs = [];
    for (let prop in obj) {
      qs = [
        ...qs,
        `${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`,
      ];
    }

    return qs.join("&");
  }
  get(qs) {
    return new Promise((resolve, reject) => {
      this.xhr.open("GET", `${this.uri}/?${Http.serialize(qs)}`, true);
      this.xhr.addEventListener("load", function () {
        resolve({ status: this.statusText, response: this.response });
      });
      this.xhr.addEventListener("error", (error) => reject(error));
      this.xhr.send();
    });
  }
  post(data) {
    return new Promise((resolve, reject) => {
      this.xhr.addEventListener("load", function () {
        resolve({ status: this.statusText, response: this.response });
      });
      this.xhr.addEventListener("error", (error) => reject(error));
      this.xhr.open("POST", this.uri, true);
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.send(data);
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      this.xhr.addEventListener("load", function () {
        resolve({ status: this.statusText });
      });
      this.xhr.addEventListener("error", (error) => reject(error));
      this.xhr.open("DELETE", `${this.uri}/${id}`, true);
      this.xhr.send();
    });
  }
}

export default Http;
