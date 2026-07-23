const canvas = document.getElementById("canvas");
window.ctx = canvas.getContext("2d");

const game = new Game(ctx);


// click handling
canvas.addEventListener("click", (event) => {
	const rect = canvas.getBoundingClientRect();

	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	game.mousePressed(x, y);
});
