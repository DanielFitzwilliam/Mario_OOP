import {leftPaddle, rightPaddle} from "./paddle.js"
import {drawBg} from "./canvas.js"
import {ball1} from "./ball.js";

const button = document.getElementById("play");
button.addEventListener("click", startGameLoop);

let gameState; //0 for off. 1 for on
let testCounter; //counts to 10 then ends game loop

resetGameLoop();
function resetGameLoop() {
    gameState = 0;
};

function startGameLoop() {
    if(gameState === 0) {
        gameState = 1;
        testCounter = 0;
        gameLoop();
    };
};

function gameLoop() {
    drawBg();
    leftPaddle.update();
    rightPaddle.update();
    ball1.update();
    requestAnimationFrame(gameLoop);
    //requestAnimationFrame basically calls game loop every "frame" of the game smoothly without dealing with recursion problems
};