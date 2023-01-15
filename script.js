'use strict';

let sceretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'Enter Number idiot';
    displayMessage('Enter Number idiot');
  } else if (guess === sceretNumber) {
    // document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = sceretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== sceretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > sceretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > sceretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost idiot';
      displayMessage('You Lost idiot');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   } else if (guess > sceretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost idiot';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < sceretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost idiot';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sceretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
