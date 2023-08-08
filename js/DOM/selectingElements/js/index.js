const title = document.getElementById("site-title");
title.innerText = "Dynamation SpaceTech";

const navLi = document.getElementsByTagName("li");
Array.from(navLi).forEach((el) => (el.innerText = `--${el.innerText}--`));

const contentText = document.getElementsByClassName("content-text");
Array.from(contentText).forEach(
  (el) => (el.innerText = el.innerText.toUpperCase())
);

const siteDecs = document.querySelector("#site-description");
siteDecs.innerText = siteDecs.innerText.replace(
  "DynTech LLC",
  "Dynamation SpaceTech"
);

const contentDiv = document.querySelector(".content");
contentDiv.style.backgroundColor = "white";
contentDiv.style.textAlign = "center";

const oddNav = document.querySelectorAll("#nav > li:nth-of-type(odd)");
oddNav.forEach((el) => (el.style.backgroundColor = "gray"));
