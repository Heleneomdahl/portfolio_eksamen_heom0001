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
// Find alle links i menuen
const menuLinks = document.querySelectorAll(".menu a");

// Hent den aktuelle URL (filnavn)
const currentPage = window.location.pathname.split("/").pop();

// Loop igennem links og tjek, om href matcher URL
menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active"); // Tilføj 'active'-klassen til det matchende link
  }
});

// gør de andre billeder slørrede når man har curseren på ét billede (portfolio)
const boksPortfolios = document.querySelectorAll(".boks_portfolio");

boksPortfolios.forEach((boks) => {
  boks.addEventListener("mouseenter", () => {
    // Når musen er over et billede, gør alle billeder fade-out undtagen det hoverede
    boksPortfolios.forEach((otherBoks) => {
      if (otherBoks !== boks) {
        otherBoks.querySelector(".billede_portfolio").classList.add("fade-out");
      }
    });
  });

  boks.addEventListener("mouseleave", () => {
    // Når musen forlader billedet, fjern fade-out fra alle billeder
    boksPortfolios.forEach((otherBoks) => {
      otherBoks.querySelector(".billede_portfolio").classList.remove("fade-out");
    });
  });
});
