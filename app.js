function computerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 3) {
    return "scissor";
  }
}

function getUserChoice(choice) {
  if (choice === "rock") {
    return 1;
  } else if (choice === "paper") {
    return 2;
  } else if (choice === "scissor") {
    return 3;
  }
}

function determineWinner(user, computer) {
  if (
    (user === 3 && computer === "scissor") ||
    (user === 1 && computer === "rock") ||
    (user === 2 && computer === "paper")
  ) {
    return "It's a draw!";
  } else if (
    (user === 1 && computer === "scissor") ||
    (user === 2 && computer === "rock") ||
    (user === 3 && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins";
  }
}

function show(button) {
  const userChoice = button.textContent;
  const result = document.querySelector(".result");
  result.innerHTML = userChoice;

  const computerChoiceResult = document.querySelector(".Cresult");
  const computer = computerChoice();
  computerChoiceResult.innerHTML = computer;

  const user = getUserChoice(userChoice);
  const winnerText = determineWinner(user, computer);
  const winner = document.querySelector(".winner");
  winner.innerHTML = winnerText;

  updateScore(winnerText);
}

function updateScore(winnerText) {
  const winSpan = document.querySelector(".win");
  const loseSpan = document.querySelector(".lose");
  const drawSpan = document.querySelector(".draw");

  let winCount = Number(winSpan.textContent);
  let loseCount = Number(loseSpan.textContent);
  let drawCount = Number(drawSpan.textContent);

  if (winnerText === "You win!") {
    winCount++;
  } else if (winnerText === "Computer wins") {
    loseCount++;
  } else if (winnerText === "It's a draw!") {
    drawCount++;
  }

  winSpan.textContent = winCount;
  loseSpan.textContent = loseCount;
  drawSpan.textContent = drawCount;
}
