class Renderer {
    constructor(ctx, board) {
        this.ctx = ctx;
        this.board = board;
        this.x = 0;
        this.y = 0;
        this.w = 400;
        this.h = 400;
    }

    drawBoard() {
        const rows = this.board.rows;
        const ctx = this.ctx;
        const cellW = this.w / rows;
        const cellH = this.h / rows;
        
        // container
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.y, cellW, cellH)

        // headers
        ctx.strokeStyle = "black";
        for (let i = 1; i < rows; i++) {
            ctx.strokeRect(
                this.x + i * cellW,
                this.y,
                cellW,
                cellH
            );
        }
        for (let i = 1; i < rows; i++) {
            ctx.strokeRect(
                this.x,
                this.y + i * cellH,
                cellW,
                cellH
            );
        }

        // cells
        ctx.strokeStyle = "gray";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                ctx.strokeRect(
                    this.x + cellW * (i+1),
                    this.y + cellH * (j+1),
                    cellW,
                    cellH
                );
            }
        }
    }
}