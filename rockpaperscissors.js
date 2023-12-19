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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    alert("Get ready to play Janken (Rock Paper Scissors)");
    while(playerScore < 3 && computerScore < 3) {
        alert(`Score: Player - ${playerScore} Computer - ${computerScore}`)
        let playerInput = window.prompt("SHOOT (Rock, Paper, or Scissors)");
        let computerInput = getComputerChoice();
        let result = playRound(playerInput, computerInput);
        alert(result);
        if(result.includes("WIN!")) playerScore++;
        else if(result.includes("lose...")) computerScore++;
    }
    if(playerScore === 3){
        alert(`Congrats you win ${playerScore} to ${computerScore}`);
    }
    else alert(`You lost ${playerScore} to ${computerScore}`);
}

window.onload = function() {
    game();
};