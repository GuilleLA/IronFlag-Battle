var flagImgPT = new Image()
var flagImgFT = new Image()
flagImgPT.src = "images/flagPT.ico"
flagImgFT.src = "images/flagFT.png"
function Flags (width, height, x, y) {
  this.initialPosX = x;
  this.initialPosY = y;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  
}

Flags.prototype.draw = function(img) {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.globalAlpha = 1;
  ctx.drawImage(img ,this.x + this.width/2, this.y - this.height, this.width+20, this.height+20);
}

Flags.prototype.moveFlag = function(obj){
  if(obj.flag === true){
    this.x = obj.x
    this.y = obj.y
  }
  else{
    this.x = this.initialPosX;
    this.y = this.initialPosY;
  }
}

Flags.prototype.inEnemyArea = function(obj){
  if (obj.x + obj.radius >= this.x && obj.x - obj.radius <= this.x + this.width && obj.y + obj.radius >= this.y && obj.y - obj.radius <= this.y + this.height){
    return true;
  }
  else{
    return false;
  }
}

//base objects
var basePT = {
  x: 0,
  y: 0,
  radius: 100,
}

var baseFT = {
  x: 800,
  y: 800,
  radius: 100,
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