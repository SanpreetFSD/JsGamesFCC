const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1 // we can also use possibleChoices.length
    //console.log(randomNumber) used it to check if the randomNuber fuctin is working fine?

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults(){
    if (computerChoice === userChoice){
        result = "It's a draw"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You lose"
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You Lose"
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You Win"
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You Lose"
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You Win"
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}