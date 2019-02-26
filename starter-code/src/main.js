var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");
var randomBallPosition = Math.floor(Math.random()*800);
var balls = [];

window.onload = function() {

  //Creation of objects
  flagPT = new Flags(20, 20, 20, 20)
  flagFT = new Flags(20, 20, 760, 760)
  ball1 = new Component(200, Math.floor(Math.random()*800))
  ball2 = new Component(600, Math.floor(Math.random()*800))
  ball3 = new Component(Math.floor(Math.random()*800), 200)
  ball4 = new Component(Math.floor(Math.random()*800), 600)
  ball5 = new Component(randomBallPosition, randomBallPosition)
  ball6 = new Component(800-randomBallPosition, randomBallPosition)
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
        moveUp(playerPT);
        break;
      case 83:
        playerPT.facing = "down"
        moveDown(playerPT);
        break;
      case 65:
        playerPT.facing = "left"
        moveLeft(playerPT);
        break;
      case 68:
        playerPT.facing = "right"
        moveRight(playerPT);
        break;
      case 38:
        playerFT.facing = "up"
        moveUp(playerFT);
        break;
      case 40:
        playerFT.facing = "down"
        moveDown(playerFT);
        break;
      case 37:
        playerFT.facing = "left"
        moveLeft(playerFT);
        break;
      case 39:
        playerFT.facing = "right"
        moveRight(playerFT);
        break;
    }
  }

  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 87:
        stop(playerPT);
        break;
      case 83:
        stop(playerPT);
        break;
      case 65:
        stop(playerPT);
        break;
      case 68:
        stop(playerPT);
        break;
      case 38:
        stop(playerFT);
        break;
      case 40:
        stop(playerFT);
        break;
      case 37:
        stop(playerFT);
        break;
      case 39:
        stop(playerFT);
        break;
    }
  }

}