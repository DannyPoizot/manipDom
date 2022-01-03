"use strict";

// Html Elements
let button = document.querySelector('button');
button.addEventListener('click', addValue);



// New list element when the add button is clicked
function addValue() {
  let txt = document.querySelector('input').value;
 
let ul = document.querySelector('ul');
let li = document.createElement('li');
let p = document.createElement('p');
p.append(txt);
li.append(p);
  if (txt.trim() == '') {
    alert("Veuillez entrer une valeur !");
    } else {
      ul.appendChild(li);
    }
}









