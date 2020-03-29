import "../style/app.scss";
import isDraw from "./modules/isDraw";
import checkWin from "./modules/checkinWin";
import endGame from "./modules/endGame";
import setBoardHoverClass from "./modules/setBoardHoverClass";

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");

let circleTurn;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", e => {
      handleClick(e, circleTurn);
    });
    cell.addEventListener(
      "click",
      e => {
        handleClick(e, circleTurn);
      },
      { once: true }
    );
  });
  setBoardHoverClass(circleTurn);
  winningMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false, circleTurn);
  } else if (isDraw(cellElements)) {
    endGame(true, circleTurn);
  } else {
    swapTurns();
    setBoardHoverClass(circleTurn);
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}
