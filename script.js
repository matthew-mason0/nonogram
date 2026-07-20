const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  mousePressed(x, y);
});

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        ctx.strokeRect(80 * i, 80 * j, 80, 80);
    }
}


function mousePressed(x, y) {
    console.log(`mouse press at: ${x}, ${y}`);
}