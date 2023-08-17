import {
  addToShoppingList,
  setPriority,
  removeItem,
  addToCompletedList,
  clearCompleted,
  bootUp,
} from "./model";
import { renderShoppingList, renderCompletedList } from "./view";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

itemInput.addEventListener("keyup", function (evt) {
  if (evt.key === "Enter") {
    //Add to shopping list
    addToShoppingList(evt.target.value);

    //update the view
    renderShoppingList();

    this.value = "";
  }
});

shoppingListDiv.addEventListener("click", function (evt) {
  if (evt.target.parentElement.classList.contains("priority-control")) {
    //Priority
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");
    console.log(itemId, priority);

    //Set priority
    setPriority(itemId, priority);
    //renderView
    renderShoppingList();
  }

  //Remove Item
  if (evt.target.classList.contains("remove-btn")) {
    const itemId = evt.target.parentElement.getAttribute("data-id");
    const confirm = window.confirm("Do you really want to delete?");

    //if the item is removed update the view
    if (confirm) {
      removeItem(itemId);
      renderShoppingList();
    }
  }
});

shoppingListDiv.addEventListener("dragstart", function (evt) {
  const getId = evt.target.getAttribute("data-id");
  evt.dataTransfer.setData("text/plain", getId);
});

completedDiv.addEventListener("drop", function (evt) {
  const itemId = evt.dataTransfer.getData("text/plain");

  if (itemId) {
    //add to completedDiv
    addToCompletedList(itemId);

    //updated the shopping list
    renderShoppingList();

    //update completed tasks list
    renderCompletedList();
  }
});

completedDiv.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});

clearCompletedBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  clearCompleted();
  renderCompletedList();
});

//Immediatly invoked function expression (IIFE)
(() => {
  bootUp();
  renderShoppingList();
  renderCompletedList();
})();
