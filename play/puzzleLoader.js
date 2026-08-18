import { Puzzle } from "./puzzle.js";

export class PuzzleLoader {
    static async load(file) {
        const response = await fetch(file);
        const data = await response.json();
        return new Puzzle(data);
    }
}