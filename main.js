const options = document.querySelectorAll('.options');

options.forEach((option) => {
    option.addEventListener('click', function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random()*3)];

        compare(pInput, cInput);
    });
});

function compare(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    if (pInput === cInput) {
        return "It's a tie!";
    } 
    
    else if (pInput === "Rock") {
        if (cInput === "Scissors") {
            return "You win!";
        } else {
            return "You lose!";
        }
    } 
    
    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            return "You win!";
        } else {
            return "You lose!";
        }
    } 
    
    else if (pInput === "Scissors") {
        if (cInput === "Paper") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
}