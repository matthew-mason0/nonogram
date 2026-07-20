const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        ctx.strokeRect(80 * i, 80 * j, 80, 80);
    }
}