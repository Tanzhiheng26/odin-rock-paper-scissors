const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const replayButton = document.querySelector("#replay-button");

function chooseRock() {
    displayResult("Rock", getComputerChoice());
}

function choosePaper() {
    displayResult("Paper", getComputerChoice());
}

function chooseScissors() {
    displayResult("Scissors", getComputerChoice());
}

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);
replayButton.addEventListener('click', () => location.reload());

const result = document.querySelector("#result");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i];
}

// returns 1 if player won, -1 if player lost and 0 if it is a tie.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return 0;
        } else if (computerSelection === "Paper") {
            return -1;
        } else { 
            // computer chooses scissors
            return 1;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return 1;
        } else if (computerSelection === "Paper") {
            return 0;
        } else {
            // computer chooses scissors
            return -1;
        }
    } else {
        // player chooses scissors
        if (computerSelection === "Rock") {
            return -1;
        } else if (computerSelection === "Paper") {
            return 1;
        } else {
            return 0;
        }
    }
}

function displayResult(playerSelection, computerSelection) {
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    const round = playRound(playerSelection, computerSelection);
    if (round === 1) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        player.textContent = ++playerScore;
        if (playerScore === 5) {
            winner.textContent = "You win the game!"
            disableChoices();
            showPlayAgain()
        }
    } else if (round === -1) {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computer.textContent = ++computerScore;
        if (computerScore === 5) {
            winner.textContent = "You lost the game!";
            disableChoices();
            showPlayAgain();
        }
    } else {
        result.textContent = 'Tie!';
    }
}

function disableChoices() {
    rock.removeEventListener('click', chooseRock);
    paper.removeEventListener('click', choosePaper);
    scissors.removeEventListener('click', chooseScissors);
}

function showPlayAgain() {
    const replayContainer = document.querySelector("#replay-container");
    replayContainer.style.display = "block";
}