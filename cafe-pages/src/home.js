import heroImage from "./Hero-Image.png";

export function createHome(container) {
    let hero = document.createElement("div");
    hero.className = "hero";
    let heroImg = document.createElement("img");
    heroImg.src = heroImage;
    heroImg.className = "hero-image"
    hero.appendChild(heroImg);

    let info = document.createElement("div");
    info.className = "info"
    let locationCard = document.createElement("div");
    let locationHeader = document.createElement("p");
    locationHeader.textContent = "Location";
    let locationText = document.createElement("p");
    locationText.innerHTML = 'SOHO CAFE & WINE BAR<br>' +
                             '123 Main Street<br>' +
                             'New York, NY 10001'

    let hoursCard = document.createElement("div");
    let hoursHeader = document.createElement("p");
    hoursHeader.textContent = "Hours";
    let hoursText = document.createElement("p");
    hoursText.innerHTML = 'Sunday - Thursday: <br>' +
                          '7am - noon, 5pm - midnight <br>' +
                          'Friday & Saturday: <br>' +
                          '8am - noon, 5pm - 2am'
    
    let contactCard = document.createElement("div");
    let contactHeader = document.createElement("p");
    contactHeader.textContent = "Contact";
    let contactText = document.createElement("p");
    contactText.innerHTML = 'phone: 212-371-7777 <br>' +
                            'email: hello@sobarcafe.com'

    info.appendChild(locationCard);
    info.appendChild(hoursCard);
    info.appendChild(contactCard);
    locationCard.appendChild(locationHeader);
    locationCard.appendChild(locationText);
    hoursCard.appendChild(hoursHeader);
    hoursCard.appendChild(hoursText);
    contactCard.appendChild(contactHeader);
    contactCard.appendChild(contactText);

    let about = document.createElement("div");
    let aboutHeader = document.createElement("p");
    aboutHeader.textContent = "More than coffee and wine";
    aboutHeader.className = "about-main-h";
    about.appendChild(aboutHeader);
    let aboutContent = document.createElement("div");
    about.appendChild(aboutContent);
    aboutContent.className = "about-sec";
    let aboutContentH = document.createElement("p");
    aboutContentH.textContent = "About";
    aboutContentH.className = "about-header";
    aboutContent.appendChild(aboutContentH);
    let aboutContentC = document.createElement("p");
    aboutContentC.textContent = "A cozy Soho living room, salon, or third space—whatever name speaks to you the most. Reminiscent of the old days when human interaction was closer and more natural. Enjoy a seasonal selection of the best coffee and wine to bring you one step closer to each other."
    aboutContentC.className = "about-content";
    aboutContent.appendChild(aboutContentC);

    let reserve = document.createElement("button");
    reserve.className = "button-reservation";
    reserve.textContent = "Reserve";

    container.appendChild(hero);
    container.appendChild(info);
    container.appendChild(about);
    container.appendChild(reserve);
};