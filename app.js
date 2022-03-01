const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let results;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResults()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber) 

    if(randomNumber === 1){
         computerChoice = 'Rock';
    }
    else if(randomNumber === 2){
        computerChoice = 'Paper'
    }
    else{
        computerChoice = 'Scissors'; 
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResults()
{
    if(computerChoice === userChoice)
    {
      results = 'Its a Draw!!!!'
    }
    // Computer Choice is Rock
    if(computerChoice === 'Rock' && userChoice === 'Paper')
    {
      results = 'User Wins!!!'
    }
     if(computerChoice === 'Rock' && userChoice === 'Scissors')
    {
      results = 'Computer Wins!!!'
    }
     

    // Computer Choice is paper
    if(computerChoice === 'Paper' && userChoice === 'Scissors')
    {
      results = 'User Wins!!!'
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock')
    {
      results = 'Computer Wins!!!'
    }
   
    // Computer choice is scissors
    if(computerChoice === 'Scissors' && userChoice === 'Rock')
    {
      results = 'User Wins!!!'
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper')
    {
      results = 'Computer Wins!!!'
    }

    resultDisplay.innerHTML = results
   
}
