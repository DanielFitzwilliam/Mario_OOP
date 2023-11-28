import {GameEnv} from "./gameEnv.js"

// Common attributes, methods, prototype methods for all objects in the Game.
class GameObject {
    constructor(config, x, y) {
        this.x = x;
        this.y = y;
        this.image = config.image;
        this.frame = config.frame;
        this.width = config.width;
        this.height = config.height;
        this.aspect_ratio = this.width / this.height;
        this.speedRatio = config.speedRatio;
        this.speed = GameEnv.gameSpeed * this.speedRatio;
        this.collisionWidth = 0;
        this.collisionHeight = 0;
        this.collisionData = {};
        GameEnv.gameObjects.push(GameObject);
    };

    destroy() {
        const index = GameObject.gameObjects.indexOf(this);
        if (index !== -1) {
            // Remove the canvas from the DOM
            this.canvas.parentNode.removeChild(this.canvas);
            GameObject.gameObjects.splice(index, 1);
        };
    };

    update() { };
    draw() { };
    size() { };
    isCollision(object) { };
    handleCollision(object) {
        if (this.isCollision(object)) {
            this.collisionAction(object);
        };
    };
};

export {GameObject}