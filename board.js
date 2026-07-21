class Board {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.cells;
        this.rows = 5;

        this.cellW = this.w / this.rows;
        this.cellH = this.h / this.rows;
    }

    mouseOver(mX, mY) {
        return (
            mX > this.x &&
            mX < this.x + this.w &&
            mY > this.y &&
            mY < this.y + this.h
        )
    }

    onClick(mX, mY) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.rows; j++) {
                if (this.cells[i][j].mouseOver(mX, mY)) this.cells[i][j].onClick();
            }
        }
    }

    createCells() {
        this.cells = [];
        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.cells[i][j] = new Cell(
                    this.x + this.cellW * i,
                    this.y + this.cellH * j,
                    this.cellW, this.cellH,
                    i,
                    j
                );
            }
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.cells[i][j].draw(ctx);
            }
        }
    }
}