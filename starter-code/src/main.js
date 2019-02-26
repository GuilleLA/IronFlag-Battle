var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");
var randomBallPosition = Math.floor(Math.random()*800)

window.onload = function() {
  flagPT = new Flags(20, 20, 20, 20)
  flagFT = new Flags(20, 20, 760, 760)
  ball1 = new Component(200, Math.floor(Math.random()*800))
  ball2 = new Component(600, Math.floor(Math.random()*800))
  ball3 = new Component(Math.floor(Math.random()*800), 200)
  ball4 = new Component(Math.floor(Math.random()*800), 600)
  ball5 = new Component(randomBallPosition, randomBallPosition)
  ball6 = new Component(800-randomBallPosition, randomBallPosition)
  playerPT = new Player(25, 25, 50, 100, "down");
  playerFT = new Player(25, 25, 725, 675, "up")
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
}