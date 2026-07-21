const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  mousePressed(x, y);
});

const board = new Board(0, 0, 400, 400);
board.createCells();
board.draw(ctx);

function mousePressed(x, y) {
    console.log(`mouse press at: ${x}, ${y}`);
}