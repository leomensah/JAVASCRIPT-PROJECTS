const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    } else {
      console.log('There is an error in the output')
    }
  }
  
  // console.log(getUserChoice('rock'));
  // console.log(getUserChoice('scissor'));
  // console.log(getUserChoice('God'));
  // console.log(getUserChoice('who'));
  
  function getComputerChoice(){
    const number = Math.floor(Math.random() * 3)
    if (number === 0){
      return 'rock';
    } else if (number === 1) {
      return 'paper'
    } else if (number === 2){
      return 'scissors'
    }
  }
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
      return 'the game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
       }
      if (userChoice === 'paper'){
        if (computerChoice === 'scissors' || computerChoice === 'rock'){
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'scissors'){
        if (computerChoice === 'rock' || computerChoice === 'paper'){
          return 'The computer Won!'
        } else {
          return 'You won!';
        }
      }
      if(userChoice === 'bomb'){
        return 'You Won!';
      }
  }
  
  // console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
  // console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
  
  function playGame(){
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();  