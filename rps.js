compScore = 0;
humanScore = 0;
round = 0;

const resultP = document.querySelector("#result");
resultP.textContent = "No results as of yet";

const finalResultP = document.querySelector("#final-result");
finalResultP.textContent = "No result yet...";

const eventP = document.querySelector("#round-event");
eventP.textContent = "Waiting for you to make a move...";

const buttonBubble = document.querySelector(".moves-container");
console.log(buttonBubble);

// add elements to replace console.logging, for example results etc
function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    random_index = Math.floor(Math.random()*3);
    selected_choice = choices[random_index];
    return selected_choice;

}
// add event handler with switch depending on button class

buttonBubble.addEventListener("click", (e) =>{
    playRound(e.target.textContent, getComputerChoice(), round);
    round=round+1;
})

function playRound(humanChoice, compChoice, round){
    human = humanChoice.toLowerCase();
    comp = compChoice.toLowerCase();
    eventP.textContent = `Round ${round}: Human chose ${human} and computer chose ${comp}`;

   
    if(round==5){
        evaluateWinner();
        return;
    }

    if(comp == "rock"){
        switch (human){
            case "rock":
                updateMsg("It's a draw!");
                break;
            case "paper":
                humanScore += 1;
                updateMsg("Human wins this round!");
                break;
            case "scissors":
                compScore +=1;
                updateMsg("Computer wins this round!")
                break;
        }
        return;
    }
    else if(comp=="paper"){
         switch (human){
            case "rock":
                compScore += 1;
                updateMsg("Computer wins this round!");
                break;
            case "paper":
                updateMsg("It's a draw!");
                break;
            case "scissors":
                humanScore += 1;
                updateMsg("Human wins this round!")
                break;
        }
        return;
    }
    else if(comp=="scissors"){
        switch (human){
            case "rock":
                humanScore += 1;
                updateMsg("Human wins this round!");
                break;
            case "paper":
                compScore += 1;
                updateMsg("Computer wins this round!");
                break;
            case "scissors":
                updateMsg("It's a draw!")
                break;
        }
        return;
    }
    return;
}

function updateMsg(msg){
    resultP.textContent = msg;
}

function evaluateWinner(){
    if(humanScore > compScore){
        finalResultP.textContent=`The winner of the game is human with score ${humanScore} vs ${compScore}!`;
    }
    else if(compScore > humanScore){
        finalResultP.textContent=`The winner of the game is computer with score ${compScore} vs ${humanScore}!`;
    }
    else if(compScore == humanScore){
        finalResultP.textContent="Oh shit, it's a draw!";
    }
    round=0;
    humanScore = 0;
    compScore=0;
}

