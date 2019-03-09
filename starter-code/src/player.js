function Player (width, height, x, y, facing){
  this.initialPosX = x;
  this.initialPosY = y;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.facing = facing;
  this.flag = false;
  
}
var tankPTImg = [new Image(), new Image(), new Image(), new Image()]
var tankFTImg = [new Image(), new Image(), new Image(), new Image()]
tankPTImg[0].src = "images/tankPT.png"
tankPTImg[1].src = "images/tankPTright.png"
tankPTImg[2].src = "images/tankPTdown.png"
tankPTImg[3].src = "images/tankPTleft.png"
tankFTImg[0].src = "images/tankFT.png"
tankFTImg[1].src = "images/tankFTright.png"
tankFTImg[2].src = "images/tankFTdown.png"
tankFTImg[3].src = "images/tankFTleft.png"
Player.prototype.draw = function(img) {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.globalAlpha = 1;
  if (this.facing === "up"){
    ctx.drawImage(img[0], this.x, this.y, this.width, this.height);
  }
  if (this.facing === "right"){
    ctx.drawImage(img[1], this.x, this.y, this.width, this.height);
  }
  if (this.facing === "down"){
    ctx.drawImage(img[2], this.x, this.y, this.width, this.height);
  }
  if (this.facing === "left"){
    ctx.drawImage(img[3], this.x, this.y, this.width, this.height);
  }
}

Player.prototype.crashWithBorders = function(){
  if((this.x + this.width) >= 800){
    this.x = 760
  }
  if((this.y + this.height) >= 800){
    this.y = 760
  }
  if(this.x <= 0){
    this.x = 0
  }
  if(this.y <= 0){
    this.y = 0
  }
}

Player.prototype.crashWithComponents = function(obj){
  if (obj.x + obj.radius >= this. x && obj.x - obj.radius <= this.x + this.width && obj.y + obj.radius >= this.y && obj.y - obj.radius <= this.y + this.height){
    return true
  }
}

Player.prototype.carryFlag = function(obj){
  if (this.x <= obj.x + obj.width && this.x + this.width >= obj.x && this.y <= obj.y + obj.height && this.y + this.height >= obj.y){
    this.flag = true;
  }
}

Player.prototype.crashWithMap = function(obj){
  if(obj.radius === 0){
    if (this.x <= obj.x + obj.width && this.x + this.width >= obj.x && this.y <= obj.y + obj.height && this.y + this.height >= obj.y){
      return true
    }
  }
  if(obj.radius != 0){
    if (obj.x + obj.radius >= this. x && obj.x - obj.radius <= this.x + this.width && obj.y + obj.radius >= this.y && obj.y - obj.radius <= this.y + this.height){
      return true;
    }
  }
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

//keys objects for actions

var key87 = false;
var key83 = false;
var key65 = false;
var key68 = false;
var key38 = false;
var key40 = false;
var key37 = false;
var key39 = false;
var key80 = false;
var key86 = false;

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
  if(bulletsMap[0]){
    for (i=0;i<bulletsMap.length;i++){
      if (playerPT.crashWithComponents(bulletsMap[i]) === true){
        playerPT.flag = false;
        playerPT.x = playerPT.initialPosX;
        playerPT.y = playerPT.initialPosY;
        bulletsMap.splice(i,1);
        i--;
      }
      if (playerFT.crashWithComponents(bulletsMap[i]) === true){
        playerFT.flag = false;
        playerFT.x = playerFT.initialPosX;
        playerFT.y = playerFT.initialPosY;
        bulletsMap.splice(i,1);
        i--;
      }
    }
  }
}
