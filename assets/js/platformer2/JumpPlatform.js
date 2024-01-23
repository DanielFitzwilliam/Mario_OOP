import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class JumpPlatform extends GameObject {
    constructor(canvas, image, data, xPosition, yPosition, name) {
        super(canvas, image, data);
        this.data = data;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.name = name
        this.relativeX = "";
    }

    size() {
    }

    // Required, but no update action
    update() {
        this.collisionChecks();
        this.draw();
    }

    collisionAction() {
        //collision only detects mario and it only applies to the item block
        if (this.collisionData.touchPoints.other.id === "player" && this.name === "block") {
            if (this.relativeX === 0 || this.relativeX === -300) {
                this.relativeX = -300;
            } else {
                this.relativeX = 0;
                console.log(this.relativeX)
            }
        }
    }

    // Draw position is always 0,0
    draw() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerHeight * (this.data.sizeRatio / 832);
        const scaledWidth = GameEnv.innerHeight * 1/10;  // width of jump platform is 1/10 of height
        const platformX = GameEnv.innerWidth * this.xPosition;
        const platformY = (GameEnv.bottom - scaledHeight)  * this.yPosition;
        this.x = platformX
        this.y = platformY

        // set variables used in Display and Collision algorithms
        this.bottom = platformY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
    
        //this.canvas.width = this.width; 
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${platformX}px`;
        this.canvas.style.top = `${platformY}px`;  

        this.ctx.drawImage(this.image, this.relativeX, 0, this.canvas.width / this.data.widthRatio, this.canvas.height / this.data.heightRatio);
        //this.ctx.drawImage(this.image, 0, 0);
    }
    
}

export default JumpPlatform;