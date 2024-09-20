import wineMenuImg from "./wine-menu.png";

export function createWineBarMenu(container) {
    let wineBarMenu = document.createElement("div");
    wineBarMenu.className = "wine-menu-container";

    let wineImg = document.createElement("img");
    wineImg.src = wineMenuImg;
    wineImg.className = "wine-menu-img";

    wineBarMenu.appendChild(wineImg);

    container.appendChild(wineBarMenu);
}