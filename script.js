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
	const [rowPressed, colPressed] = renderer.getCellCoordsAt(x, y);
	board.toggleCell(rowPressed, colPressed);
}

// mouseOver(mX, mY) {
// 	return (
// 		mX > this.x &&
// 		mX < this.x + this.w &&
// 		mY > this.y &&
// 		mY < this.y + this.h
// 	)
// }

// onClick(mX, mY) {
// 	for (let i = 0; i < this.rows; i++) {
// 		for (let j = 0; j < this.rows; j++) {
// 			if (this.cells[i][j].mouseOver(mX, mY)) this.cells[i][j].onClick();
// 		}
// 	}
// }
