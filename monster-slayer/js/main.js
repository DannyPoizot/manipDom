"use strict";

let score = document.querySelector('.score');
let currentNb = document.querySelector('.currentNb');

let input = document.querySelector('.number');
input.addEventListener('change', number);

let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let reset = document.querySelector('.reset');

let P1 = 0;
let P2 = 0;
let total = 0;


if (total == "0") {
    player1.disabled = true;
    player2.disabled = true;
}

function number() {
    currentNb.textContent = "Playing to : " + this.value;
    total = Number(this.value);
    player1.disabled = false;
    player2.disabled = false;

}

function scoreP1() {
    if( P1 === total) {
        player1.disabled = true;
        player2.disabled = true;
    }
    player1.textContent = P1;
}
player1.addEventListener('click', scoreP1);

function scoreP2() {
    if( P1 === total) {
        player1.disabled = true;
        player2.disabled = true;
    }
    player1.textContent = P2;
}
player2.addEventListener('click', scoreP2);

function res() {
    
    player1.textContent = 0;
    player2.textContent = 0;
    input.value = 0;
    total = 0;

    if (total == "0") {
        player1.disabled = true;
        player2.disabled = true;
        score.textContent = player1 + "to" + player2;
    } else {
        player1.disabled = false;
        player2.disabled = false;
    }
    
}

reset.addEventListener('click', res);