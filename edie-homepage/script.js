const burger = document.querySelector(".header__items__container--menu");
const burgerIconClose = document.querySelector(".close");
const burgerIconOpen = document.querySelector(".open");
const navContainer = document.querySelector(".header__items__container--nav");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const menuNav = document.querySelector(".menu__nav");
const navLinks = menuNav.querySelectorAll("li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("burgerContainer");
    burgerIconClose.classList.remove("burgerSvgLight");
    navContainer.classList.togremovegle("turnDark");
    body.classList.remove("hideOverflow");
    wrapper.classList.remove("hideOverflow");
    menuNav.classList.remove("changeMenuNav");
    burgerIconOpen.classList.remove("lowOpacity");
  });
});

burger.addEventListener("click", () => {
  burger.classList.toggle("burgerContainer");
  burgerIconClose.classList.toggle("burgerSvgLight");
  navContainer.classList.toggle("turnDark");
  body.classList.toggle("hideOverflow");
  wrapper.classList.toggle("hideOverflow");
  menuNav.classList.toggle("changeMenuNav");
  burgerIconOpen.classList.toggle("lowOpacity");
});
