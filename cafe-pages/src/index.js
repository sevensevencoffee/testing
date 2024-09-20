import "./styles.css";
import { createHome } from "./home.js";
import { createCafeMenu } from "./cafe-menu.js";
import { createWineBarMenu } from "./wine-bar-menu.js";

document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector("#content");
    createHome(container);

    let homePage = document.querySelector("#home");
    homePage.addEventListener("click", () => {
        clean(container);
        createHome(container);
    })

    let cafeMenu = document.querySelector("#cafeBtn");
    cafeMenu.addEventListener("click", () => {
        clean(container);
        createCafeMenu(container);    
    });

    let wineMenu = document.querySelector("#wineBtn");
    wineMenu.addEventListener("click", () => {
        clean(container);
        createWineBarMenu(container);
    })
});

function clean(div) {
    div.innerHTML = "";
}
