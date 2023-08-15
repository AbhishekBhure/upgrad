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
