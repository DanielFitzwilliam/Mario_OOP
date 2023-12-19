import {drawBg} from "./canvas.js"

//Get canvas element
const canvas = document.getElementById("window");
const ctx = canvas.getContext("2d");

class Paddle {
    constructor(x, y, width, height, speed, moveUpKey, moveDownKey) {
        this.x = x; //x position on the screen
        this.y = y; //y position on the screen
        this.width = width; //width of the paddle
        this.height = height; //height of the paddle
        this.speed = speed; //speed of movement of the paddle
        this.moveUpKey = moveUpKey;
        this.moveDownKey = moveDownKey;
        this.keysPressed = {}; //holds all current keys pressed
        document.addEventListener("keydown", (e) => this.keyDownHandler(e));
        document.addEventListener("keyup", (e) => this.keyUpHandler(e))
    };
    update() {
        if(this.keysPressed[this.moveUpKey]) {
            this.y -= this.speed;
        };
        if(this.keysPressed[this.moveDownKey]) {
            this.y += this.speed;
        };
        this.drawPaddle(this.x, this.y , this.width, this.height)
    };
    drawPaddle(x, y, width, height) { //draws paddle to the screen
        ctx.fillStyle = "white"; //paddle color
        ctx.fillRect(x, y, width, height);
    };
    keyUpHandler(e) {
        this.keysPressed[e.key] = false;
    };
    keyDownHandler(e) {
        this.keysPressed[e.key] = true;
    }
};

const leftPaddle = new Paddle (10, 100, 10, 100, 5, "w", "s");
const rightPaddle = new Paddle (480, 100, 10, 100, 5, "i", "k")

export {leftPaddle, rightPaddle}