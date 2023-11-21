'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!@!@!@!@!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 3;
// document.querySelector('.guess').value = 7;
// console.log(document.querySelector('.guess').val);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = number;
const x = function () {
  console.log(23);
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      alert('you lose');
      document.querySelector('.message').textContent = 'you lose';
    }
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'right';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      alert('you lose');
      document.querySelector('.message').textContent = 'you lose';
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      alert('you lose');
      document.querySelector('.message').textContent = 'you lose';
    }
  } else if (guess < 1 || guess > 20) {
    alert('numbers between 1-20');
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      alert('you lose');
      document.querySelector('.message').textContent = 'you lose';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing again';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
