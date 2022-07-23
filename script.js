function getComputerChoice() {
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

function playRound(playerSelection, computerSelection) {

  // If selections match, it's a draw
  if (playerSelection.toLowerCase() === computerSelection) {
    return "It's a draw!";
  }

  // Player plays rock
  else if (playerSelection.toLowerCase() === "rock") {
    return (computerSelection === "paper") ?
      "You lose! Paper beats rock." :
      "You win! Rock beats scissors";
  }

  // Player plays paper
  else if (playerSelection.toLowerCase() === "paper") {
    return (computerSelection === "scissors") ?
      "You lose! Scissors beat paper." :
      "You win! Paper beats rock.";
  }

  // Player plays scissors
  else{
    return (computerSelection === "rock") ?
      "You lose! Rock beats scissors." :
      "You win! Scissors beat paper.";
  }
}


const playerSelection = "PAPER";
const computerSelection = getComputerChoice();
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection, computerSelection));