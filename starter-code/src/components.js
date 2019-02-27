
//Constructor of flags
function Flags (width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  
}

Flags.prototype.draw = function() {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}


//Constructor of killing balls
var compImg = new Image();
compImg.src = "images/Boladepinchos.webp"
function Component(x, y, radius, speedX, speedY){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speedX = speedX;
  this.speedY = speedY;
  
}

Component.prototype.draw = function() {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true)
  ctx.drawImage(compImg, this.x, this.y, 30, 30)
  
}

Component.prototype.crashWithBorders = function(){
  if((this.x + this.radius) >= 800 || (this.x + this.radius) <= 0 || (this.y + this.radius) >= 800 || (this.y + this.radius) <= 0){
    this.speedX *= -1;
    this.speedY *= -1; 
  }
}

Component.prototype.moveComponent = function(){
  this.x += this.speedX
  this.y += this.speedY

}

//Constructor player
function Player (width, height, x, y, facing){
  this.initalPosX = x;
  this.initialPosY = y;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.facing = facing;
  this.flag = false;
  
}

Player.prototype.draw = function() {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.crashWithBorders = function(){
  if((this.x + this.width) >= 800){
    this.x = 775
  }
  if((this.y + this.height) >= 800){
    this.y = 775
  }
  if(this.x <= 0){
    this.x = 0
  }
  if(this.y <= 0){
    this.y = 0
  }
}
