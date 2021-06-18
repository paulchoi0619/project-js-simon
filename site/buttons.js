let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  alert('You clicked the green button');
});
greenButton.addEventListener('mousedown',function(){
  greenButton.setAttribute("class", "simon-button green light-up")
});

greenButton.addEventListener('mouseup',function(){
  greenButton.setAttribute("class", "simon-button green")
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  alert('You clicked the red button');
});

redButton.addEventListener('mousedown',function(){
  redButton.setAttribute("class", "simon-button red light-up")
});

redButton.addEventListener('mouseup',function(){
  redButton.setAttribute("class", "simon-button red")
});


let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  alert('You clicked the yellow button');
});

yellowButton.addEventListener('mousedown',function(){
  yellowButton.setAttribute("class", "simon-button yellow light-up")
});

yellowButton.addEventListener('mouseup',function(){
  yellowButton.setAttribute("class", "simon-button yellow")
});


let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  alert('You clicked the blue button');
});

blueButton.addEventListener('mousedown',function(){
  blueButton.setAttribute("class", "simon-button blue light-up")
});

blueButton.addEventListener('mouseup',function(){
  blueButton.setAttribute("class", "simon-button blue")
});
