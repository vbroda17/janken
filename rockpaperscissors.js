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
    const ROCK = "ROCK"
    const PAPER = "PAPER"
    const SCISSORS = "SCISSORS"
    // console.log(p, c);
    // Win casses

    // loose casses

    // Draws
}