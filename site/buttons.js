//This sets up the basic counts for each tile
let greenCount = 0;
let redCount = 0;
let yellowCount = 0;
let blueCount = 0;

let greenButton = document.querySelector('.simon-button.green');
let redButton = document.querySelector('.simon-button.red');
let yellowButton = document.querySelector('.simon-button.yellow');
let blueButton = document.querySelector('.simon-button.blue');
let totalScore=0;
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
  totalScore = greenCount+redCount+yellowCount+blueCount;
  ctx.font= "60px Monaco";
  ctx.fillText(totalScore,0,100);
  }


  function checkElement(arr1,arr2){
    
        if (arr1[step]==arr2[step]){
          return true;
        }
      
      return false;
    
  }
//helper function for Simon light
  function lightUp(color){
    
    if (color.localeCompare("green")== 0){
     
      greenButton.setAttribute("class", "simon-button green light-up");
      beep.play();
      setTimeout(normalColor,500,color);
      }
      else if(color.localeCompare("red")==0){
       
      redButton.setAttribute("class", "simon-button red light-up");
      beep2.play();
      setTimeout(normalColor,500,color);
      }
      else if (color.localeCompare("yellow")==0){
        
      yellowButton.setAttribute("class", "simon-button yellow light-up");
      beep3.play();
      setTimeout(normalColor,500,color);
      }
      else{
      
      blueButton.setAttribute("class", "simon-button blue light-up");
      beep4.play();
      setTimeout(normalColor,500,color);
      }
  }


//Handles Simon choosing sequence
function simonLight(){
  const simonColor = Math.floor(Math.random() * colors.length);
  sequence.push(colors[simonColor]);
  console.log(sequence);
  
  let i=0;
  let intervalId= setInterval(function(){
    if(i==computerStep){
      clearInterval(intervalId);
    }
    else{
    let color = sequence[i];
    lightUp(color);
    i++;}
  },750);
  
  
}

  let sequence = [];
  let mySequence =[];

let computerStep =0;
let step = 0;
const colors = ["green","red","yellow","blue"];

  startButton.addEventListener('click',function(){
    //upon clicking the start button
    if(sequence.length==0){
    computerStep++;
    simonLight();}
  
    greenButton.addEventListener('click', function() {
      beep.play();
      mySequence.push("green");
      
      if (checkElement(sequence,mySequence)){
        greenCount++;
          updateScore();
          step++;
        if ((sequence.length==mySequence.length)){
          
          step =0;
          mySequence=[];
          computerStep++;
          simonLight();
          
        }
       
      }
      else {
       
        alert("Game Over! Your Score is "+totalScore);
        
      location.reload();

      }
      
    });
    
    
    redButton.addEventListener('click', function() {
      beep2.play();
      mySequence.push("red");
   
      if (checkElement(sequence,mySequence)){
        redCount++;
        updateScore();
        step++;
        if ((sequence.length==mySequence.length)){
          
          step =0;
          mySequence=[];
          computerStep++;
          simonLight();
          
        }
       
        }
        else {
         
        alert("Game Over! Your Score is "+totalScore);
        
    location.reload();
   
        }
      
    });
    
    yellowButton.addEventListener('click', function() {
      beep3.play();
      mySequence.push("yellow");
      
     if (checkElement(sequence,mySequence)){
      yellowCount++;
      updateScore();
      step++;
      if ((sequence.length==mySequence.length)){
       
        step =0;
        mySequence=[];
        computerStep++;
        simonLight();
       
      }
     
       
        }
        else {
         
        alert("Game Over! Your Score is "+totalScore);
        
        location.reload();
        }
     
    });
    
    
    blueButton.addEventListener('click', function() {
      beep4.play();
      mySequence.push("blue");
  
      if (checkElement(sequence,mySequence)){
        blueCount++;
          updateScore();
          step++;
        if ((sequence.length==mySequence.length)){
          
          step =0;
          mySequence=[];
          computerStep++;
          simonLight();
          
        }
      
        }
       else {
       
        alert("Game Over! Your Score is "+totalScore);
        
        location.reload();
      
        }
      
    });
  







    //only when we click on start button
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
  
  });
  
  

