// Write your code here...
import { getMessages, getComments, prefixDate } from "../api";
import { renderContent } from "../utils";
const messagesContainer = document.querySelector("#messages");
const getMessageBtn = document.querySelector("#getMessages");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");

getMessageBtn.addEventListener("click", async () => {
  spinner.style.display = "block";
  messagesContainer.innerHTML = "";
  error.innerText = "";
  // Fetch messages
  // Fetch comments
  // Render messages + comments
  // Hide the spinner
  try {
    const message = await getMessages();
    const updatedMessage = await prefixDate(message);
    const comments = await getComments();

    renderContent(updatedMessage, comments, messagesContainer);
  } catch (error) {
    errorEl.innerText = `Error ${error}`;
  }
  spinner.style.display = "none";
});
