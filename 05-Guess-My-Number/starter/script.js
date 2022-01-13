'use strict';

// variable for current score
let currentScore = 20;

// variable for high score
let highScore = 0;

// variable for random number between 1 and 20
let randNumber = getRandomInt(1, 20);

// DOM objects we need to interact with
let elements = {};

function getDomElements() {
    elements.btn = document.querySelector('.check');
    elements.reset = document.querySelector('.again');
    elements.input = document.querySelector('.guess');
    elements.background = document.querySelector('body');
    elements.message = document.querySelector('.message');
    elements.number = document.querySelector('.number');
    elements.score = document.querySelector('.score');
    elements.highScore = document.querySelector('.highscore');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random()));
    return Math.floor(Math.random() * (max - min) + min);
}

function changeView(state, guess) {
    guess = String(guess);
    state = state;

    if (state == 'win') { // check to see which state is requested  
        elements.background.style.background = 'green'; // change background color
        elements.number.innerHTML = String(guess); // update number box
        elements.message.innerHTML = 'Correct number!'; // update message box
    }
    if (state == 'reset') {
        elements.background.style.background = '#222'; // change background color
        elements.number.innerHTML = '?'; // update number box
        elements.message.innerHTML = 'Start guessing...'; // update message box
    }

}

function isMatch(guess) {
    changeView('win', guess);
    currentScore++; // add to the score;
    elements.score.innerHTML = currentScore;
    if (currentScore > highScore) { // check to see if the score is higher than the high score
        highScore = currentScore;// Update the high score
        console.log(`New high score of: ${(highScore)}`);
        elements.highScore.innerHTML = highScore;
    }
}

function notMatch(guess) {
    currentScore--; // remove from score
    elements.score.innerHTML = currentScore;
    if (guess > randNumber) {
        elements.message.innerHTML = 'Too high!';
    }
    if (guess < randNumber) {
        elements.message.innerHTML = 'Too low!';
    }
}

function checkGuess(guess) {
    let val = guess;
    if (guess > 0 && guess < 21) { // check if guess is between 1 and 20
        if (guess != randNumber) { // if guess doesn't match the random number
            notMatch(guess);
        }
        if (guess == randNumber) { // if the guess matches the random number
            isMatch(guess);
        }
    }
    else {
        alert('Sorry, but you must pick a number between 1 and 20!');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    getDomElements(); // Wait until we can get an object with the dynamic elements from the DOM
    console.log('%cThe number to guess is: ' + randNumber, 'background-color: green; color: white; ');
    elements.reset.addEventListener('click', function () {
        changeView('reset');
    });
    elements.btn.addEventListener('click', function () { // set listener for 'check' button
        let val = '';
        val = elements.input.value;
        checkGuess(val); // when listener fires, value is passed to guess function
    });

});


