//This sets up the basic counts for each tile
let greenCount = 0;
let redCount = 0;
let yellowCount = 0;
let blueCount = 0;

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  beep.play();
  greenCount++;
  console.log ('#greenCount',greenCount);
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
  console.log ('#redCount',redCount);
  
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
  console.log ('#yellowCount',yellowCount);
  
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
  console.log ('#blueCount',blueCount);
  
});

blueButton.addEventListener('mousedown',function(){
  blueButton.setAttribute("class", "simon-button blue light-up");
});

blueButton.addEventListener('mouseup',function(){
  blueButton.setAttribute("class", "simon-button blue");
});


