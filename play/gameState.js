class GameState {
    constructor() {
        this.timer = new Timer();
        this.paused = true;
        this.finished = false;
        this.completeTime = null;
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
    }
}

export const gameState = new GameState();