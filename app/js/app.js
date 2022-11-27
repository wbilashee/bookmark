const body = document.body;
const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo img");
const fadeItems = document.querySelectorAll(".has-fade");
const navToggler = document.querySelector(".header__toggle");

navToggler.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        removeClass(body, "no-scroll");
        removeClass(header, "open");
        logo.setAttribute("src", "./images/logo-bookmark.svg");
        fadeItems.forEach(elem => {
            removeClass(elem, "fade-in");
            addClass(elem, "fade-out");
        });
    } else {
        addClass(body, "no-scroll");
        addClass(header, "open");
        logo.setAttribute("src", "./images/logo-white.svg");
        fadeItems.forEach(elem => {
            removeClass(elem, "fade-out");
            addClass(elem, "fade-in");
        });
    }
});

// Feature Tab
const feature = document.querySelector(".feature");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".feature__content");

feature.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        buttons.forEach(function (btn) {
            removeClass(btn, "active");
        });
        e.target.classList.add("active");
        contents.forEach(function (content) {
            removeClass(content, "active");
        });
        const element = document.getElementById(id);
        addClass(element, "active");
    }
});

// Links
const links = document.querySelectorAll("a[href='#']");
links.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
}));

const form = document.querySelector(".contact__form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const errorIcon = document.querySelector(".icon-error");
const inputWrapper = document.querySelector(".input__wrapper");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = email.value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
        addClass(error, "active");
        addClass(email, "invalid");
        addClass(errorIcon, "active");
        addClass(inputWrapper, "error");
        error.setAttribute("role", "alert");
    } else {
        email.value = "";
        error.removeAttribute("role");
        removeClass(error, "active");
        removeClass(email, "invalid");
        removeClass(errorIcon, "active");
        removeClass(inputWrapper, "error");
    }
});

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}