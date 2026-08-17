const levelGrid = document.getElementById("level-grid");
const buttons = levelGrid.getElementsByTagName("button");

for (const button of buttons) {
    const level = button.textContent;

    button.addEventListener("click", () => {
        window.location.href = `../play/play.html?puzzle=${level}`;
    });
}