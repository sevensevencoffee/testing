import "./styles.css";
import { greeting } from "./greeting.js"

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(["Hello", "webpack"], ' ');
    element.classList.add('hello');

    return element;
}

console.log(greeting);

document.body.appendChild(component());