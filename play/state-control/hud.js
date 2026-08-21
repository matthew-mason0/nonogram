import { gameState } from "./gameState.js";

const levelDisplay = document.getElementById("level-display");
const timer = document.getElementById("timer");
const pauseButton = document.getElementById("pause-button");
const restartButton = document.getElementById("restart-button");
const exitButton = document.getElementById("exit-button");

pauseButton.addEventListener("click", (event) => {
    gameState.togglePause();
});
restartButton.addEventListener("click", (event) => {
    console.log("restart button pressed");
});
exitButton.addEventListener("click", (event) => {
    console.log("exit button pressed");
});

setInterval(updateTimerDisplay, 1000);

function updateTimerDisplay() {
    const time = gameState.getTime();
    timer.textContent = time;
}
function updateLevelDisplay() {
    levelDisplay.textContent = "Level " + gameState.getLevelNumber();
}