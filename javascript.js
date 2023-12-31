function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i];
}

// returns 1 if player won, -1 if player lost and 0 if it is a tie.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return 0;
        } else if (computerSelection === "paper") {
            return -1;
        } else { 
            // computer chooses scissors
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return 1;
        } else if (computerSelection === "paper") {
            return 0;
        } else {
            // computer chooses scissors
            return -1;
        }
    } else {
        // player chooses scissors
        if (computerSelection === "rock") {
            return -1;
        } else if (computerSelection === "paper") {
            return 1;
        } else {
            return 0;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for (let i = 0; i < 5; i++) {
        do {
            let playerSelection = prompt("Input rock, paper or scissors");
            let computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
            console.log(result);
        } while (result === 0);
        
        if (result === 1) {
            playerScore++;
        } else if (result === -1) {
            computerScore++;
        }

        if (playerScore === 3) {
            return `You won ${playerScore} : ${computerScore}`;
        } 
        if (computerScore === 3) {
            return `You lost ${playerScore} : ${computerScore}`; 
        }
    }
}