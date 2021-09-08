'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0], currentScore, activePlayer, winner;

const init = function () {
    winner = false;
    currentScore = 0;
    activePlayer = 0;
    diceEl.classList.add('hidden');
    for (let i = 0; i <= 1; i++) {
        scores[i] = 0;
        document.getElementById(`current--${i}`).textContent = currentScore;
        document.querySelector(`.player--${i}`).classList.remove('player--winner');
        document.querySelector(`.player--${i}`).classList.remove('player--active');
    }
    document.querySelector(`.player--${0}`).classList.add('player--active');
    updateScores();

}

const changePlayer = function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

const updateScores = function () {
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
}

init();

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    if (!winner) {
        // Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //  if rolled number = 1, switch to the next player
        if (dice != 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            changePlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (!winner) {
        scores[activePlayer] += currentScore;
        // Display scores
        updateScores();
        if (scores[activePlayer] >= 50) {
            // console.log(scores[activePlayer]);
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
            diceEl.classList.add('hidden');
            winner = true;
        } else {
            changePlayer();
        }
    }
})


btnNew.addEventListener('click', init);