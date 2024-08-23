import logo from "./logo.png"

export function menu () {
    // Clear Previous
const content  = document.querySelector("#content");
content.innerHTML = "";

// Home Container
const homeContainer = document.createElement("div")
homeContainer.className = "home-container";
content.appendChild(homeContainer);

// Home Title
const homeTitle = document.createElement("h1");
homeTitle.className = "home-title";
homeTitle.innerHTML = "Our Menu";
homeContainer.appendChild(homeTitle);

// Home Image
const homeImage = document.createElement("img");
homeImage.src = logo;
homeImage.className = "home-image";
homeContainer.appendChild(homeImage);

// Home Text
const homeText = document.createElement("p");
homeText.className = "home-text";
homeText.innerHTML = "9.99 Cheese Burger, 5.99 - Fries, 2.99 Drink";
homeContainer.appendChild(homeText);
}