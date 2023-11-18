import {platform} from "./platform.js"
import {tube} from "./tube.js"

    // Get text element for Mario's health
    let marioStateMessage = document.getElementById("Mario_State");

    // Create empty canvas
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    // Set the canvas dimensions
    canvas.width = 650;
    canvas.height = 400;
    // Define gravity value
    let gravity = 1.5;
    // Define the Player class
    class Player {
        constructor(lives) {
            // Initial position and velocity of the player
            this.position = {
                x: 100,
                y: 200
            };
            this.velocity = {
                x: 0,
                y: 0
            };
            // Dimensions of the player
            this.width = 30;
            this.height = 30;
            //Player "grounded" variable
            this.grounded = 0;
            this.lives = lives;
            this.isAlive = 1;
            this.reset();
        }
        reset() {
            if(this.lives === 0) {
            marioStateMessage.innerHTML = "Mario is dead, and it's all your fault."
            this.isAlive = 0;
            } else {
            marioStateMessage.innerHTML =  "Mario is alive and well. Lives: " + this.lives
            this.position.x = 100;
            this.position.y = 200;
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.width = 30;
            this.height = 30;
            this.grounded = 0;
            this.tubed = 0;
            };
        };
        // Method to draw the player on the canvas
        draw() {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        };
        // Method to update the players position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            if (this.tubed === 2) {
                this.handleTubeAnimation()
            } else {
                // Control players horizontal movement
                if (keys.right.pressed && player.position.x + player.width <= canvas.width - 50) {
                    player.velocity.x = 15;
                } else if (keys.left.pressed && player.position.x >= 50) {
                    player.velocity.x = -15;
                } else {
                    player.velocity.x = 0;
                };
                this.handleFloorCollision(platform.position.x, platform.position.y, platform.width, platform.height, "platform");
                if (this.grounded === 0) {
                    this.handleFloorCollision(tube.position.x, tube.position.y, tube.width, tube.height, "tube");
                };
                if (this.grounded === 0) {
                    this.velocity.y += gravity;
                };
                this.handleDeathCondition();
            };
        };
        // Method to detect if the player is on the ground.
        handleFloorCollision(left, top, right, bottom, object) {
            if (this.position.x < left + right && this.position.x + this.width + this.velocity.x >= left &&
                this.position.y < top + bottom && this.position.y + this.height + this.velocity.y >= top
            ) {
                this.velocity.y = 0;
                this.grounded = 1;
                if (object === "tube") {
                    this.tubed = 1;
                };
            } else {
                this.grounded = 0;
                this.tubed = 0;
            };
        };
        // Method to detect if the player is dead
        handleDeathCondition() {
            if (
            this.position.y > canvas.height &&
            this.isAlive === 1
            ) {
                this.killPlayer();
            };
        };
        killPlayer() {
            this.lives--;
            console.log(this.lives)
            this.reset();
        };
        handleTubeAnimation() {
            if(this.position.y > tube.position.y + this.height) {
                marioStateMessage.innerHTML = "Mario traveled to another dimension."
            } else {
                this.position.x = (((tube.position.x * 2) + tube.width) / 2) - (this.width / 2);
                this.position.y += 5;
            };
        };
    };
    // Create a player object
    const player = new Player(5);
    // Define keyboard keys and their states
    let keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    };
// Animation function to continuously update and render the canvas
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    platform.draw();
    player.update();
    tube.draw();
};
animate();
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = true;
                break;
            case 83:
                if (player.tubed === 1) {
                    player.tubed = 2;
                    console.log("tuber")
                };
                break;
            case 68:
                keys.right.pressed = true;
                break;
            case 87:
                if(player.grounded === 1) {
                player.velocity.y -= 20;
                };
                break;
        }
    });
    // Event listener for keyup events
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = false;
                break;
            case 83:
                break;
            case 68:
                keys.right.pressed = false;
                break;
            case 87:
                break;
            };
    });

export {canvas, ctx}