const levelDisplay = document.getElementById("level-display");
const timer = document.getElementById("timer");
const pauseButton = document.getElementById("pause-button");
const restartButton = document.getElementById("restart-button");
const exitButton = document.getElementById("exit-button");

pauseButton.addEventListener("click", (event) => {
    console.log("pause button");
});
restartButton.addEventListener("click", (event) => {
    console.log("restart button");
});
exitButton.addEventListener("click", (event) => {
    console.log("exit button");
});