var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");
var randomBallPosition = Math.floor(Math.random()*800);
var balls = [];

window.onload = function() {

  creationOfObjects();

  //Actions after start
  document.getElementById("start-button").onclick = function() {
    mainImage.classList.add("hide");
    selection.classList.add("hide");
    myGameArea.start();
    flagPT.draw();
    flagFT.draw();
    ball1.draw();
    ball2.draw();
    ball3.draw();
    ball4.draw();
    ball5.draw();
    ball6.draw();
    playerPT.draw();
    playerFT.draw();
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
    }
  }
}