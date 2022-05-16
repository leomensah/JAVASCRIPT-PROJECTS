// Step 1
let userName = '';

// Step 2
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Step 3
let userQuestion = 'Will I become a god tonight?';

// Step 4
console.log(`The user asked: ${userQuestion}`);

// Step 5
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);


// Step 6
let eightBall ='';

// Step 7
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}


console.log(`The answer from switch statement: ${eightBall}`);

if (randomNumber === 0){
  eightBall = 'It is certain';
} else if (randomNumber === 1){
  eightBall = 'It is decidedly so';
} else if (randomNumber == 2){
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3){
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4){
  eightBall = 'Do not count on it';
} else if (randomNumber === 5){
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
   eightBall = 'Outlook not so good';
} else {
   eightBall = 'Signs point to yes';
}

console.log(`The answer from else/if statement: ${eightBall}`);



