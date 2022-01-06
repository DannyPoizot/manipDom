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

player1.addEventListener('click', scoreP1);
player2.addEventListener('click', scoreP2);

let one = document.querySelector('.one');
let two = document.querySelector('.two');

if (total == 0) {
    player1.disabled = true;
    player2.disabled = true;
}

function number() {
    total = Number(this.value);
    currentNb.textContent =  total;
    player1.disabled = false;
    player2.disabled = false;

}

function scoreP1() {
    P1++;
    one.textContent = P1;
    win();
}

function scoreP2() {
    P2++;
    two.textContent = P2;
    win();
}

function res() {
    input.value = 0;
    total = 0;
    currentNb.textContent = total;
    P1 = 0;
    P2 = 0;
    one.textContent = P1;
    two.textContent = P2; 
    win();
    player1.classList.remove("winner"); 
    player2.classList.remove("winner"); 
}

reset.addEventListener('click', res);

function win() {
    if(P1 == total) {
        player1.disabled = true;
        player2.disabled = true;
        player1.classList.add("winner"); 
    } else if(P2 == total){
        player2.classList.add("winner"); 
        player1.disabled = true;
        player2.disabled = true;

    } else {

        player1.disabled = false;
        player2.disabled = false;
    }
    
}