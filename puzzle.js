class Puzzle {
    constructor(data) {
        this.name = data.name;
        this.rows = data.rows;
        this.rowClues = data.rowClues;
        this.columnClues = data.columnClues;
        this.solution = data.solution;
    }

    validate() {
        if (this.solution.length !== this.rows) {
            console.log("Puzzle: Solution height does not match puzzle height");
        }

        for (const row of this.solution) {
            if (row.length !== this.rows) {
                console.log("Puzzle: Solution width does not match puzzle width");
            }
        }
    }
}