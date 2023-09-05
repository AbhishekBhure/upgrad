import Http from "./Http";
const container = document.querySelector(".list");
const total = document.querySelector(".total");
const addProductForm = document.querySelector("form[name=add-product]");
const http = new Http("http://localhost:3000/products");

const Row = ({ product, price, id }) =>
  `<div class="product">
    <span class="prod-name">${product}</span>
    <span class="prod-cost">$${price}</span>
    <div class="delete-btn"><a href="#" name="delete-btn" data-id="${id}">X</a></div>
  </div>`;

const render = function (arr) {
  const elems = arr.map((e) => Row(e));
  const totalCost = arr.reduce((prev, curr) => prev + Number(curr.price), 0);

  container.innerHTML = elems.join("");
  total.innerHTML = Row({ product: "TOTAL", price: totalCost });
};

// const getData = (uri) =>
//   new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", function () {
//       resolve(JSON.parse(this.response));
//     });
//     xhr.addEventListener("error", () => reject());
//     xhr.open("GET", uri);
//     xhr.send();
//   });

async function loadAndRender() {
  try {
    const response = await http.get();
    const json = await response.json();
    render(json);
  } catch {
    alert("There was an error talking to the server!");
  }
}

loadAndRender();

//add product and reload
addProductForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let product = e.target.elements.product;
  let price = e.target.elements.price;
  console.log(product.value, price.value);
  try {
    if (product.value !== "" && price.value !== 0) {
      await http.post(
        "/",
        JSON.stringify({ product: product.value, price: Number(price.value) })
      );
      loadAndRender();
    }
  } catch (error) {
    alert(`There was an error storing data: ${error}`);
  } finally {
    product.value = "";
    price.value = "";
  }
});

container.addEventListener("click", async function (e) {
  e.preventDefault();
  if (e.target.getAttribute("name") === "delete-btn") {
    let id = e.target.getAttribute("data-id");
    try {
      await http.delete("/", id);
      loadAndRender();
    } catch (error) {
      alert(`Error in deleting the product:${error} `);
    }
  }
});
