let menu = [];
let addToCartBtn = [];
let cart = [];
let allDeleteBtns = [];

updatecartCount();

function updatecartCount() {
  document.getElementById("cartLength").innerText = cart.length;
}

if (import.meta.env.DEV) {
  import("../api/browser").then(({ worker }) =>
    worker
      .start()
      .then(() => fetch("/dishes"))
      .then((res) => res.json())
      .then((res) => (menu = res))
  );
}

let allDishes = document.getElementById("allDishes");
let content = "";
let cartContent = "";

displayAll(menu);
displayCartItems();

function displayAll(filteredItems) {
  let content = "";

  filteredItems.forEach((dish) => {
    let individualDish = `<div class="dish">
    <div class="dishImg">
      <img src="${dish.img}">
    </div>
    <div class="dishContent">
      <div class="top">
        <h3 class="dishName">${dish.title}</h3>
        <h4 class="dishPrice"> $${dish.price}</h4>
      </div>
      <div class="bottom">
        <p class="desc"> ${dish.desc}</p>
        <button id="${dish.id}" class="addToCartBtn">Add to cart</button>
      </div>
    </div>
  </div>`;
    content += individualDish;
  });

  allDishes.innerHTML = content;
  getAddToCartBtns();
}

//filter logic here
let allBtn = document.querySelectorAll("button");
allBtn.forEach((button) =>
  button.addEventListener("click", (e) => {
    filterItems(e.target.innerText);
  })
);

function filterItems(category) {
  allDishes.innerHTML = "";

  if (category === "All") {
    displayAll(menu);
  } else {
    let filteredItems = menu.filter(
      (dish) =>
        dish.category.toLocaleLowerCase() == category.toLocaleLowerCase()
    );
    displayAll(filteredItems);
  }
}

//select all add to cart buttons
function getAddToCartBtns() {
  addToCartBtn = document.querySelectorAll(".addToCartBtn");
  addToCartBtn.forEach((button) =>
    button.addEventListener("click", (e) => {
      addDishToCart(e.target.id);
    })
  );
}

function addDishToCart(dishId) {
  let flag = -1;
  menu.forEach((dish) => {
    if (dish.id == dishId) {
      cart.forEach((cartDish) => {
        if (cartDish.id == dishId) {
          cartDish.quantity += 1;
          flag = 1;
        }
      });
      if (flag != 1) {
        let tempDish = { ...dish, quantity: 1 };
        cart.push(tempDish);
      }
    }
  });
  updatecartCount();
  displayCartItems();
}

function displayCartItems() {
  cartContent = "";
  cart.forEach((dish) => {
    let individualDish = `<div class="cartContent">
    <img src="${dish.img}" alt="img">
    <table>
    
      <tbody>
        <tr>
          <th>${dish.title}</th>
          <th>$${dish.price}</th>
          <th>${dish.quantity}</th>
        </tr>
      </tbody>
    </table>
    <button id="remove">
      <img id="${dish.id}" class="deletImg" src="./img/delete.svg" alt="delete">
    </button>
    </div> `;

    cartContent += individualDish;
  });

  document.getElementById("cartSection").innerHTML = cartContent;
  getDeleteBtns();
}

//select all  delete buttons
function getDeleteBtns() {
  allDeleteBtns = document.querySelectorAll(".deletImg");
  allDeleteBtns.forEach((button) =>
    button.addEventListener("click", (e) => {
      deleteDish(e.target.id);
    })
  );
}

function deleteDish(removeId) {
  let flag = -1;
  let tempId = -1;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == removeId) {
      flag = 1;
      tempId = i;
    }
  }
  if (flag) {
    cart.splice(removeId, 1);
  }
  updatecartCount();
  displayCartItems();
}
