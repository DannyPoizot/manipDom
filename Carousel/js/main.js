// All html collects elements 
let elemList = document.getElementsByTagName('li');
let prev = document.querySelector('.prev_btn');
let next = document.querySelector('.next_btn');
let img = 0;
let currentImg = elemList[img];

// Function to display images
function imgLoop() {
    for (const li of elemList) {
        li.style.display = 'none';
        currentImg.style.display = 'block';
    }
}

imgLoop();

next.onclick = function() {
 img++;
   if(img > elemList.length -1) {
     img = 0;
   } 
   currentImg = elemList[img];
   imgLoop();
}


prev.onclick = function() {
    img--;
    if(img < 0) {
       img = elemList.length -1;
    }
    currentImg = elemList[img];
    imgLoop();
}

