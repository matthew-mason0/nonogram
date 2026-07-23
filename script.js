const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let game;



// click handling
canvas.addEventListener("click", (event) => {
	const rect = canvas.getBoundingClientRect();

	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;
	game.mousePressed(x, y);
});

async function main() {
    const puzzle = await PuzzleLoader.load("puzzle1.json");

    game = new Game(ctx, puzzle);
}

main();