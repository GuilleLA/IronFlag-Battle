function Player (width, height, x, y, facing){
  this.initialPosX = x;
  this.initialPosY = y;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.facing = facing;
  this.flag = false;
  this.weapon = "machine-gun";
  this.life = 2;
  this.bullets = [];
  this.laser = [];
  this.power = 0;
  this.powerArray = [];
  this.explosion = 25;
  this.deadX;
  this.deadY;
  
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
var explosion = new Image();
explosion.src = "images/Explosion.png"
Player.prototype.drawExplosion = function(){
  ctx = myGameArea.canvas.getContext("2d");
  ctx.globalAlpha = 1;
  ctx.drawImage(explosion, this.deadX, this.deadY, this.width,this.height);
}

Player.prototype.loadPower = function() {
  if (this.power < 420){
    this.power++
  }
}

Player.prototype.loadDead = function() {
  if (this.explosion < 300){
    this.explosion++
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
Player.prototype.laserCrash = function(obj){
  if (this.x <= obj.x + obj.width && this.x + this.width >= obj.x && this.y <= obj.y + obj.height && this.y + this.height >= obj.y){
    return true;
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
var key88 = false;
var key73 = false;

//Player orders
var deadX;
var deadY;


function bulletsCrash(obj, arr, sel1, sel2) {
  if(arr[0]){
    for (i=0;i<arr.length;i++){
      if (obj.crashWithComponents(arr[i]) === true){
        if(obj.life === 1){
          obj.explosion = 0;
          obj.deadX = obj.x;
          obj.deadY = obj.y;
          explodeTank(obj);
          explosionEffect.play();
          sel1.classList.remove("hide");
          sel2.classList.add("hide");
          obj.flag = false;
          obj.life = 2;
          obj.x = obj.initialPosX;
          obj.y = obj.initialPosY;
          arr.splice(i,1);
          i--;
          continue;
        }
        if(obj.life === 2){
          sel1.classList.add("hide");
          sel2.classList.remove("hide");
          obj.life = 1;
          arr.splice(i,1);
          i--;
        }
      }
    }
  }
}

function powerCrash(obj, arr, sel1, sel2) {
  if(arr[0]){
    for (i=0;i<arr.length;i++){
      if (obj.crashWithComponents(arr[i]) === true){
        obj.explosion = 0;
        explodeTank(obj);
        explosionEffect.play();
        obj.deadX = obj.x;
        obj.deadY = obj.y;
        sel1.classList.remove("hide");
        sel2.classList.add("hide");
        obj.flag = false;
        obj.life = 2;
        obj.x = obj.initialPosX;
        obj.y = obj.initialPosY;
        arr.splice(i,1);
        i--;
      }
    }
  }
}

function crashWithLaser(obj, arr, sel1, sel2) {
  if(arr[0]){
    for (i=0;i<arr.length;i++){
      if (obj.laserCrash(arr[i]) === true){
        obj.explosion = 0;
        explodeTank(obj);
        explosionEffect.play();
        obj.deadX = obj.x;
        obj.deadY = obj.y;
        obj.explosion = 0;
        obj.flag = false;
        obj.x = obj.initialPosX;
        obj.y = obj.initialPosY;
        arr.splice(i,1);
        i--;
        sel1.classList.remove("hide");
        sel2.classList.add("hide");
      }
    }
  }
}

function playerOrders () {
  playerPT.crashWithBorders();
  playerFT.crashWithBorders();
  playerPT.draw(tankPTImg);
  playerFT.draw(tankFTImg);
  playerPTmotion()
  playerFTmotion()
  playerPT.carryFlag(flagFT);
  playerFT.carryFlag(flagPT);
  bulletsCrash(playerPT, playerFT.bullets, life2PT, damagePT);
  bulletsCrash(playerFT, playerPT.bullets, life2FT, damageFT);
  bulletsCrash(playerPT, bulletsMap, life2PT, damagePT);
  bulletsCrash(playerFT, bulletsMap, life2FT, damageFT);
  crashWithLaser(playerPT, playerFT.laser, life2PT, damagePT);
  crashWithLaser(playerFT, playerPT.laser, life2FT, damageFT);
  powerCrash(playerPT, playerFT.powerArray, life2PT, damagePT);
  powerCrash(playerFT, playerPT.powerArray, life2FT, damageFT);
}
