const para = document.querySelector("#para");
const morning = document.querySelector("#morning");
const day = document.querySelector("#day");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");

morning.addEventListener("click", () => (para.innerText = "Good Morning"));
day.addEventListener("click", () => (para.innerText = "Good day"));
afternoon.addEventListener("click", () => (para.innerText = "Good afternoon"));
night.addEventListener("click", () => (para.innerText = "Good night"));
