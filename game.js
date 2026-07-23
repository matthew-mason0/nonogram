class Game {
    constructor(ctx, puzzle) {
        this.board = new Board(5);
        this.renderer = new Renderer(ctx, this.board)
        this.puzzle = puzzle;
        console.log(this.puzzle);

        this.renderer.drawBoard();
    }

    mousePressed(x, y) {
        console.log(`mouse press at: ${x}, ${y}`);
        const {rowPressed, colPressed} = this.renderer.getCellCoordsAt(x, y);
        this.board.toggleCell(rowPressed, colPressed);
        this.renderer.drawBoard();
    }


}