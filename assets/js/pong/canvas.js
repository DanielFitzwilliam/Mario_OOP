import {selectedValue} from "./radio.js"

//Get canvas element
const canvas = document.getElementById("window");
const ctx = canvas.getContext("2d");

//function to draw image
function drawBg() {
    const image = new Image();
    if (selectedValue === "Calvin") { //draws the image based on the radio button that is clicked.
        image.src = "/Mario_OOP/images/dogs/Calvin.png";
    }
    else if (selectedValue === "Freckles") {
        image.src = "/Mario_OOP/images/dogs/Freckles.png";
    }
    
    image.onload = function() {

        //calculate aspect ratio
        const aspectRatio = image.width / image.height;
        
        //set new image dimensions
        let newWidth = canvas.width;
        let newHeight = canvas.height / aspectRatio;
        
        // Check if the height exceeds the canvas height
        if (newHeight > canvas.height) {
            newHeight = canvas.height;
            newWidth = canvas.height * aspectRatio;
        };
        
        // Calculate the center position to draw the image
        const x = (canvas.width - newWidth) / 2;
        const y = (canvas.height - newHeight) / 2;

        // Clear the canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //draw the image
        ctx.drawImage(image, x, y, newWidth, newHeight);
    };
};

drawBg();

export {drawBg}