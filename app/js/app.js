const body = document.body;
const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo img");
const fadeItems = document.querySelectorAll(".has-fade");
const navToggler = document.querySelector(".header__toggle");

navToggler.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        body.classList.remove("no-scroll");
        header.classList.remove("open");
        logo.setAttribute("src", "./images/logo-bookmark.svg");
        fadeItems.forEach(elem => {
            elem.classList.remove("fade-in");
            elem.classList.add("fade-out");
        });
    } else {
        body.classList.add("no-scroll");
        header.classList.add("open");
        logo.setAttribute("src", "./images/logo-white.svg");
        fadeItems.forEach(elem => {
            elem.classList.remove("fade-out");
            elem.classList.add("fade-in");
        });
    }
});