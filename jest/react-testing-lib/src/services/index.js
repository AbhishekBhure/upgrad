const base = "http://localhost:8080";

const responseErrorHandler = response => {
  if (!response.ok) {
    throw response;
  }
  return response;
};

export const getToDos = () => {
  return fetch(`${base}/todos`)
    .then(responseErrorHandler)
    .then(res => res.json());
};

export const setDone = (done, id) => {
  return fetch(`${base}/todos/${id}`, {
    method: "PATCH",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ done })
  })
    .then(responseErrorHandler)
    .then(res => res.json());
};

export const deleteToDo = id => {
  return fetch(`${base}/todos/${id}`, {
    method: "DELETE",
    cache: "no-cache"
  })
    .then(responseErrorHandler)
    .then(res => res.json());
};

export const addTodo = obj => {
  return fetch(`${base}/todos`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  })
    .then(responseErrorHandler)
    .then(res => res.json());
};
