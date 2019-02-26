
//Constructor of flags



//Constructor of killing balls
function Component(width, height, x, y){
  this.with = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.sppedY = 0;
  this.draw = function() {
    ctx = myGameArea.canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(400, 400, 15, 0, Math.PI*2, true)
    ctx.fill();
  }
}