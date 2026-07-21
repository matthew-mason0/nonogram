const canvas = document.getElementById("canvas");
window.ctx = canvas.getContext("2d");

canvas.addEventListener("click", (event) => {
	const rect = canvas.getBoundingClientRect();

	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	mousePressed(x, y);
});

function mousePressed(x, y) {
    console.log(`mouse press at: ${x}, ${y}`);
}