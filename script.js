const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const button = {
    x: 150,
    y: 260,
    width: 100,
    height: 40
};

function draw() {
    // background
    ctx.fillStyle = "#f8f3b9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // title
    ctx.fillStyle = "#000000";
    ctx.font = "48px Arial";
    ctx. textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Nonogram", canvas.width / 2, 150);

    // play button
    ctx.fillStyle = "#3498db";
    ctx.fillRect(
        button.x,
        button.y,
        button.width,
        button.height
    );

    // button text
    ctx.fillStyle = "#ffffff";
    ctx.font = "32px Arial";
    ctx.fillText(
        "PLAY",
        button.x + button.width / 2,
        button.y + button.height / 2
    );
}

draw();

// handle canvas clicks
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (
        mouseX >= button.x &&
        mouseX <= button.x + button.width &&
        mouseY >= button.y &&
        mouseY <= button.y + button.height
    ) {
        window.location.href = "play/play.html?puzzle=1";
    }
});