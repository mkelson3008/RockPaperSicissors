function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice(){
    let computerChoice = getRandomIntInclusive(0, 2);
;
    if (computerChoice === 0){
        return "Rock";
    }
    else if (computerChoice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}