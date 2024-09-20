import cafeMenuImage from "./cafe-menu.png";

export function createCafeMenu(container) {
    let cafeMenu = document.createElement("div");
    cafeMenu.className = "cafe-menu-container";

    let cafeImg = document.createElement("img")
    cafeImg.src = cafeMenuImage;
    cafeImg.className = "cafe-menu-img"
    cafeMenu.appendChild(cafeImg);

    container.appendChild(cafeMenu);
};