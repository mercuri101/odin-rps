const selections = document.querySelectorAll(".selection");

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
    alert("It's a draw!");
    return 0;
  }

  // Player plays rock
  else if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      alert("You lose! Paper beats rock.");
      return -1;
    }
    else {
      alert("You win! Rock beats scissors");
      return 1;
    }
  }

  // Player plays paper
  else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      alert("You lose! Scissors beat paper.");
      return -1;
    }
      alert("You win! Paper beats rock.");
      return 1;
  }

  // Player plays scissors
  else{
    if (computerSelection === "rock") {
      alert("You lose! Rock beats scissors.");
      return -1;
    }
      alert("You win! Scissors beat paper.");
      return 1;
  }
}

function reportGameResult(playerScore, computerScore)
{
  let message = (playerScore == computerScore) ?
    "Tie." :
    (playerScore > computerScore) ?
      "You win." :
      "Computer wins.";

  alert(`You: ${playerScore}    Computer: ${computerScore}\n${message}`);
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
