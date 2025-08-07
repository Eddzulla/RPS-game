compScore = 0;
humanScore = 0;

function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    random_index = Math.floor(Math.random()*3);
    selected_choice = choices[random_index];
    return selected_choice;

}

function getHumanChoice(){
    choice = prompt("What do you wanna do?","")
    return choice;
}

function playRound(humanChoice, compChoice){
    human = humanChoice.toLowerCase();
    comp = compChoice.toLowerCase();

    if(comp == "rock"){
        switch (human){
            case "rock":
                console.log("It's a draw!");
                break;
            case "paper":
                humanScore += 1;
                console.log("Human wins!");
            case "scissors":
                compScore +=1;
                console.log("Computer wins!")
        }
    }
    else if(comp=="paper"){
         switch (human){
            case "rock":
                compScore += 1;
                console.log("Computer wins!");
                break;
            case "paper":
                console.log("It's a draw!");
            case "scissors":
                humanScore += 1;
                console.log("Human wins!")

        }
    }
    else if(comp=="scissors"){
        switch (human){
            case "rock":
                humanScore += 1;
                console.log("Human wins!");
                break;
            case "paper":
                compScore += 1;
                console.log("Computer wins!");
            case "scissors":
                console.log("It's a draw!")


        }
    }
}

let testC= getComputerChoice();
let testH = getHumanChoice();
playRound(testH, testC);