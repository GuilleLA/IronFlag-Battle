var canvasDiv = document.querySelector(".canvas-container")
var scorePT = 0;
var scoreFT = 0;
var stage = 1;
var gamebkg = new Image()
gamebkg.src ="images/gamebkg.jpg"


//Area de juego
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(gamebkg, 0, 0, this.canvas.width, this.canvas.height);
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
    this.ctx.drawImage(gamebkg, 0, 0, this.canvas.width, this.canvas.height);
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
  stopGame: function(){
    clearInterval(this.interval);
  }
}


//Cambios por frame
function updateGameArea() {
  if (stage === 1){
    myGameArea.clearArea();
    myGameArea.frames +=1;
    playerOrders();
    bulletsOrders();
    flagOrders();
    if(bulletsFT[0]){
      for (i=0;i<bulletsFT.length;i++){
        if (playerPT.crashWithComponents(bulletsFT[i]) === true){
          playerPT.flag = false;
          playerPT.x = playerPT.initialPosX;
          playerPT.y = playerPT.initialPosY;
          bulletsFT.splice(i,1);
          i--;
        }
      }
    }
    if(bulletsPT[0]){
      for (i=0;i<bulletsPT.length;i++){
        if (playerFT.crashWithComponents(bulletsPT[i]) === true){
          playerFT.flag = false;
          playerFT.x = playerFT.initialPosX;
          playerFT.y = playerFT.initialPosY;
          bulletsPT.splice(i,1);
          i--;
        }
      }
    }
  }
  if (stage === 2){
    myGameArea.clearArea();
    myGameArea.frames +=1;
    mapOrders();
    bulletsOrders();
    playerOrders();
    flagOrders();
    if(bulletsFT[0]){
      for (i=0;i<bulletsFT.length;i++){
        if (playerPT.crashWithComponents(bulletsFT[i]) === true){
          playerPT.flag = false;
          playerPT.x = playerPT.initialPosX;
          playerPT.y = playerPT.initialPosY;
        }
      }
    }
    if(bulletsPT[0]){
      for (i=0;i<bulletsPT.length;i++){
        if (playerFT.crashWithComponents(bulletsPT[i]) === true){
          playerFT.flag = false;
          playerFT.x = playerFT.initialPosX;
          playerFT.y = playerFT.initialPosY;
        }
      }
    }
  }
  if (stage === 3){
    myGameArea.clearArea();
    myGameArea.frames +=1;
    mapOrders();
    bulletsOrders();
    ballOrders();
    playerOrders();
    flagOrders();
    if(bulletsFT[0]){
      for (i=0;i<bulletsFT.length;i++){
        if (playerPT.crashWithComponents(bulletsFT[i]) === true){
          playerPT.flag = false;
          playerPT.x = playerPT.initialPosX;
          playerPT.y = playerPT.initialPosY;
        }
      }
    }
    if(bulletsPT[0]){
      for (i=0;i<bulletsPT.length;i++){
        if (playerFT.crashWithComponents(bulletsPT[i]) === true){
          playerFT.flag = false;
          playerFT.x = playerFT.initialPosX;
          playerFT.y = playerFT.initialPosY;
        }
      }
    }
  }
  if (stage === 4){
    myGameArea.clearArea();
    myGameArea.frames +=1;
    mapOrders();
    bulletsOrders();
    ballOrders();
    playerOrders();
    flagOrders();
    if(bulletsFT[0]){
      for (i=0;i<bulletsFT.length;i++){
        if (playerPT.crashWithComponents(bulletsFT[i]) === true){
          playerPT.flag = false;
          playerPT.x = playerPT.initialPosX;
          playerPT.y = playerPT.initialPosY;
        }
      }
    }
    if(bulletsPT[0]){
      for (i=0;i<bulletsPT.length;i++){
        if (playerFT.crashWithComponents(bulletsPT[i]) === true){
          playerFT.flag = false;
          playerFT.x = playerFT.initialPosX;
          playerFT.y = playerFT.initialPosY;
        }
      }
    }
  }
  if (stage === 5){
    myGameArea.clearArea();
    myGameArea.frames +=1;
    mapOrders();
    bulletsOrders();
    ballOrders();
    playerOrders();
    flagOrders();
    if(bulletsFT[0]){
      for (i=0;i<bulletsFT.length;i++){
        if (playerPT.crashWithComponents(bulletsFT[i]) === true){
          playerPT.flag = false;
          playerPT.x = playerPT.initialPosX;
          playerPT.y = playerPT.initialPosY;
        }
      }
    }
    if(bulletsPT[0]){
      for (i=0;i<bulletsPT.length;i++){
        if (playerFT.crashWithComponents(bulletsPT[i]) === true){
          playerFT.flag = false;
          playerFT.x = playerFT.initialPosX;
          playerFT.y = playerFT.initialPosY;
        }
      }
    }
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
  map1 = new Map( 275, 0, 0, 25, 200);
  map2 = new Map( 0, 300, 0, 200, 25);
  map3 = new Map( 200, 600, 40, 0, 0);
  map4 = new Map( 400, 400, 40, 0, 0);
  map5 = new Map( 600, 200, 40, 0, 0);
  map6 = new Map( 500, 600, 0, 25, 200);
  map7 = new Map( 600, 475, 0, 200, 25);
  map.push(map1, map2, map3, map4, map5, map6, map7);
  playerPT = new Player(50, 50, 50, 100, "down");
  playerFT = new Player(50, 50, 725, 675, "up")
}


//playerPT motion
function playerPTmotion(){
  if(stage < 5){
    moveUpPT(key87, playerPT);
    moveDownPT(key83, playerPT);
    moveRightPT(key68, playerPT);
    moveLeftPT(key65, playerPT);
  }
  if (stage === 5){
    moveUpPT(key83, playerPT);
    moveDownPT(key87, playerPT);
    moveRightPT(key65, playerPT);
    moveLeftPT(key68, playerPT);
  }
  
}

//playerFT motion
function playerFTmotion(){
  if(stage < 5){
    moveUpPT(key38, playerFT);
    moveDownPT(key40, playerFT);
    moveRightPT(key39, playerFT);
    moveLeftPT(key37, playerFT);
  }
  if (stage === 5){
    moveUpPT(key40, playerFT);
    moveDownPT(key38, playerFT);
    moveRightPT(key37, playerFT);
    moveLeftPT(key39, playerFT);
  }
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

//Player orders
function playerOrders () {
  playerPT.crashWithBorders();
  playerFT.crashWithBorders();
  playerPT.draw(tankPTImg);
  playerFT.draw(tankFTImg);
  playerPTmotion()
  playerFTmotion()
  playerPT.carryFlag(flagFT);
  playerFT.carryFlag(flagPT);
}

//Flag orders
function flagOrders() {
  flagFT.moveFlag(playerPT);
  flagPT.moveFlag(playerFT);
  flagPT.draw(flagImgPT);
  flagFT.draw(flagImgFT);
  checkFlagInBase();
}

function checkFlagInBase() {
  if (flagPT.inEnemyArea(baseFT) === true) {
    scoreFT++;
    myGameArea.stopGame();
    stage++;
    reset();
  }
  if (flagFT.inEnemyArea(basePT) === true) {
    scorePT++;
    myGameArea.stopGame();
    stage++;
    reset();
  }
}

//ball orders 
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
  checkCrashWithComponents();
}


//Creation of bullets
function bulletCreation(bool, obj){
  if (bool === true && obj === playerFT){
    if(obj.facing === "up"){
      bulletsFT.push(new Bullet(obj.x + obj.width / 2, obj.y, 0, -7))
    }
    if(obj.facing === "down"){
      bulletsFT.push(new Bullet(obj.x + obj.width / 2, obj.y + obj.height, 0, 6))
    }
    if(obj.facing === "left"){
      bulletsFT.push(new Bullet(obj.x, obj.y + obj.height / 2, -7, 0))
    }
    if(obj.facing === "right"){
      bulletsFT.push(new Bullet(obj.x + obj.width, obj.y + obj.height / 2, 7, 0))
    }
  }
  if (bool === true && obj === playerPT){
    if(obj.facing === "up"){
      bulletsPT.push(new Bullet(obj.x + obj.width / 2, obj.y, 0, -7))
    }
    if(obj.facing === "down"){
      bulletsPT.push(new Bullet(obj.x + obj.width / 2, obj.y + obj.height, 0, 6))
    }
    if(obj.facing === "left"){
      bulletsPT.push(new Bullet(obj.x, obj.y + obj.height / 2, -7, 0))
    }
    if(obj.facing === "right"){
      bulletsPT.push(new Bullet(obj.x + obj.width, obj.y + obj.height / 2, 7, 0))
    }
  }
}

function bulletsAppear(){
  bulletCreation(key80, playerFT);
  bulletCreation(key86, playerPT);
  key80 = key86 = false;
}

//Bullets orders

function bulletsOrders(){
  bulletsAppear()
  for (i = 0; i<bulletsPT.length; i++){
    if(bulletsPT[i].crashWithBorders() === false){
      bulletsPT[i].draw();
      bulletsPT[i].moveBullet();
    }
  
    else if(bulletsPT[i].crashWithBorders() === true){
      bulletsPT.splice(i,1);
      i--;
    }
  }
  for (i = 0; i<bulletsFT.length; i++){
    if(bulletsFT[i].crashWithBorders() === false){
      bulletsFT[i].draw();
      bulletsFT[i].moveBullet();
    }
  
    else if(bulletsFT[i].crashWithBorders() === true){
      bulletsFT.splice(i,1);
      i--;
    }
  }
}

//Map orders
function mapOrders(){
  map1.draw();
  map2.draw();
  map3.draw();
  map4.draw();
  map5.draw();
  map6.draw();
  map7.draw();
  for (i=0;i<map.length;i++){
    if(map[i].radius === 0){
      if(playerFT.crashWithMap(map[i]) && playerFT.x+playerFT.width >= map[i].x && playerFT.x <= map[i].x){playerFT.x -= 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.x <= map[i].x+map[i].width && playerFT.x+playerFT.width >= map[i].x+map[i].width){playerFT.x += 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y+playerFT.height >= map[i].y && playerFT.y <= map[i].y){playerFT.y -= 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y <= map[i].y+map[i].height && playerFT.y+playerFT.height >= map[i].y+map[i].height){playerFT.y += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x+playerPT.width >= map[i].x && playerPT.x <= map[i].x){playerPT.x -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x <= map[i].x+map[i].width && playerPT.x+playerPT.width >= map[i].x+map[i].width){playerPT.x += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y+playerPT.height >= map[i].y && playerPT.y <= map[i].y){playerPT.y -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y <= map[i].y+map[i].height && playerPT.y+playerPT.height >= map[i].y+map[i].height){playerPT.y += 5}
    }
    if(map[i].radius != 0){
      if(playerFT.crashWithMap(map[i]) && playerFT.x >= map[i].x) {playerFT.x += 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y >= map[i].y) {playerFT.y += 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.x+playerFT.width <= map[i].x) {playerFT.x -= 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y+playerFT.height <= map[i].y) {playerFT.y -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x >= map[i].x) {playerPT.x += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y >= map[i].y) {playerPT.y += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x+playerPT.width <= map[i].x) {playerPT.x -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y+playerPT.height <= map[i].y) {playerPT.y -= 5}
    }
  }
}

//reset between stages
function reset() {
  if (stage < 6){
    playerFT.flag = false;
    playerFT.x = playerFT.initialPosX;
    playerFT.y = playerFT.initialPosY;
    playerFT.facing = "up";
    playerPT.flag = false;
    playerPT.x = playerPT.initialPosX;
    playerPT.y = playerPT.initialPosY;
    playerPT.facing = "down";
    flagFT.x = flagFT.initialPosX;
    flagFT.y = flagFT.initialPosY;
    flagPT.x = flagPT.initialPosX;
    flagPT.y = flagPT.initialPosY;
    var canvasSel = document.querySelector("canvas")
    scorePtHtml.innerHTML = "<p>Part-time Ironhacker</p>" + scorePT;
    scoreFtHtml.innerHTML = "<p>Full-time Ironhacker</p>" + scoreFT;
    canvasSel.classList.add("hide");
    scoreBoard.classList.remove("hide");
  }
  else{
    playerFT.flag = false;
    playerFT.x = playerFT.initialPosX;
    playerFT.y = playerFT.initialPosY;
    playerFT.facing = "up";
    playerPT.flag = false;
    playerPT.x = playerPT.initialPosX;
    playerPT.y = playerPT.initialPosY;
    playerPT.facing = "down";
    flagFT.x = flagFT.initialPosX;
    flagFT.y = flagFT.initialPosY;
    flagPT.x = flagPT.initialPosX;
    flagPT.y = flagPT.initialPosY;
    var canvasSel = document.querySelector("canvas");
    canvasSel.classList.add("hide");
    if (scorePT > scoreFT){winner.innerHTML = "Part-time Ironhacker won";}
    if (scorePT < scoreFT){winner.innerHTML = "Full-time Ironhacker won";}
    finalScreen.classList.remove("hide");
    stage = 1;
    scorePT = 0;
    scoreFT = 0;
  }
}

