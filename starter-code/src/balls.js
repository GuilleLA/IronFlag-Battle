var randomBallPosition = Math.floor(Math.random()*700 + 25);
var compImg = new Image();
compImg.src = "images/Boladepinchos.webp"
var balls = [];
function Component(x, y, radius, speedX, speedY){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speedX = speedX;
  this.speedY = speedY;
  
}

Component.prototype.draw = function() {
  ctx = myGameArea.canvas.getContext("2d");
  ctx.globalAlpha = 1;
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

//ball orders 

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

function ballOrders(){
  for(i = 0; i < balls.length; i++){
    balls[i].draw();
    balls[i].moveComponent();
    balls[i].crashWithBorders();
  }
  checkCrashWithComponents();
}