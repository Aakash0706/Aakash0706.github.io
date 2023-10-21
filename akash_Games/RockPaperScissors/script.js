// ----- Methods used ----
// .getElementById()
// .querySelectorAll()
// .forEach()
// .addEventListener()
// .innerHTML
// e.target.id
// Math.floor()
// Math.random()
// ------------------------------------------------------------------------------------------------------
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = 'ROCK'
    }
    else if (randomNumber === 2) {
        computerChoice = 'PAPER'
    }
    else {
        computerChoice = 'SCISSORS'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw'
    }
    else if (computerChoice === 'ROCK' && userChoice === 'PAPER') {
        result = 'YOU WIN'
    }
    else if (computerChoice === 'ROCK' && userChoice === 'SCISSORS') {
        result = 'YOU lost!'
    }
    else if (computerChoice === 'PAPER' && userChoice === 'ROCK') {
        result = 'YOU Lost!'
    }
    else if (computerChoice === 'PAPER' && userChoice === 'SCISSORS') {
        result = 'YOU WIN'
    }
    else if (computerChoice === 'SCISSORS' && userChoice === 'PAPER') {
        result = 'YOU Lost!'
    }
    else if (computerChoice === 'SCISSORS' && userChoice === 'ROCK') {
        result = 'YOU WIN'
    }
    resultDisplay.innerHTML = result
}