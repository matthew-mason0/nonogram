class Renderer {
    constructor(ctx, board) {
        this.ctx = ctx;
        this.board = board;
        this.x = 0;
        this.y = 0;
        this.w = 400;
        this.h = 400;
        this.rows = board.rows;
        this.cellW = this.w / (board.rows + 1);
        this.cellH = this.h / (board.rows + 1);
    }

    drawBoard() {
        this.drawContainer();
        this.drawHeaders();
        this.drawCells();
    }

    drawContainer() {
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(this.x, this.y, this.cellW, this.cellH);
    }

    drawHeaders() {
        ctx.strokeStyle = "black";
        for (let col = 1; col < this.rows + 1; col++) {
            ctx.strokeRect(
                this.x + col * this.cellW,
                this.y,
                this.cellW,
                this.cellH
            );
        }
        for (let row = 1; row < this.rows + 1; row++) {
            ctx.strokeRect(
                this.x,
                this.y + row * this.cellH,
                this.cellW,
                this.cellH
            );
        }
    }

    drawCells() {
        ctx.strokeStyle = "gray";
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.rows; col++) {
                ctx.strokeRect(
                    this.x + this.cellW * (col+1),
                    this.y + this.cellH * (row+1),
                    this.cellW,
                    this.cellH
                );
                ctx.fillStyle = this.getCellColor(row, col);
                ctx.fillRect(
                    this.x + this.cellW * (col+1),
                    this.y + this.cellH * (row+1),
                    this.cellW,
                    this.cellH
                );
            }
        }
    }

    getCellColor(row, col) {
        const state = this.board.getCell(row, col).state;
        if (state === 0) return "white";
        else if (state === 1) return "black";
        else if (state === 2) return "blue";
        return "white";
    }

    getCellCoordsAt(mX, mY) {
        const col = Math.floor((mX - this.x) / this.cellW) - 1;
        const row = Math.floor((mY - this.y) / this.cellH) - 1;
        if (col < 0 ||
            row < 0 ||
            col >= this.rows ||
            row >= this.rows
        ) return null;
        console.log(`Cell clicked: [${row}, ${col}]`);
        return {row, col};
    }
}