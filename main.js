const options = document.querySelectorAll('.options');

options.forEach((option) => {
    option.addEventListener('click', function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random()*3)];
    });
});