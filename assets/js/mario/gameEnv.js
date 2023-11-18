class GameEnv {
    static gameObjects = [];
    static height;
    static width;
    static currentLevel;

    // sets up initial environment settings, like width and heigh
    static initialize(width, height) {
        this.width = width;
        this.height = height;
        // Additional initialization logic
    };

    // initializes the game by creating the first level and loading its elements
    static startGame() {
        // Initialize or load the first level
        this.currentLevel = new GameLevel();
        this.currentLevel.load(); // or generate
        // Additional game start logic
    };

    static update() {
        // Update game state, including all game objects
        for (const gameObject of this.gameObjects) {
            gameObject.update();
            gameObject.draw();
        };
    };
};

export {GameEnv}