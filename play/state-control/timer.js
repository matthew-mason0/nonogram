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
        console.log(acc);
        return this.format(Date.now() - acc);
    }

    format(ms) {
        const allSeconds = Math.floor(ms/1000);
        const minutes = String(Math.floor(allSeconds / 60)).padStart(2, "0");
        const seconds = String(allSeconds % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }
}