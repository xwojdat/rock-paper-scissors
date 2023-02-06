const options = document.querySelectorAll('.options');
let pScore = 0;
let cScore = 0;

options.forEach((option) => {

});

options.forEach((option) => {
    option.addEventListener('click', function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random()*3)];

        compare(pInput, cInput);
        updateScore();

        if(checkWinner()){
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function updateScore() {
    document.getElementById('pScore').textContent = pScore;
    document.getElementById('cScore').textContent = cScore;
}

function checkWinner() {
    if(pScore === 3 || cScore === 3){
        const winner = 
            pScore === 3
                ?"You Win!"
                :"You Lost!";
            alert(winner);
            return true;
    }
    return false;
}

function compare(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    if (pInput === cInput) {
        return "It's a tie!";
    } 
    
    else if (pInput === "Rock") {
        if (cInput === "Scissors") {
            return "You win!";
            pScore++;
        } else {
            return "You lose!";
            cScore++;
        }
    } 
    
    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            return "You win!";
            pScore++;
        } else {
            return "You lose!";
            cScore++;
        }
    } 
    
    else if (pInput === "Scissors") {
        if (cInput === "Paper") {
            return "You win!";
            pScore++;
        } else {
            return "You lose!";
            cScore++;
        }
    }
}

