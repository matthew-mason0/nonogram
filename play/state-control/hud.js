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
            this.togglePause();
        });
        this.restartButton.addEventListener("click", (event) => {
            gameState.restart();
        });
        this.exitButton.addEventListener("click", (event) => {
            gameState.exit();
        });
    }

    updateTimerDisplay() {
        const time = gameState.getTime();
        if (!gameState.paused) this.timer.textContent = time;
    }

    updateLevelDisplay() {
        this.levelDisplay.textContent = "Level " + gameState.getLevelNumber();
    }

    togglePause() {
        if (gameState.paused) {
            gameState.resume();
            this.pauseButton.textContent = "⏸";
        } else {
            gameState.pause();
            this.pauseButton.textContent = "▶︎";
        }
    }
}