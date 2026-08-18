import { PuzzleLoader } from "./puzzleLoader.js";
import { Game } from "./game.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const params = new URLSearchParams(window.location.search);
const puzzleNumber = params.get("puzzle") || 1;

let game;

// click handling
canvas.addEventListener("click", (event) => {
	const rect = canvas.getBoundingClientRect();

	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;
	if (game) game.mousePressed(x, y);
});

async function main() {
    const puzzle = await PuzzleLoader.load(`../puzzles/puzzle${puzzleNumber}.json`);

    game = new Game(ctx, puzzle);
}

main();