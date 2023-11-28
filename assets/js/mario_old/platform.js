import {ctx} from "./player.js"

    // Define the Platform class
    class Platform {
        constructor(image) {
            // Initial position of the platform
            this.position = {
                x: -300,
                y: 300
            };
            this.image = image;
            this.width = 650;
            this.height = 100;
        };
        // Method to draw the platform on the canvas
        draw() {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        };
    };
// Load platform image
let image = new Image();
image.src = 'https://samayass.github.io/samayaCSA/images/platform.png'
// Create a platform object
let platform = new Platform(image);
// Define keyboard keys and their states

export {platform}