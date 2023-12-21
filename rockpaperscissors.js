function getComputerChoice(){
    let randomVal = Math.random();
    let choice;
    // console.log(randomVal);
    if(randomVal <= 1.0/3.0) choice = "rock";
    else if(randomVal <= 2.0/3.0) choice = "paper";
    else choice = "scissors";

    return choice;
}

function playRound(player, computer=getComputerChoice()){
    p = player.toUpperCase();
    c = computer.toUpperCase();
    const ROCK = "ROCK";
    const PAPER = "PAPER";
    const SCISSORS = "SCISSORS";

    if(p != ROCK && p != PAPER && p != SCISSORS) return "Draw. Player input was invalid."

    // console.log(p, c);
    // Win casses
    if( (p === ROCK && c === SCISSORS) || (p === PAPER && c === ROCK) || (p === SCISSORS && c === PAPER) ) {
        let resultString = `You WIN! ${p} beats ${c}.`;
        return resultString;
    }
    // loose casses
    if( (c === ROCK && p === SCISSORS) || (c === PAPER && p === ROCK) || (c === SCISSORS && p === PAPER) ) {
        let resultString = `You lose... ${p} beats ${c}.`;
        return resultString;
    }
    // Draws
    if (p === c) {
        let resultString = `Draw. ${p} splits with ${c}.`
        return resultString;
    }
}

let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;
let playerScoreTotal = 0;
let computerScoreTotal = 0;

const scoreContainer = document.querySelector(".score");
const score = document.createElement("h3");
score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
scoreContainer.appendChild(score);

const statContainer = document.querySelector(".stats");
const statsPointTotals = document.createElement("p");
const statsWins = document.createElement("p");
statContainer.appendChild(statsPointTotals);
statContainer.appendChild(statsWins);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // alert(button.id);
        console.log(button.id);
        let result = playRound(button.id);
        if(result.includes("WIN!")){
            playerScore++;
            playerScoreTotal++;
        }
        else if(result.includes("lose...")){
            computerScore++;
            computerScoreTotal++;
        }
        score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
        statsPointTotals.textContent = `Player Total Points: ${playerScoreTotal} - Computer Total Points: ${computerScoreTotal}`


        if(playerScore === 3){
            alert(`Congrats you win ${playerScore} to ${computerScore}`);
            playerScore = 0;
            computerScore = 0;
            playerWins++;
            statsWins.textContent = `Player Total Wins: ${playerWins} - Computer Total Wins: ${computerWins}`
        }
        else if(computerScore ===3 ){
            alert(`You lost ${playerScore} to ${computerScore}`);
            playerScore = 0;
            computerScore = 0;
            computerWins++;
            statsWins.textContent = `Player Total Wins: ${playerWins} - Computer Total Wins: ${computerWins}`
        }
    });
});

