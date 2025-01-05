// menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// rød farve i menuen ved aktiv html
const currentPath = window.location.pathname.split("/").pop();

if (currentPath === "index.html") {
  document.querySelector(".menu-hjem").classList.add("active");
} else if (currentPath === "portfolio.html") {
  document.querySelector(".menu-portfolio").classList.add("active");
} else if (currentPath === "om.html") {
  document.querySelector(".menu-om").classList.add("active");
}
