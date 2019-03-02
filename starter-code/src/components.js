//Constructor of flags
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
  //ctx.fillStyle = "blue";
  //ctx.fillRect(this.x, this.y, this.width, this.height);
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
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
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
  //ctx.fillStyle = "yellow";
  //ctx.fillRect(this.x, this.y, this.width, this.height);
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
  if (obj.x + obj.radius >= this. x && obj.x - obj.radius <= this.x + this.width && obj.y + obj.radius >= this.y && obj.y - obj.radius <= this.y + this.height){
    return true
  }
}

Player.prototype.carryFlag = function(obj){
  if (this.x <= obj.x + obj.width && this.x + this.width >= obj.x && this.y <= obj.y + obj.height && this.y + this.height >= obj.y){
    this.flag = true;
  }
}


//Bullets constructor

function Bullet(x, y, speedX, speedY) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.speedX = speedX;
  this.speedY = speedY;
}

Bullet.prototype.draw = function() {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  ctx.fill();
}

Bullet.prototype.moveBullet = function(){
  this.x += this.speedX
  this.y += this.speedY
}

Bullet.prototype.crashWithBorders = function(){
  if((this.x + this.radius) >= 800 || (this.x + this.radius) <= 0 || (this.y + this.radius) >= 800 || (this.y + this.radius) <= 0){
    return true;
  }
  else{return false}
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