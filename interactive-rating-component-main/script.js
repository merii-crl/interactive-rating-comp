'use strict';

document.querySelector('.submitted').style.display = 'none';

const rateButtons = document.querySelectorAll('.rate');
let activeButton = null;


rateButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    if (activeButton !== null) {
      activeButton.style.backgroundColor = ''; // Revert background color
      activeButton.style.color = ''; // Revert text color
    }

    this.style.backgroundColor = 'hsl(25, 97%, 53%)';
    this.style.color = 'hsl(0, 0%, 100%)';
    activeButton = this; // Update active button

  });
});

document.querySelector('.submit').addEventListener('click', function () {
  document.querySelector('.choose').style.display = 'none';
  document.querySelector('.submitted').style.display = 'block';
})

const rate1btn = document.querySelector('.rate1');
const rate2btn = document.querySelector('.rate2');
const rate3btn = document.querySelector('.rate3');
const rate4btn = document.querySelector('.rate4');
const rate5btn = document.querySelector('.rate5');
const num = document.querySelector('.num-rating');

rate1btn.addEventListener('click', function () {
  num.textContent = '\u00A01\u00A0';
})
rate2btn.addEventListener('click', function () {
  num.textContent = '\u00A02\u00A0';
})
rate3btn.addEventListener('click', function () {
  num.textContent = '\u00A03\u00A0';
})
rate4btn.addEventListener('click', function () {
  num.textContent = '\u00A04\u00A0';
})
rate5btn.addEventListener('click', function () {
  num.textContent = '\u00A05\u00A0';
})