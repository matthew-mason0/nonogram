class Puzzle {
    constructor(data) {
        this.name = data.name;
        this.width = data.width;
        this.height = data.height;
        this.rowClues = data.rowClues;
        this.columnClues = data.columnClues;
        this.solution = data.solution;
    }

    validate() {
        if (this.solution.length !== this.height) {
            console.log("Puzzle: Solution height does not match puzzle height");
        }

        for (const row of this.solution) {
            if (row.length !== this.width) {
                console.log("Puzzle: Solution width does not match puzzle width");
            }
        }
    }
}