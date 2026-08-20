export class Timer {
    constructor() {
        this.pauseLog = [];
    }

    start() {
        if (this.pauseLog.length !== 0) console.log("Timer: Was I stopped?");
        this.pauseLog.push(Date.now());
    }

    stop() {
        const stopTime = this.peek();
        this.pauseLog = [];
        return stopTime;
    }

    pause() {
        this.pauseLog.push(Date.now());
    }

    resume() {
        this.pauseLog.push(Date.now());
    }

    peek() {
        let acc = 0;
        let bit = 1;
        for (let i = 0; i < this.pauseLog.length; i++) {
            acc += bit * this.pauseLog[i];
            bit *= -1;
        }
        return Date.now(); - acc;
    }
}