'use strict';

// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 23;
// document.querySelector('.guess').value = 565;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Guess the Number';
  }
  //   if no ==== guess
  else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct guess';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess !== number) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > number ? 'Number is Too High!' : 'Number is Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOOSE THE GAME';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '50rem';
      document.querySelector('.number').style.transition = '3s';
    }
  }
  // if no is greater than guess
  //   else if (guess > number) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Number is Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'YOU LOOSE THE GAME';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.number').style.width = '50rem';
  //       document.querySelector('.number').style.transition = '3s';
  //     }
  //   }
  //   //   if no is less than guess
  //   else if (guess < number) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Number is Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'YOU LOOSE THE GAME';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing......';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
  document.querySelector('.number').style.transition = '';
});
