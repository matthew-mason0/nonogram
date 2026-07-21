class Cell {
    constructor(x, y, w, h, i, j) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.i = i;
        this.j = j;
        /*
        State:
        0 = unknown -> white
        1 = filled -> dark-blue
        2 = empty -> black
        */
        this.state = 0;
    }

    mouseOver(mX, mY) {
        return (
            mX > this.x &&
            mX < this.x + this.w &&
            mY > this.y &&
            mY < this.y + this.h
        )
    }

    onClick() {
        console.log(`cell ${this.i}, ${this.j} was clicked`);
    }

    draw(ctx) {
        this.styleCell(ctx);
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }

    styleCell(ctx) {
        ctx.strokeStyle = "black";
        if (this.state === 0) {
            ctx.fillStyle = "white";
        } else if (this.state === 1) {
            ctx.fillStyle = "rgb(0 0 128)";
            ctx.strokeStyle = "white";
        } else if (this.state === 2) {
            ctx.fillStyle = "black";
            ctx.strokeStyle = "white";
        } else {
            ctx.fillStyle = "red";
        }
    }
}