var playerWins;
var cpuWins;

function computerPlay(){
    var rng = Math.floor(Math.random() * Math.floor(3));
    var pick = ""
    switch(rng){
        case 0:
            pick = "rock";
            break;
        case 1:
            pick = "paper";
            break;
        case 2:
            pick = "scissors";
            break;
    }
    return pick;
}

function playRound(playerSelect, compSelect){
    var results = "";

    switch(playerSelect){
        case "rock":
            switch(compSelect){
                case "rock":
                    results = "You tied.\n\nThe rocks collide, sparking a devastating wildfire and costing the government billions.";
                    break;
                case "paper":
                    results = "You lose.\n\nThe enemy Paper suffocates your precious, precious Rock with its lithe but capable body.";
                    cpuWins++;
                    break;
                case "scissors":
                    results = "You Win!\n\nYour Rock smashes the metal scissors, because rocks are always harder than metal."
                    playerWins++;
                    break;
            }
            break;
        case "paper":
            switch(compSelect){
                case "rock":
                    results = "You Win!\n\nYour Paper surrounds the rock, rendering it a completely useless rock surrounded by paper.";
                    playerWins++;
                    break;
                case "paper":
                    results = "You tied.\n\nThe Papers rub together and catch fire. Hundreds are killed.";
                    break;
                case "scissors":
                    results = "You lose.\n\nYour paper is cut into two pieces of paper, which is a bad thing for you because you only wanted one.";
                    cpuWins++;
                    break;
            }
            break;
        case "scissors":
            switch(compSelect){
                case "rock":
                    results = "You lose.\n\nYour scissors got hit by a rock and it makes you feel bad about yourself.";
                    cpuWins++;
                    break;
                case "paper":
                    results = "You Win!\n\nYour Scissors cut the paper cut to shreds, which honestly takes you quite some time to do. Your effort goes under appreciated";
                    playerWins++;
                    break;
                case "scissors":
                    results = "You tied.\n\nThe scissors start a fire because apparently that's what we're doing for ties now.";
                    break;
            }
            break;
    }
    results += "\n\n";
    return results;
}

function play(){
    playerWins = 0;
    cpuWins = 0;
    feedback = "";
    while(playerWins<3 && cpuWins<3){
        var playerPick = window.prompt(`${feedback}First to 3 Wins\nYou: ${playerWins}  CPU: ${cpuWins}\n\nChoose: Rock, Paper, or Scissors.`);
        var playerPick = playerPick.toLowerCase();
        while (playerPick != "rock" && playerPick != "paper" && playerPick != "scissors"){
            playerPick = window.prompt(`You picked ${playerPick}\n\nYou must choose either: Rock, Paper, or Scissors`);
            playerPick = playerPick.toLowerCase();
        }
        var cpuPick = computerPlay();
        feedback = playRound(playerPick, cpuPick);
        if(playerWins > 2 || cpuWins > 2){
            window.alert(`Final Score:\nYou: ${playerWins}   CPU: ${cpuWins}`);
        }

    }
}