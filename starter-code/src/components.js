
//Constructor of flags
function Flags (width, height, x, y) {
  this.initialPosX = x;
  this.initialPosY = y;
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
  ctx.drawImage(compImg, (this.x - this.radius), (this.y - this.radius), 40, 40)
  
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
  this.initialPosX = x;
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

Player.prototype.crashWithComponents = function(obj){
  var distX = (this.width + obj.radius)
  var distY = (this.length + obj.radius)
  if (obj.x > this. x && obj.y > this.y && obj.y < this.y + this.height){
    if(this.x + distX - obj.x >= 0){return true}
  }
  else if (obj.x < this. x && obj.y > this.y && obj.y < this.y + this.height){
    if(obj.x + obj.radius - this.x >= 0){return true}
  }
  else if (obj.y > this. y && obj.x > this.x && obj.x < this.x + this.length){
    if(this.y + distY - obj.y >= 0){return true}
  }
  else if (obj.y < this. y && obj.x > this.x && obj.x < this.x + this.length){
    if(obj.y + obj.radius - this.y >= 0){return true}
  }
}

Player.prototype.carryFlag = function(obj){
  if (this.x <= obj.x + obj.width && this.x + this.width >= obj.x && this.y <= obj.y + obj.height && this.y + this.height >= obj.y){
    this.flag = true;
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

