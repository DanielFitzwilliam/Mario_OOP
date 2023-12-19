import {drawBg} from "./canvas.js"

let selectedValue = "Freckles"; //defines selectedValue in a wider scope

const Dogs = document.getElementsByName('Dogs');
Dogs.forEach(button => {
    button.addEventListener("click", returnRadioValue);
});

function returnRadioValue() {
    const Dogs = document.getElementsByName('Dogs');
    Dogs.forEach(button => {
        if (button.checked) {
            selectedValue = button.value;
            //selectedValue returns the value of the button that is pressed down
        }
    });
    drawBg(); //draws the new image
};

export {selectedValue}