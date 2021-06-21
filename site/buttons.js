//This sets up the basic counts for each tile
let greenCount = 0;
let redCount = 0;
let yellowCount = 0;
let blueCount = 0;

let greenButton = document.querySelector('.simon-button.green');
let redButton = document.querySelector('.simon-button.red');
let yellowButton = document.querySelector('.simon-button.yellow');
let blueButton = document.querySelector('.simon-button.blue');

//Score Counter
let score = document.getElementById("scoreCanvas");
let ctx = score.getContext("2d");
let startButton = document.querySelector(".start");

//function for returning the color of Simon back to normal
function normalColor(color){
  if(color == "green"){
    return greenButton.setAttribute("class", "simon-button green")
  }
  else if(color == "red"){
    return redButton.setAttribute("class", "simon-button red")
  }
  else if (color == "yellow"){
  return yellowButton.setAttribute("class", "simon-button yellow")
  }
  else{
    return blueButton.setAttribute("class", "simon-button blue")
  }
}




//update score when the user gets the right button
function updateScore(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, score.width, score.height);
  ctx.fillStyle = 'black';
  let totalScore = greenCount+redCount+yellowCount+blueCount;
  ctx.font= "60px Arial";
  ctx.fillText(totalScore,0,100);
  }


  greenButton.addEventListener('mouseup',function(){
    greenButton.setAttribute("class", "simon-button green");
  });
  greenButton.addEventListener('mousedown',function(){
    greenButton.setAttribute("class", "simon-button green light-up");
  });
  
  
 
  
  redButton.addEventListener('mousedown',function(){
    redButton.setAttribute("class", "simon-button red light-up");
  });
  
  redButton.addEventListener('mouseup',function(){
    redButton.setAttribute("class", "simon-button red");
  });
  
  
  yellowButton.addEventListener('mousedown',function(){
    yellowButton.setAttribute("class", "simon-button yellow light-up");
  });
  
  yellowButton.addEventListener('mouseup',function(){
    yellowButton.setAttribute("class", "simon-button yellow");
  });
  
  
  blueButton.addEventListener('mousedown',function(){
    blueButton.setAttribute("class", "simon-button blue light-up");
  });
  
  blueButton.addEventListener('mouseup',function(){
    blueButton.setAttribute("class", "simon-button blue");
  });


//Click Tracking
greenButton.addEventListener('click', function() {

  beep.play();
  greenCount++;
  updateScore();
});


redButton.addEventListener('click', function() {

  beep.play();
  redCount++;
  updateScore();
});

yellowButton.addEventListener('click', function() {
  beep.play();
  yellowCount++;
  updateScore();
});


blueButton.addEventListener('click', function() {
  beep.play();
  blueCount++;
  updateScore();
});


  let sequence = [];
  let mySequence =[];
  function arrayCheck(arr1,arr2){
    if(arr1.length!=arr2.length){
      return false;
    }
    else{
      for(let i=0;i<sequence;i++){
        if (arr1[i]!=arr2[i]){
          return false;
        }
      }
      return true;
    }
  }

startButton.addEventListener('click',function(){
let level =1;
while(arrayCheck(sequence,mySequence)){
const colors = ["green","red","yellow","blue"];
const simonColor = Math.floor(Math.random() * colors.length);

sequence.push(colors[simonColor]);
for (let i=0; i < level;i++){
let color = sequence[i];
if (color.localeCompare("green")== 0){
greenButton.setAttribute("class", "simon-button green light-up");
setTimeout(normalColor,1000,color);
}
else if(color.localeCompare("red")==0){
redButton.setAttribute("class", "simon-button red light-up"); 
setTimeout(normalColor,1000,color);
}
else if (color.localeCompare("yellow")==0){
yellowButton.setAttribute("class", "simon-button yellow light-up");  
setTimeout(normalColor,1000,color);
}
else{
blueButton.setAttribute("class", "simon-button blue light-up");  
setTimeout(normalColor,1000,color);
}
}


level++;
}
});



