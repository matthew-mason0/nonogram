const canvas = document.getElementById("canvas");
window.ctx = canvas.getContext("2d");

const board = new Board(5);
const renderer = new Renderer(ctx, board);
renderer.drawBoard();


// click handling
canvas.addEventListener("click", (event) => {
	const rect = canvas.getBoundingClientRect();

	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	mousePressed(x, y);
});

function mousePressed(x, y) {
    console.log(`mouse press at: ${x}, ${y}`);
}