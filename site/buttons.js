//This sets up the basic counts for each tile
let greenCount = 0;
let redCount = 0;
let yellowCount = 0;
let blueCount = 0;
let score = document.getElementById("scoreCanvas");
let ctx = score.getContext("2d");
function updateScore(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, score.width, score.height);
  ctx.fillStyle = 'black';
  let totalScore = greenCount+redCount+yellowCount+blueCount;
  ctx.font= "60px Arial";
  ctx.fillText(totalScore,10,150);
  }

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  beep.play();
  greenCount++;
  updateScore();
});
greenButton.addEventListener('mouseup',function(){
  greenButton.setAttribute("class", "simon-button green");
});
greenButton.addEventListener('mousedown',function(){
  greenButton.setAttribute("class", "simon-button green light-up");
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  beep.play();
  redCount++;
  updateScore();
});

redButton.addEventListener('mousedown',function(){
  redButton.setAttribute("class", "simon-button red light-up");
});

redButton.addEventListener('mouseup',function(){
  redButton.setAttribute("class", "simon-button red");
});


let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  beep.play();
  yellowCount++;
  updateScore();
});

yellowButton.addEventListener('mousedown',function(){
  yellowButton.setAttribute("class", "simon-button yellow light-up");
});

yellowButton.addEventListener('mouseup',function(){
  yellowButton.setAttribute("class", "simon-button yellow");
});


let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  beep.play();
  blueCount++;
  updateScore();
});

blueButton.addEventListener('mousedown',function(){
  blueButton.setAttribute("class", "simon-button blue light-up");
});

blueButton.addEventListener('mouseup',function(){
  blueButton.setAttribute("class", "simon-button blue");
});



