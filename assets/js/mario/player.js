import {platform} from "./platform.js"

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
            this.grounded;
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
        };
        // Method to detect if the player is on the ground.
        handleFloorCollision() {
            if(this.position.y + this.height + this.velocity.y <= canvas.height) {
                this.velocity.y += gravity;
                this.grounded = 0;
            } else {
                this.velocity.y = 0;
                this.grounded = 1;
            };
        };
    }
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
    if (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
    ) {
        player.velocity.y = 0;
        player.grounded = 1;
    } else {
        player.grounded = 0;
    };
};
    animate();
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                console.log('left');
                keys.left.pressed = true;
                break;
            case 83:
                console.log('down');
                break;
            case 68:
                console.log('right');
                keys.right.pressed = true;
                break;
            case 87:
                console.log('up');
                if(player.grounded === 1) {                
                console.log('up');
                player.velocity.y -= 20;
                };
                break;
        }
    });
    // Event listener for keyup events
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                console.log('left');
                keys.left.pressed = false;
                break;
            case 83:
                console.log('down');
                break;
            case 68:
                console.log('right');
                keys.right.pressed = false;
                break;
            case 87:
                console.log("up")
                break;
            };
    });

export {canvas, ctx}