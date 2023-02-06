function game(){
    let playerScore = 0;
    let computerScore = 0;
    function playGame(){
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn]

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
             
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText,computerChoice);
            })
        })
    }

    function winner (player, computer){
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Remis'
        }

        else if(player === 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Komputer Wygrał';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'Wygrałeś';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player === 'paper'){
            if(computer == 'rock'){
                result.textContent = 'Wygrałeś';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
            else{
                result.textContent = 'Komputer Wygrał';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player ==='scissors'){
            if(computer == 'paper'){
                result.textContent = 'Wygrałeś';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'Komputer Wygrał';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
}