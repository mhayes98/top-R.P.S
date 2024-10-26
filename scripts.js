// TOP - RPS

let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
    const valid_moves =
    {
        1:["Rock"],
        2:["Paper"],
        3:["Scissors"],
    }
    let rng = Math.floor(Math.random() * 3) + 1;
    let computer_choice = valid_moves[rng].toString().replace("[]'", "");
    return computer_choice;
}

function getPlayerChoice() {
    let player_choice;
    while (player_choice != "Rock"
            && player_choice != "Scissors"
            && player_choice != "Paper")
        {
            player_choice = prompt("Rock, Paper, or Scissors? : ");
            player_choice = player_choice.charAt(0).toUpperCase() + player_choice.substring(1).toLowerCase();
        }
    return player_choice;
}

function decideWinner(player, computer) {
    if ((player === "Rock" && computer === "Paper") || 
        (player === "Scissors" && computer === "Rock") || 
        (player === "Paper" && computer === "Scissors"))
        {
            computer_score += 1;
            console.log(`${player} loses to ${computer}. Computer wins!`);
        }

    else if ((computer === "Rock" && player === "Paper") || 
            (computer === "Scissors" && player === "Rock") || 
            (computer === "Paper" && player === "Scissors"))
            {
                player_score += 1;
                console.log(`${player} beats ${computer}. You win!`);
            }

    else
        {console.log(`Tie! You both chose ${player}. Nobody wins this round.`);}
}


function playRound() {
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    decideWinner(player, computer);
}

function playGame() {
    for (i = 0; i < 5; i++)
    {
        playRound();
        console.log("\n");
    }

    if (player_score > computer_score)
    {console.log(`You win! ${player_score} Wins -${computer_score} Losses`)}

    else if (player_score < computer_score)
        {console.log(`You lose. ${computer_score} Loss(es) - ${player_score} Win(s)`)}

    else
        {console.log("There is no winner this game.");}
}

playGame();