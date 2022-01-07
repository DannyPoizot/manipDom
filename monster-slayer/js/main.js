"use strict";

const sectionStart = document.querySelector(".sectionStart");
const sectionGame = document.querySelector(".sectionGame");
const progressPlayer = document.querySelector('.progressPlayer');
const progressMonster = document.querySelector('.progressMonster');
const pvPlayer = document.querySelector('.pvPlayer');
const pvMonster = document.querySelector('.pvMonster');
const btnStart = document.getElementById("btn_start");
const btnAttack = document.getElementById("btn_attack");
const btnSpecialAttack = document.getElementById("btn_special");
const btnHeal = document.getElementById("btn_heal");
const btnGiveUp = document.getElementById("btn_giveup");

let pvP = 100;
let pvM = 100;

pvPlayer.textContent = pvP;
pvMonster.textContent = pvM;

sectionGame.hidden = true;

btnStart.addEventListener('click', hideClickBtn);
btnAttack.addEventListener('click', attack);
btnSpecialAttack.addEventListener('click', specialAttack);
btnHeal.addEventListener('click', heal);
btnGiveUp.addEventListener('click', giveUp);


function hideClickBtn(e) {
    e.stopPropagation();
    pvPlayer.textContent = pvP;
    pvMonster.textContent = pvM;
    sectionGame.hidden = false;
    btnStart.hidden = true;
    btnAttack.disabled = false;
    btnSpecialAttack.disabled = false;
    btnHeal.disabled = false;
    progressMonster.style.width = pvM + '%';
    progressPlayer.style.width = pvP + '%';
}

function damage(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min);
}


function attack() {
    pvM = pvM - damage(3, 10);
    pvP = pvP - damage(5, 10);
    endGame();
}


function specialAttack() {
    pvM = pvM - damage(10, 20);
    pvP = pvP - damage(5, 10);
    endGame();
}

function heal() {
    pvP += 10;
    pvP = pvP - damage(5, 10);
    endGame();
} 

function giveUp() {
    if(confirm("Want to give up ? Lol you loser")) {
        pvP = 100;
        pvM = 100;
        sectionGame.hidden = true;
        btnStart.hidden = false;
        progressMonster.style.width = pvM + '%';
        progressPlayer.style.width = pvP + '%';
        pvPlayer.textContent = pvP;
        pvMonster.textContent = pvM;
    }
}

function endGame() {
    if (pvM <= 0 ) {
        pvM = 0;
        win("Player");
    } 
    if (pvP <= 0) {
        pvP = 0;
        win("Monster");
    } else if (pvP >= 100) {
        pvP = 100;
    }
    pvPlayer.textContent = pvP;
    pvMonster.textContent = pvM;
    progressMonster.style.width = pvM + '%';
    progressPlayer.style.width = pvP + '%';
}

function win(param) {
    pvPlayer.textContent = pvP;
    pvMonster.textContent = pvM;
    progressMonster.style.width = pvM + '%';
    progressPlayer.style.width = pvP + '%';
    if(confirm(param  + ' won ! Do you want to start a new game ?')) {
        pvP = 100;
        pvM = 100;
        sectionGame.hidden = true;
        btnStart.hidden = false;
        progressMonster.style.width = pvM + '%';
        progressPlayer.style.width = pvP + '%';
    } else {
        btnAttack.disabled = true;
        btnSpecialAttack.disabled = true;
        btnHeal.disabled = true;
    }
} 