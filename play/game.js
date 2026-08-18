import { Board } from "./board.js";
import { Renderer } from "./renderer.js";

export class Game {
    constructor(ctx, puzzle) {
        this.board = new Board(5);
        this.puzzle = puzzle;
        this.renderer = new Renderer(ctx, this.board, this.puzzle);
        console.log(this.puzzle);

        this.renderer.drawBoard();
    }

    mousePressed(x, y) {
        console.log(`mouse press at: ${x}, ${y}`);
        const {row: rowPressed, col: colPressed} = this.renderer.getCellCoordsAt(x, y);
        this.board.toggleCell(rowPressed, colPressed);
        this.renderer.drawBoard();
        this.checkState();
    }

    checkState() {
        const solutionCells = this.puzzle.solution;
        const currentCells = this.board.cells;
        const rows = this.board.rows;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                if (!this.cellIsCorrect(solutionCells[i][j], currentCells[i][j])) return;
            }
        }
        this.solved();
    }

    cellIsCorrect(solutionCell, currentCell) {
        if (solutionCell === 0 && currentCell.state !== 1) return true;
        if (solutionCell === 1 && currentCell.state === 1) return true;
        return false;
    }

    solved() {
        console.log("Solved!");
        this.renderer.drawFinishScreen();
    }
}