const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);

function endGame(draw, circleTurn) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add("show");
  return;
}
export default endGame;
