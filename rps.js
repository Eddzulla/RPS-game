compScore = 0;
humanScore = 0;
round = 0;

function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    random_index = Math.floor(Math.random()*3);
    selected_choice = choices[random_index];
    return selected_choice;

}

function getHumanChoice(){
    choice = prompt("What's your move?")
  
    return choice;
}

function playRound(humanChoice, compChoice, round){
    human = humanChoice.toLowerCase();
    comp = compChoice.toLowerCase();
    console.log(`Round ${round}: Human chose ${human} and computer chose ${comp}`);

    if(comp == "rock"){
        switch (human){
            case "rock":
                console.log("It's a draw!");
                break;
            case "paper":
                humanScore += 1;
                console.log("Human wins this round!");
                break;
            case "scissors":
                compScore +=1;
                console.log("Computer wins this round!")
                break;
        }
        return;
    }
    else if(comp=="paper"){
         switch (human){
            case "rock":
                compScore += 1;
                console.log("Computer wins this round!");
                break;
            case "paper":
                console.log("It's a draw!");
                break;
            case "scissors":
                humanScore += 1;
                console.log("Human wins this round!")
                break;
        }
        return;
    }
    else if(comp=="scissors"){
        switch (human){
            case "rock":
                humanScore += 1;
                console.log("Human wins this round!");
                break;
            case "paper":
                compScore += 1;
                console.log("Computer wins this round!");
                break;
            case "scissors":
                console.log("It's a draw!")
                break;
        }
        return;
    }
    return;
}

function playGame(){
    for(let i=0; i<5; i++){
        compChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, compChoice, (i+1));
        console.log(`Current score: \n Human: ${humanScore} \n Computer: ${compScore}`);
    }
    if(humanScore > compScore){
        console.log(`The winner of the game is human with score ${humanScore} vs ${compScore}!`);
    }
    else if(compScore > humanScore){
        console.log(`The winner of the game is computer with score ${compScore} vs ${humanScore}!`);
    }
    else if(compScore == humanScore){
        console.log("Oh shit, it's a draw!")
    }

}

playGame();