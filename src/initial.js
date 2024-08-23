import logo from "./logo.png"

const content  = document.querySelector("#content");

// Home Container
const homeContainer = document.createElement("div")
homeContainer.className = "home-container";
content.appendChild(homeContainer);

// Home Title
const homeTitle = document.createElement("h1");
homeTitle.className = "home-title";
homeTitle.innerHTML = "Welcome to Master Chef.";
homeContainer.appendChild(homeTitle);

// Home Image
const homeImage = document.createElement("img");
homeImage.src = logo;
homeImage.className = "home-image";
homeContainer.appendChild(homeImage);

// Home Text
const homeText = document.createElement("p");
homeText.className = "home-text";
homeText.innerHTML = "We serve the best food in town! Our ingredients are fresh, our chefs are world-class, and the atmosphere is simply unbeatable. Come visit us!";
homeContainer.appendChild(homeText);
