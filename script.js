const body = document.querySelector("body");
const selections = document.querySelectorAll(".selection");
const display = document.querySelector(".results");
const scoredis = document.querySelector(".score");
const score = document.querySelector(".cur-score");
const selContainer = document.querySelector(".selections");

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

function reportGameResult(playerScore, computerScore)
{
  let message = (playerScore == computerScore) ?
    "Tie." :
    (playerScore > computerScore) ?
      "You win." :
      "Computer wins.";

  display.textContent = `You: ${playerScore}    Computer: ${computerScore}\n${message}`;
}

function game()
{
  let playerScore = 0, computerScore = 0;

  // Play a five round game
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Round ${i+1}. What do you play?`);
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    // Update scores
    if (roundResult === 1) {
      playerScore++;
    }
    else if (roundResult === -1) {
      computerScore++;
    }
  }

  // Report results
  reportGameResult(playerScore, computerScore);
}
