const para = document.querySelector("#para");
const morning = document.querySelector("#morning");
const day = document.querySelector("#day");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");
const p = document.querySelector(".p");
const bolgTitle = document.getElementById("blogtitle");
const addPost = document.getElementById("addpost");

morning.addEventListener("click", () => (para.innerText = "Good Morning"));
day.addEventListener("click", () => (para.innerText = "Good day"));
afternoon.addEventListener("click", () => (para.innerText = "Good afternoon"));
night.addEventListener("click", () => (para.innerText = "Good night"));
p.addEventListener("mouseover", () => {
  p.classList.add("bg");
});
p.addEventListener("mouseout", () => {
  p.classList.remove("bg");
});

bolgTitle.addEventListener("change", (e) => {
  e.target.value == 0
    ? (bolgTitle.style.border = "5px solid red")
    : (bolgTitle.style.border = "5px solid green");
});

addPost.addEventListener("click", storePost);

function storePost() {
  let inputValue = document.getElementById("blogtitle").value;

  let newPostItem = document.createElement("li");
  let newContent = document.createElement("p");
  newContent.innerText = inputValue;
  newPostItem.appendChild(newContent);

  let allPosts = document.getElementById("allpost");
  allPosts.appendChild(newPostItem);
  document.getElementById("blogtitle").value = "";
}
