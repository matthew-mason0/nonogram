export class Renderer {
    constructor(ctx, board, puzzle) {
        this.ctx = ctx;
        this.board = board;
        this.puzzle = puzzle;
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
        this.drawHeaderBoxes();
        this.drawCells();
        this.drawRowClues();
    }

    drawContainer() {
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(this.x, this.y, this.cellW, this.cellH);
    }

    drawHeaderBoxes() {
        this.ctx.strokeStyle = "black";
        for (let col = 1; col < this.rows + 1; col++) {
            this.ctx.strokeRect(
                this.x + col * this.cellW,
                this.y,
                this.cellW,
                this.cellH
            );
        }
        for (let row = 1; row < this.rows + 1; row++) {
            this.ctx.strokeRect(
                this.x,
                this.y + row * this.cellH,
                this.cellW,
                this.cellH
            );
        }
    }

    drawCells() {
        this.ctx.strokeStyle = "gray";
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.rows; col++) {
                this.ctx.strokeRect(
                    this.x + this.cellW * (col+1),
                    this.y + this.cellH * (row+1),
                    this.cellW,
                    this.cellH
                );
                this.ctx.fillStyle = this.getCellColor(row, col);
                this.ctx.fillRect(
                    this.x + this.cellW * (col+1),
                    this.y + this.cellH * (row+1),
                    this.cellW,
                    this.cellH
                );
            }
        }
    }

    getCellColor(row, col) {
        const state = this.board.getCellState(row, col);
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

    drawRowClues() {
        const rowClues = this.puzzle.rowClues;
        const colClues = this.puzzle.colClues;

        this.ctx.fillStyle = "black";
        for (let col = 1; col < this.rows + 1; col++) {
            const index = col - 1;
            this.ctx.fillText(
                colClues[index],
                this.x + col * this.cellW,
                this.y + this.cellH,
                this.cellW,
                this.cellH
            );
        }
        for (let row = 1; row < this.rows + 1; row++) {
            const index = row - 1;
            ctx.fillText(
                rowClues[index],
                this.x,
                this.y + row * this.cellH + this.cellH,
                this.cellW,
                this.cellH
            );
        }
    }
}