function game(){
    let playerScore = 0;
    let computerScore = 0;
}
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

