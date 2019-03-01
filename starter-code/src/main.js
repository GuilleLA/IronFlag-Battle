var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");
var scoreBoard = document.querySelector(".score-board");
var scorePtHtml = document.querySelector(".score-pt");
var scoreFtHtml = document.querySelector(".score-ft");
var randomBallPosition = Math.floor(Math.random()*700 + 25);
var balls = [];
var bulletsPT = [];
var bulletsFT = [];


window.onload = function() {

  creationOfObjects();
  
  //Actions after start
  document.getElementById("start-button").onclick = function() {
    mainImage.classList.add("hide");
    selection.classList.add("hide");
    myGameArea.start();
  };

  document.querySelector(".change-stage").onclick = function() {
    scoreBoard.classList.add("hide");
    var canvasSel = document.querySelector("canvas");
    canvasSel.classList.remove("hide");
    if (stage === 2){
      myGameArea.start();
    }
    if (stage === 3){
      myGameArea.start();
    }
    if (stage === 4){
      myGameArea.start();
    }
    if (stage === 5){
      myGameArea.start();
    }
  };

  //movement definition
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 87:
        playerPT.facing = "up"
        key87 = true;
        break;
      case 83:
        playerPT.facing = "down"
        key83 = true;
        break;
      case 65:
        playerPT.facing = "left"
        key65 = true;
        break;
      case 68:
        playerPT.facing = "right"
        key68 = true;
        break;
      case 38:
        playerFT.facing = "up"
        key38 = true;
        break;
      case 40:
        playerFT.facing = "down"
        key40 = true;
        break;
      case 37:
        playerFT.facing = "left"
        key37 = true;
        break;
      case 39:
        playerFT.facing = "right"
        key39 = true;
        break;
      case 80:
        key80 = true;
        break;
      case 86:
        bulletCreation(playerPT);
        key86 = true;
        break;
    }
  }

  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 87:
        key87 = false;
        break;
      case 83:
        key83 = false;
        break;
      case 65:
        key65 = false;
        break;
      case 68:
        key68 = false;
        break;
      case 38:
        key38 = false;
        break;
      case 40:
        key40 = false;
        break;
      case 37:
        key37 = false;
        break;
      case 39:
        key39 = false;
        break;
      case 80:
        key80 = false;
        break;
      case 86:
        key86 = false;
        break;
    }
  }
}

