class Http {
  constructor(uri) {
    this.uri = uri;
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
  static errorHandler(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
  }
  get(path = "", qs) {
    return fetch(`${this.uri}${path}/?${Http.serialize(qs)}`).then(
      Http.errorHandler
    );
  }
  post(path = "", data) {
    const req = new Request(`${this.uri}${path}`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return fetch(req).then(Http.errorHandler);
  }
  delete(path = "", id) {
    const req = new Request(`${this.uri}${path}/${id}`, { method: "DELETE" });
    return fetch(req).then(Http.errorHandler);
  }
}

export default Http;
