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

}

let choiceContainer = document.querySelector("#choiceContainer");

choiceContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
    }
    if(humanScore === 5 || computerScore === 5){
        para.textContent = (humanScore === 5) ? "You win!" : "The computer won.";
        choiceContainer.appendChild(para);
    }
    else {
        score.textContent = ` Your score: ${humanScore}. Computer's score: ${computerScore}`;
        choiceContainer.appendChild(score)
    }
    console.log(`${humanScore} and ${computerScore}`)
});

const score = document.createElement("span");
const para = document.createElement("p");

