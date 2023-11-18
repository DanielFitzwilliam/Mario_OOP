import {platform} from "./platform.js"

    // Get text element for Mario's health
    let marioStateMessage = document.getElementById("Mario_State")

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
        constructor() {
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
        }
        reset() {
            this.position.x = 100;
            this.position.y = 200;
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.width = 30;
            this.height = 30;
            this.grounded = 0;
        }
        // Method to draw the player on the canvas
        draw() {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        // Method to update the players position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            // Control players horizontal movement
            if (keys.right.pressed && player.position.x + player.width <= canvas.width - 50) {
                player.velocity.x = 15;
            } else if (keys.left.pressed && player.position.x >= 50) {
                player.velocity.x = -15;
            } else {
                player.velocity.x = 0;
            };
            this.handleFloorCollision();
            this.handleDeathCondition();
        };
        // Method to detect if the player is on the ground.
        handleFloorCollision() {
            if (this.position.x < platform.position.x + platform.width && this.position.x + this.width + this.velocity.x >= platform.position.x &&
                this.position.y < platform.position.y + platform.height && this.position.y + this.height + this.velocity.y >= platform.position.y
            ) {
                this.velocity.y = 0;
                this.grounded = 1;
            } else {
                this.grounded = 0;
                this.velocity.y += gravity;
            };
        };
        // Method to detect if the player is dead
        handleDeathCondition() {
            if(this.position.y > canvas.height) {
                this.killPlayer();
            };
        };
        killPlayer() {
            marioStateMessage.innerHTML = "Mario is dead, and it's all your fault."
            this.reset();
        };
    };
    // Create a player object
    const player = new Player();
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
};
animate();
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = true;
                break;
            case 83:
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