// Write your code here...
import { getMessages, getComments } from "../api";
import { renderContent } from "../utils";
const messagesContainer = document.querySelector("#messages");
const getMessageBtn = document.querySelector("#getMessages");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");

getMessageBtn.addEventListener("click", () => {
  spinner.style.display = "block";
  messagesContainer.innerHTML = "";
  error.innerText = "";

  //these are coming after a delay so we need to find a way to rsolve these first and render them
  // getMessages().then((res) => console.log(res));
  // getComments().then((res) => console.log(res));

  //Promise.all()
  // Promise.all([getMessages(), getComments()])
  //   .then(([messages, comments]) =>
  //     renderContent(messages, comments, messagesContainer)
  //   )
  //   .catch((err) => (errorEl.innerText = `Error: ${err}`))
  //   .finally(() => (spinner.style.display = "none"));

  //Promise.allSettled()
  Promise.allSettled([getMessages(), getComments()])
    .then((res) => {
      if (res[1].status === "rejected") {
        return Promise.reject(res[1].reason);
      }
      return res;
    })
    .then(([{ value: messages }, { value: comments }]) =>
      renderContent(messages, comments, messagesContainer)
    )
    .catch((err) => (errorEl.innerText = `Error: ${err}`))
    .finally(() => (spinner.style.display = "none"));
});
