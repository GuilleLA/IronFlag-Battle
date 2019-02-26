
//Constructor of flags
function Flags (width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.draw = function() {
    ctx = myGameArea.canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, this.width, this.height);
  }
}


//Constructor of killing balls
function Component(width, height, x, y){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.sppedY = 0;
  this.draw = function() {
    ctx = myGameArea.canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, 15, 0, Math.PI*2, true)
    ctx.fill();
  }
}