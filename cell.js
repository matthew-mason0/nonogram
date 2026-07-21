class Cell {
    constructor(x, y, w, h, i, j) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.i = i;
        this.j = j;

        this.color = "red"
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

    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "black"
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}