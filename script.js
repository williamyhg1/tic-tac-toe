const cells = document.querySelectorAll(".cell");
const xClass = "x";
const circleClass = "circle";
let circleTurn;
const board = document.querySelector(".board");
const restartBtn = document.querySelector(".restart");
const winningMessageElement = document.querySelector(".winning-message");
const winningMessage = document.querySelector(".message");

restartBtn.addEventListener("click", () => {
  winningMessageElement.classList.remove("show");
  window.location.reload();
});
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  drawMark(cell, currentClass);
  swapPlayer();
  if (checkWinner(currentClass)) {
    endGame(false);
  } else if (isTie()) {
    endGame(true);
  }
}

function drawMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapPlayer() {
  circleTurn = !circleTurn;
  if (circleTurn === true) {
    board.classList.remove(xClass);
    board.classList.add(circleClass);
  }
  if (circleTurn === false) {
    board.classList.remove(circleClass);
    board.classList.add(xClass);
  }
}

function checkWinner(currentClass) {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function endGame(tie) {
  if (tie) {
    winningMessage.textContent = "It's a tie game!";
  } else {
    if (circleTurn === false) {
      winningMessage.textContent = "〇's wins!";
    } else {
      winningMessage.textContent = "✕'s wins!";
    }
  }
  winningMessageElement.classList.add("show");
}

function isTie() {
  return [...cells].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
}
