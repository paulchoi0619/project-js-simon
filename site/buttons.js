//This sets up the basic counts for each tile
let greenCount = 0;
let redCount = 0;
let yellowCount = 0;
let blueCount = 0;

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  greenCount++;
  console.log ('#greenCount',greenCount)
});

greenButton.addEventListener('mousedown',function(){
  greenButton.setAttribute("class", "simon-button green light-up")
});

greenButton.addEventListener('mouseup',function(){
  greenButton.setAttribute("class", "simon-button green")
});

let myAudio = document.querySelector('#beep');
greenButton.addEventListener('click', function(){
  beep.play();
},300)

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  redCount++;
  console.log ('#redCount',redCount)
});

redButton.addEventListener('mousedown',function(){
  redButton.setAttribute("class", "simon-button red light-up")
});

redButton.addEventListener('mouseup',function(){
  redButton.setAttribute("class", "simon-button red")
});

redButton.addEventListener('click', function(){
  beep.play();
},300)

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  yellowCount++;
  console.log ('#yellowCount',yellowCount)
});

yellowButton.addEventListener('mousedown',function(){
  yellowButton.setAttribute("class", "simon-button yellow light-up")
});

yellowButton.addEventListener('mouseup',function(){
  yellowButton.setAttribute("class", "simon-button yellow")
});

yellowButton.addEventListener('click', function(){
  beep.play();
},300)

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  blueCount++;
  console.log ('#blueCount',blueCount)
});

blueButton.addEventListener('mousedown',function(){
  blueButton.setAttribute("class", "simon-button blue light-up")
});

blueButton.addEventListener('mouseup',function(){
  blueButton.setAttribute("class", "simon-button blue")
});

blueButton.addEventListener('click', function(){
  beep.play();
},300)

