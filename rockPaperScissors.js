console.log('hi');

//The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// User Choice

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ){
    return userInput;
  } else {
    console.log("Error! Please input 'rock', 'paper' or 'scissors' only.")
  }
};


// Computer Choice

const getComputerChoice = () => {
let ran = Math.floor(Math.random() * 3);

switch (ran) {
  case 0:
    return 'rock';
  break;
  case 1:
    return 'paper';
  break;
  case 2:
    return 'scissors';
  break;
  default:
  console.log("Error! Please input 'rock', 'paper' or 'scissors' only.");
  break;
} 
};


const computerChoice = getComputerChoice();

//determineWinner

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors' || computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won!';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'bomb') {
  return "You blasted you're oponent to bits!!!";
}
};

//console.log(`The winner of this round is:${determineWinner('rock', 'scissors')}`)

// GamePlay

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log('You threw a: ' + userChoice);
  console.log('The Computer threw a: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame('bomb');
