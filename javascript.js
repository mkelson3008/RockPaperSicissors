let humanScore = 0;
let computerScore = 0;

function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice(){
    let computerChoice = getRandomIntInclusive(0, 2);

    if (computerChoice === 0){
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    userInput = prompt("Type your move: Rock, Paper, or Scissors").toLowerCase();

    if (userInput === "rock"){
        return userInput;
    }
    else if (userInput === "paper"){
        return userInput;
    }
    else {
        return userInput;
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1;
    }

    return 
}

function playGame() {
    let totalRounds = 5;

    for (let i = 0; i < totalRounds; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`
        Player's score: ${humanScore}.
        Computer's score: ${computerScore}.
        `)
}

playGame();