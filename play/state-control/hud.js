import { gameState } from "./gameState.js";

const levelDisplay = document.getElementById("level-display");
const timer = document.getElementById("timer");
const pauseButton = document.getElementById("pause-button");
const restartButton = document.getElementById("restart-button");
const exitButton = document.getElementById("exit-button");

pauseButton.addEventListener("click", (event) => {
    console.log("pause button pressed");
    // test
    console.log(gameState);
});
restartButton.addEventListener("click", (event) => {
    console.log("restart button pressed");
});
exitButton.addEventListener("click", (event) => {
    console.log("exit button pressed");
});