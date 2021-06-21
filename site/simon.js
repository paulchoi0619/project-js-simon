// This file contains the game logic.
// All the event-listening should happen in buttons.js
/*let options = ["greenButton", "redButton", "yellowButton", "blueButton"]; //this may be the id
let round = 1;
let i = 0;

function startaGame() {
  setTimeout(lightUp, 1500);
}

function chekPlayer() {
  console.log(moves, comp)
  if (moves.length === comp.length) {
    if (JSON.stringify(moves) == JSON. stringify(comp)) {
      generateNextColor();
      i=0;
      setTimeout(lightUp, 1500);
    } else {d
    fail();
  }
  } else {
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] !== comp [i]) {
        fail();
        return;
      }
    }
  }
}
function fail() {
  document.querySelector(".fail").style.display = 'block';
  document.querySelector(".simon-button").removeEventListener("click", function (){console.log("removed")});
}

function generateNextColor() {
  round++;
  document.querySelector("round").innerHTML = round;
  comp.push(options[Math.floor(Math.random() * 4)]);
  moves = [];
}

function lightUp() {
  setTimeout(clearColor, 1500)
  if (i < comp.length) {
    document.querySelector(`.${comp[i]}`).classList.add("light-up");
    switch (comp[i]) {
      case "redButton":
        break;
      case "greenButton":
        break;
      case "blueButton":
        break;
      case "yellowButtons":
        break;
      default:
        console.log("?");
    }
    setTimeout(ligthUp, 1500);
  } else {
    clearColor();
  }
}*/
//Another code that may work
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let win;

function play(){
  win= false;
  order = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i=0; i<5; i ++){
    order.push(Math.floor(Math.random()*4)+1);
  }
  compTurn=true;
  intervalId = setInterval(gameTurn, 800);
}

function gameTurn(){
  on = false;
  if (flash==turn){
    clearInterval (IntervalId);
    compTurn = false;
    clearColor();
    on = true;
  }
  if (compTurn) {
    clearColor();
    setTimeout(()=>{
      if (order [flash] == 1 ) one();
      if (order [flash] == 2 ) two();
      if (order [flash] == 3 ) one();
      if (order [flash] == 4 ) one();
      flash ++;
    },200);
  }
}

function check(){
  if(playerOrder [playerOrder.length - 1]!== order [playerOrder.length -1]) good=false;
  if (playerOrder.length == 5 && good) {
    winGame();
  }
  if (good==false){
    flashColor();
    setTimeout(()=>{
      clearColor();
      compTurn=true;
      flash=0;
      playerOrder=[];
      good=true;
      intervalId=serInterval(gameTurn,800);
    },800);
    noise=false;
  }
  if(turn==playerorder.length && good && !win) {
    turn ++;
    playerOrder=[];
    compTurn= true;
    flash = 0;
    intervalId = setInterval (gameTurn,800);
  }
}
