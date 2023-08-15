const allEmployees = document.querySelector(".all-employees");
const taskForce = document.querySelector(".task-force");
const employeeCards = document.querySelectorAll(".employee");
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPanel = document.createElement("div");
  createPanel.setAttribute("class", "info-panel");
  createPanel.innerText = name;
  createPanel.style.top = `${y}px`;
  createPanel.style.left = `${x}px`;
  return createPanel;
};

const removeInfoPanel = () => document.querySelector(".info-panel")?.remove();

allEmployees.addEventListener("contextmenu", function (evt) {
  evt.preventDefault();
  removeInfoPanel();
  if (evt.target.getAttribute("class") === "employee") {
    const name = evt.target.getAttribute("data-name");
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);

    allEmployees.append(infoPanel);
  }
});

allEmployees.addEventListener("click", () => removeInfoPanel());

//Drag'n'Drop

employeeCards.forEach((el) => {
  el.addEventListener("dragstart", function (evt) {
    removeInfoPanel();
    const getId = evt.target.getAttribute("data-id");
    evt.dataTransfer.setData("text/plain", getId);
  });
});

taskForce.addEventListener("dragenter", function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.add("highlight-drop");
});

taskForce.addEventListener("dragleave", function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.remove("highlight-drop");
});

taskForce.addEventListener("drop", function (evt) {
  evt.preventDefault();
  const empId = evt.dataTransfer.getData("text/plain");
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  evt.currentTarget.classList.remove("highlight-drop");

  //save the updated state to localstorage
  saveStateToLocalStorage();
  console.log("Saved state to local storage:", taskForce.innerHTML);
});

taskForce.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});

allEmployees.addEventListener("dragenter", function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.add("highlight-drop");
});

allEmployees.addEventListener("dragleave", function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.remove("highlight-drop");
});

allEmployees.addEventListener("drop", function (evt) {
  evt.preventDefault();
  const empId = evt.dataTransfer.getData("text/plain");
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  evt.currentTarget.classList.remove("highlight-drop");

  //save the updated state to localstorage
  saveStateToLocalStorage();
  console.log("Saved state to local storage:", taskForce.innerHTML);
});

allEmployees.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});

function saveStateToLocalStorage() {
  // Save the current state of taskForce to local storage
  localStorage.setItem("dragAndDropState", taskForce.innerHTML);
}

window.addEventListener("load", () => {
  const savedState = localStorage.getItem("dragAndDropState");
  console.log("Loaded state from local storage:", savedState);
  if (savedState) {
    // Restore the saved state
    taskForce.innerHTML = savedState;
    localStorage.removeItem("dragAndDropState"); // Remove the saved state after loading
  }
});
