// your JavaScript file

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
});

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//
const p = document.createElement("p");
p.classList.add("p");
p.style.color = "red";
p.textContent = "Hey I'm red!"

container.appendChild(p);

//
const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!"

container.appendChild(h3);

//
const div1 = document.createElement("div");
div1.classList.add("div1");
div1.style.cssText = "border: 1px solid black; background: pink; "

container.appendChild(div1);

// inside the div1
const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div"

div1.appendChild(h1);

//inside the div1
const p2 = document.createElement("p");
p2.classList.add("p2");
p2.textContent = "ME TOO!"

div1.appendChild(p2);