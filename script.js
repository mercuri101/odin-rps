const body = document.querySelector("body");
const selections = document.querySelectorAll(".selection");
const selContainer = document.querySelector(".selections");
const humanChoiceBox = document.querySelector(".choice-display.human");
const botChoiceBox = document.querySelector(".choice-display.bot");

const humanChoiceBoxImage = document.createElement("img");
const botChoiceBoxImage = document.createElement("img");
// humanChoiceBoxImage.setAttribute("class", "choice-display human");
// botChoiceBoxImage.setAttribute("class", "choice-display bot");

let playerScore = 0, computerScore = 0;

// For each selection play round on click with the selection and
// computer's choice as arguments.
selections.forEach(sel => sel.addEventListener("click",
  () => playRound(sel.getAttribute("data-selection"), getComputerChoice())));




function getComputerChoice()
{
  let choice = Math.floor(Math.random()*3);

  if (choice == 0) {
    return "rock";
  }
  else if (choice == 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection)
{
  // Display choices
  humanChoiceBox.textContent = "";
  humanChoiceBox.setAttribute("class", "choice-display human");
  botChoiceBox.textContent = "";
  botChoiceBox.setAttribute("class", "choice-display bot");
  switch (playerSelection) {
    case "rock": humanChoiceBoxImage.setAttribute("src", "./img/rock-display-human.png"); break;
    case "paper": humanChoiceBoxImage.setAttribute("src", "./img/paper-display-human.png"); break;
    case "scissors": humanChoiceBoxImage.setAttribute("src", "./img/scissors-display-human.png"); break;
  }
  switch (computerSelection) {
    case "rock": botChoiceBoxImage.setAttribute("src", "./img/rock-display-bot.png"); break;
    case "paper": botChoiceBoxImage.setAttribute("src", "./img/paper-display-bot.png"); break;
    case "scissors": botChoiceBoxImage.setAttribute("src", "./img/scissors-display-bot.png"); break;
  }
  humanChoiceBox.appendChild(humanChoiceBoxImage);
  botChoiceBox.appendChild(botChoiceBoxImage);

  // If selections match, it's a draw
  if (playerSelection.toLowerCase() === computerSelection) {
    display.textContent = "It's a draw!";
  }

  // Player plays rock
  else if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      display.textContent = "You lose! Paper beats rock.";
      computerScore++;
    }
    else {
      display.textContent = "You win! Rock beats scissors";
      playerScore++;
    }
  }

  // Player plays paper
  else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      display.textContent = "You lose! Scissors beat paper.";
      computerScore++;
    }
    else {
      display.textContent = "You win! Paper beats rock.";
      playerScore++;
    }
  }

  // Player plays scissors
  else{
    if (computerSelection === "rock") {
      display.textContent = "You lose! Rock beats scissors.";
      computerScore++;
    }
    else {
      display.textContent = "You win! Scissors beat paper.";
      playerScore++;
    }
  }

  // After each round, show score and check for the victor
  score.textContent = `${playerScore} - ${computerScore}`;
  if (playerScore == 5 || computerScore == 5) {
    display.textContent = (playerScore == 5) ? "YOU WIN" : "COMPUTER WINS";
    display.setAttribute("class", "final-result");
    promptRestart();
  }
}

function promptRestart() {
  const restartBtn = document.createElement("button");
  restartBtn.setAttribute("class", "restart-btn");
  restartBtn.textContent = "Restart";
  body.insertBefore(restartBtn, selContainer);
  selContainer.remove();

  restartBtn.addEventListener("click", () => {
    score.textContent = "0 - 0";
    display.textContent = "";
    display.setAttribute("class", "results");
    playerScore = 0;
    computerScore = 0;
    restartBtn.remove();
    body.insertBefore(selContainer, display);
  })
}
