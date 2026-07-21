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

    createCells() {
        this.cells = [];
        for (let i = 0; i < 5; i++) {
            this.cells[i] = [];
            for (let j = 0; j < 5; j++) {
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
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                this.cells[i][j].draw(ctx);
            }
        }
    }
}