var canvasDiv = document.querySelector(".canvas-container")
var scorePT = 0;
var scoreFT = 0;
//Area de juego
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "lightcoral";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.arc(800, 800, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  frame: 0,
  clearArea: function(){
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "lightcoral";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(800, 800, 100, 0, Math.PI*2, true)
    this.ctx.fill();
  },
}


//Cambios por frame
function updateGameArea() {
  checkCrashWithComponents ();

  myGameArea.clearArea();
  playerPT.crashWithBorders();
  playerFT.crashWithBorders();
  playerPT.draw();
  playerFT.draw();
  flagPT.draw();
  flagFT.draw();
  myGameArea.frames +=1;
  ballOrders();
  playerPTmotion()
  playerFTmotion()
  playerPT.carryFlag(flagFT);
  playerFT.carryFlag(flagPT);
  flagFT.moveFlag(playerPT);
  flagPT.moveFlag(playerFT);
  flagPT.inEnemyArea(baseFT);
  flagFT.inEnemyArea(basePT);
}



//playerPT motion
function playerPTmotion(){
  moveUpPT(key87, playerPT);
  moveDownPT(key83, playerPT);
  moveRightPT(key68, playerPT);
  moveLeftPT(key65, playerPT);
}

//playerFT motion
function playerFTmotion(){
  moveUpPT(key38, playerFT);
  moveDownPT(key40, playerFT);
  moveRightPT(key39, playerFT);
  moveLeftPT(key37, playerFT);
}
//motion definition
function moveUpPT(boolean, obj){
  if(boolean === true){
    if(obj.flag === false){
      obj.y -= 4;
    }
    else{
      obj.y -= 3
    }
  }
  else{
    obj.x = obj.x
    obj.y = obj.y
  }
}

function moveDownPT(boolean, obj){
  if(boolean === true){
    if(obj.flag === false){
      obj.y += 4;
    }
    else{
      obj.y += 3
    }
  }
  else{
    obj.x = obj.x
    obj.y = obj.y
  }
}
function moveRightPT(boolean, obj){
  if(boolean === true){
    if(obj.flag === false){
      obj.x += 4;
    }
    else{
      obj.x += 3
    }
  }
  else{
    obj.x = obj.x
    obj.y = obj.y
  }
}

function moveLeftPT(boolean, obj){
  if(boolean === true){
    if(obj.flag === false){
      obj.x -= 4;
    }
    else{
      obj.x -= 3
    }
  }
  else{
    obj.x = obj.x
    obj.y = obj.y
  }
}

//Creation of objects
function creationOfObjects(){
  flagPT = new Flags(20, 20, 20, 20)
  flagFT = new Flags(20, 20, 760, 760)
  ball1 = new Component(200, Math.floor(Math.random()*780), 20, 0, 4)
  ball2 = new Component(600, Math.floor(Math.random()*780), 20, 0, 4)
  ball3 = new Component(Math.floor(Math.random()*780), 200, 20, 4, 0)
  ball4 = new Component(Math.floor(Math.random()*780), 600, 20, 4, 0)
  ball5 = new Component(randomBallPosition, randomBallPosition, 20, 4, 4)
  ball6 = new Component(800-randomBallPosition, randomBallPosition, 20, 4, -4)
  balls.push(ball1, ball2, ball3, ball4, ball5, ball6);
  playerPT = new Player(25, 25, 50, 100, "down");
  playerFT = new Player(25, 25, 725, 675, "up")
}

function checkCrashWithComponents () {
  for (i=0;i<balls.length;i++){
    if (playerFT.crashWithComponents(balls[i]) === true){
      playerFT.flag = false;
      playerFT.x = playerFT.initialPosX;
      playerFT.y = playerFT.initialPosY;
    }
  }

  for (i=0;i<balls.length;i++){
    if (playerPT.crashWithComponents(balls[i]) === true){
      playerPT.flag = false;
      playerPT.x = playerPT.initialPosX;
      playerPT.y = playerPT.initialPosY;
    }
  }
}

function ballOrders(){
  ball1.draw();
  ball2.draw();
  ball3.draw();
  ball4.draw();
  ball5.draw();
  ball6.draw();
  ball1.moveComponent();
  ball2.moveComponent();
  ball3.moveComponent();
  ball4.moveComponent();
  ball5.moveComponent();
  ball6.moveComponent();
  ball1.crashWithBorders();
  ball2.crashWithBorders();
  ball3.crashWithBorders();
  ball4.crashWithBorders();
  ball5.crashWithBorders();
  ball6.crashWithBorders();
}