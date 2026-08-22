import { Timer } from "./timer.js";

class GameState {
    constructor() {
        this.levelNumber = 0;
        this.timer = new Timer();
        this.paused = true;
        this.finished = false;
        this.completeTime = null;

        this.game = null;
    }

    setLevelNumber(levelNumber) {
        this.levelNumber = levelNumber;
    }
    getLevelNumber() {
        return this.levelNumber;
    }

    getTime() {
        return this.timer.peek();
    }

    begin() {
        this.finished = false;
        this.paused = false;
        this.timer.start();
    }

    pause() {
        this.timer.pause();
        this.paused = true;
    }

    resume() {
        this.paused = false;
        this.timer.resume();
    }

    finish() {
        this.completeTime = this.timer.stop();
        this.paused = true;
        this.finished = true;
    }

    exit() {
        this.finished = false;
        window.location.href = "../index.html";
    }

    restart() {
        console.log(this.game);
        if (this.game) this.game.restart();
    }

    setGame(game) {
        this.game = game;
    }
}

export const gameState = new GameState();