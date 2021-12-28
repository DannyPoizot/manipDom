"use strict";

// Html Elements
let value = document.getElementsByTagName('input');
let button = document.getElementsByTagName('button');

//Creating a list
let ul = document.createElement('ul');
let li = document.createElement('li');

// New list element when the add button is clicked
function addValue() {
    if (value === '') {
      alert("Veuillez entrer une valeur !");
    } else {
      ul.appendChild(li);
    }
    value.value = "";
}

// Close button on each list item
for ( let i = 0; i < li.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on "close" to hide a list element
let span = document.createElement('span');
span.className = 'close';
for ( let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let article = this.parentElement;
    article.style.display = "none";
  }
}

// Click on element to "check it"
ul.addEventListener('click', function(e){ 
    if (e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    } false;
});









