// This file contains the game logic.
// All the event-listening should happen in buttons.js
let options = ["greenButton", "redButton", "yellowButton", "blueButton"]; //this may be the id
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
}
