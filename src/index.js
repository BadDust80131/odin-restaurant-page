import "./style.css"
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

home();

const homeButton = document.querySelector(".home-button")
homeButton.addEventListener("click", () => {
    home();
});

const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", () => {
    menu();
});

const aboutButton = document.querySelector(".about-button")
aboutButton.addEventListener("click", () => {
    about();
});