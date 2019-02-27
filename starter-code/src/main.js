var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");
var randomBallPosition = Math.floor(Math.random()*800);
var balls = [];

window.onload = function() {

  //Creation of objects
  flagPT = new Flags(20, 20, 20, 20)
  flagFT = new Flags(20, 20, 760, 760)
  ball1 = new Component(200, Math.floor(Math.random()*800), 15, 0, 5)
  ball2 = new Component(600, Math.floor(Math.random()*800), 15, 0, 5)
  ball3 = new Component(Math.floor(Math.random()*800), 200, 15, 5, 0)
  ball4 = new Component(Math.floor(Math.random()*800), 600, 15, 5, 0)
  ball5 = new Component(randomBallPosition, randomBallPosition, 15, 5, 5)
  ball6 = new Component(800-randomBallPosition, randomBallPosition, 15, 5, -5)
  balls.push(ball1, ball2, ball3, ball4, ball5, ball6);
  playerPT = new Player(25, 25, 50, 100, "down");
  playerFT = new Player(25, 25, 725, 675, "up")

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
      playerPT.facing = "up"
      key87 = false;
      break;
    case 83:
      playerPT.facing = "down"
      key83 = false;
      break;
    case 65:
      playerPT.facing = "left"
      key65 = false;
      break;
    case 68:
      playerPT.facing = "right"
      key68 = false;
      break;
    case 38:
      playerFT.facing = "up"
      key38 = false;
      break;
    case 40:
      playerFT.facing = "down"
      key40 = false;
      break;
    case 37:
      playerFT.facing = "left"
      key37 = false;
      break;
    case 39:
      playerFT.facing = "right"
      key39 = false;
      break;
  }
}
}