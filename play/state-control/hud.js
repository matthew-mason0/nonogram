import { gameState } from "./gameState.js";

export class Hud {
    constructor() {
        this.levelDisplay = document.getElementById("level-display");
        this.timer = document.getElementById("timer");
        this.pauseButton = document.getElementById("pause-button");
        this.restartButton = document.getElementById("restart-button");
        this.exitButton = document.getElementById("exit-button");
    
        this.addButtonListeners();
        this.updateLevelDisplay();
        setInterval(this.updateTimerDisplay, 1000);
    }

    addButtonListeners() {
        this.pauseButton.addEventListener("click", (event) => {
            gameState.togglePause();
        });
        this.restartButton.addEventListener("click", (event) => {
            console.log("restart button pressed");
        });
        this.exitButton.addEventListener("click", (event) => {
            console.log("exit button pressed");
        });
    }

    updateTimerDisplay() {
        const time = gameState.getTime();
        this.timer.textContent = time;
    }

    updateLevelDisplay() {
        this.levelDisplay.textContent = "Level " + gameState.getLevelNumber();
    }
}