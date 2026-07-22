class Renderer {
    constructor(ctx, board) {
        this.ctx = ctx;
        this.board = board;
        this.x = 0;
        this.y = 0;
        this.w = 400;
        this.h = 400;
        this.cellW = this.w / (this.board.rows + 1);
        this.cellH = this.h / (this.board.rows + 1);
    }

    drawBoard() {
        const rows = this.board.rows;
        const ctx = this.ctx;
        
        // container
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.y, this.cellW, this.cellH)

        // headers
        ctx.strokeStyle = "black";
        for (let i = 1; i < rows; i++) {
            ctx.strokeRect(
                this.x + i * this.cellW,
                this.y,
                this.cellW,
                this.cellH
            );
        }
        for (let i = 1; i < rows; i++) {
            ctx.strokeRect(
                this.x,
                this.y + i * this.cellH,
                this.cellW,
                this.cellH
            );
        }

        // cells
        ctx.strokeStyle = "gray";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                ctx.strokeRect(
                    this.x + this.cellW * (i+1),
                    this.y + this.cellH * (j+1),
                    this.cellW,
                    this.cellH
                );
            }
        }
    }

    getCellCoordsAt(mX, mY) {
        let col = Math.floor((mX - this.x) / this.cellW) - 1;
        let row = Math.floor((mY - this.y) / this.cellH) - 1;
        if (col < 0 || row < 0) return null;
        console.log(`Cell clicked: (${col}, ${row})`);
        return [row, col];
    }
}