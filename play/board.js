import { Cell } from "./cell.js";

export class Board {
    constructor(rows) {
        this.rows = rows;
        this.cells = this.createCells(this.rows);
        this.rowClues = [];
        this.colClues = [];
    }

    createCells(rows) {
        const cells = [];
        for (let i = 0; i < rows; i++) {
            cells[i] = [];
            for (let j = 0; j < rows; j++) {
                cells[i][j] = new Cell(i, j);
            }
        }
        return cells;
    }

    getCell(i, j) {
        return this.cells[i][j];
    }

    getCellState(i, j) {
        return this.cells[i][j].state;
    }

    toggleCell(i, j) {
        this.cells[i][j].toggle();
    }

    clear() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.cells[i][j].reset();
            }
        }
    }
}