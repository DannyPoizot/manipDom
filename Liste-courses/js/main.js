"use strict";

// Html Elements
let txt = document.querySelector('input');
let button = document.querySelector('button');

//Creating a list
let ul = document.querySelector('ul');
let li = document.createElement('li');
let p = document.createElement('p');
let value = document.createTextNode('');

txt.append(p);
p.append(value);
li.append(p);

button.addEventListener('click', addValue);
// New list element when the add button is clicked
function addValue() {
    if (value == '') {
      alert("Veuillez entrer une valeur !");
    } else {
      ul.appendChild(li);
    }
}









