
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
function Component(x, y){
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.sppedY = 0;
  
}

Component.prototype.draw = function() {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(this.x, this.y, 15, 0, Math.PI*2, true)
  ctx.fill();
}

//Constructor player
function Player (width, height, x, y, facing){
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
