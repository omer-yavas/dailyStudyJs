'use strict';

//document.querySelector('.between').textContent = 'Hello';
//document.querySelector('.label-highscore').textContent = 'En YUksek';

//document.querySelector('.again').addEventListener('click', function () );
let realNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let guess;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess > realNumber) {
    document.querySelector('.message').textContent = 'High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < realNumber) {
    document.querySelector('.message').textContent = 'low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess == realNumber) {
    document.querySelector('.message').textContent = 'Thats right';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let realNumber = Math.trunc(Math.random() * 20) + 1;
});
