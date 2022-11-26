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

// Feature Tab
const feature = document.querySelector(".feature");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".feature__content");

feature.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        buttons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        contents.forEach(function (content) {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});