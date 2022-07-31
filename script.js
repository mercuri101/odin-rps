const body = document.querySelector("body");
const selections = document.querySelectorAll(".selection");
const selContainer = document.querySelector(".selections");
const humanChoiceBox = document.querySelector(".choice-display.human");
const botChoiceBox = document.querySelector(".choice-display.bot");
const scoreHuman = document.querySelector(".score .human");
const scoreBot = document.querySelector(".score .bot");
const instruction = document.querySelector(".instruction");

console.log(scoreHuman);
console.log(scoreBot);

const humanChoiceBoxImage = document.createElement("img");
const botChoiceBoxImage = document.createElement("img");

const winnerAnouncement = document.createElement("div");
winnerAnouncement.setAttribute("class", "winner");

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
  if (playerSelection === computerSelection) {
    colorBox("draw");
  }

  // Player plays rock
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      colorBox("loss");
      computerScore++;
    }
    else {
      colorBox("win");
      playerScore++;
    }
  }

  // Player plays paper
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      colorBox("loss");
      computerScore++;
    }
    else {
      colorBox("win");
      playerScore++;
    }
  }

  // Player plays scissors
  else{
    if (computerSelection === "rock") {
      colorBox("loss");
      computerScore++;
    }
    else {
      colorBox("win");
      playerScore++;
    }
  }

  // After each round, show score and check for the victor
  scoreHuman.textContent = `${playerScore}`;
  scoreBot.textContent = `${computerScore}`;
  if (playerScore == 5) {
    winnerAnouncement.textContent = "YOU WIN";
    winnerAnouncement.style.color = "limegreen";
    body.replaceChild(winnerAnouncement, instruction);
    promptRestart();
  }
  else if (computerScore == 5) {
    winnerAnouncement.textContent = "COMPUTER WINS";
    winnerAnouncement.style.color = "crimson";
    body.replaceChild(winnerAnouncement, instruction);
    promptRestart();
  }
}

function promptRestart() {
  const restartBtn = document.createElement("button");
  restartBtn.setAttribute("class", "restart-btn");
  restartBtn.textContent = "Restart";
  body.replaceChild(restartBtn, selContainer);

  restartBtn.addEventListener("click", () => {
    scoreHuman.textContent = "0";
    scoreBot.textContent = "0";
    humanChoiceBox.textContent = "?";
    botChoiceBox.textContent = "?";
    humanChoiceBox.setAttribute("class", "choice-display human init");
    botChoiceBox.setAttribute("class", "choice-display human init");
    playerScore = 0;
    computerScore = 0;
    body.replaceChild(instruction, winnerAnouncement);
    body.replaceChild(selContainer, restartBtn);
    colorBox("draw");
  })
}

const shadowSettings = "0 0 5px 2px";
function colorBox(result) {
  if (result === "draw") {
    humanChoiceBox.style.boxShadow = shadowSettings + " goldenrod";
    botChoiceBox.style.boxShadow = shadowSettings + " goldenrod";
  }
  else if (result === "win") {
    humanChoiceBox.style.boxShadow = shadowSettings + " limegreen";
    botChoiceBox.style.boxShadow = shadowSettings + " crimson";
  }
  else if (result === "loss") {
    humanChoiceBox.style.boxShadow = shadowSettings + " crimson";
    botChoiceBox.style.boxShadow = shadowSettings + " limegreen";
  }
}