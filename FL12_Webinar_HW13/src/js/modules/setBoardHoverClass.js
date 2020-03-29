const board = document.getElementById("board");

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

function setBoardHoverClass(circleTurn) {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
export default setBoardHoverClass;
