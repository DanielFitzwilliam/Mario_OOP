import{ctx} from "./player.js"

class Tube {
    constructor(image) {
        // Initial position of the tube
        this.position = {
            x: 500,
            y: 180
        };
        this.image = image;
        this.width = 100;
        this.height = 120;
    };
    // Method to draw the tube on the canvas
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    };
};

//Load image
let imageTube = new Image();
imageTube.src = 'https://samayass.github.io/samayaCSA/images/tube.png'
let tube = new Tube(imageTube);

export {tube}