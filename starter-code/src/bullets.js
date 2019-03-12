var bulletsPT = [];
var bulletsFT = [];
var bulletsMap = [];
var laserPT = [];
var laserFT = [];

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


function Laser(x, y, width, height, speedX, speedY){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speedX = speedX;
  this.speedY = speedY;
}

Laser.prototype.draw = function() {

  ctx = myGameArea.canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.closePath()
}

Laser.prototype.moveBullet = function(){
  this.x += this.speedX
  this.y += this.speedY
}

Laser.prototype.crashWithBorders = function(){
  if(this.x >= 800 || this.y >= 800 || this.x + this.width <= 0 || this.y + this.height <= 0){
    return true;
  }else {
    return false
  }
}

//Creation of bullets
function bulletCreation(bool, obj){
  if (bool === true && obj === playerFT){
    if(playerFT.weapon === "machine-gun"){
      if(obj.facing === "up"){
        bulletsFT.push(new Bullet(obj.x + obj.width / 2, obj.y, 0, -7))
      }
      if(obj.facing === "down"){
        bulletsFT.push(new Bullet(obj.x + obj.width / 2, obj.y + obj.height, 0, 7))
      }
      if(obj.facing === "left"){
        bulletsFT.push(new Bullet(obj.x, obj.y + obj.height / 2, -7, 0))
      }
      if(obj.facing === "right"){
        bulletsFT.push(new Bullet(obj.x + obj.width, obj.y + obj.height / 2, 7, 0))
      }
    }
    if (playerFT.weapon === "laser"){
      if(obj.facing === "up"){
        laserFT.push(new Laser(obj.x + obj.width / 2, obj.y, 10, 30, 0, -6))
      }
      if(obj.facing === "down"){
        laserFT.push(new Laser(obj.x + obj.width / 2, obj.y + obj.height, 10, 30, 0, 6))
      }
      if(obj.facing === "left"){
        laserFT.push(new Laser(obj.x, obj.y + obj.height / 2, 30, 10, -6, 0))
      }
      if(obj.facing === "right"){
        laserFT.push(new Laser(obj.x + obj.width, obj.y + obj.height / 2, 30, 10, 6, 0))
      }
    } 
  }
  if (bool === true && obj === playerPT){
    if(playerPT.weapon === "machine-gun"){
      if(obj.facing === "up"){
        bulletsPT.push(new Bullet(obj.x + obj.width / 2, obj.y, 0, -7))
      }
      if(obj.facing === "down"){
        bulletsPT.push(new Bullet(obj.x + obj.width / 2, obj.y + obj.height, 0, 7))
      }
      if(obj.facing === "left"){
        bulletsPT.push(new Bullet(obj.x, obj.y + obj.height / 2, -7, 0))
      }
      if(obj.facing === "right"){
        bulletsPT.push(new Bullet(obj.x + obj.width, obj.y + obj.height / 2, 7, 0))
      }
    }
    if (playerPT.weapon === "laser"){
      if(obj.facing === "up"){
        laserPT.push(new Laser(obj.x + obj.width / 2, obj.y, 10, 30, 0, -6))
      }
      if(obj.facing === "down"){
        laserPT.push(new Laser(obj.x + obj.width / 2, obj.y + obj.height, 10, 30, 0, 6))
      }
      if(obj.facing === "left"){
        laserPT.push(new Laser(obj.x, obj.y + obj.height / 2, 30, 10, -6, 0))
      }
      if(obj.facing === "right"){
        laserPT.push(new Laser(obj.x + obj.width, obj.y + obj.height / 2, 30, 10, 6, 0))
      }
    } 
  }
  if (bool === true && obj === map3 || bool === true && obj === map4 || bool === true && obj === map5){
    bulletsMap.push(new Bullet(obj.x+obj.radius, obj.y, 5, 0))
    bulletsMap.push(new Bullet(obj.x-obj.radius, obj.y, -5, 0))
    bulletsMap.push(new Bullet(obj.x, obj.y+obj.radius, 0, 5))
    bulletsMap.push(new Bullet(obj.x, obj.y-obj.radius, 0, -5))
  }
}

function bulletsAppear(){
  bulletCreation(key80, playerFT);
  bulletCreation(key86, playerPT);
  key80 = key86 = false;
}

//Bullets orders

function bulletsBorders(arr){
  for (i = 0; i<arr.length; i++){
    if(arr[i].crashWithBorders() === false){
      arr[i].draw();
      arr[i].moveBullet();
    }
  
    else if(arr[i].crashWithBorders() === true){
      arr.splice(i,1);
      i--;
    }
  }
}

function bulletsOrders(){
  bulletsAppear()
  bulletsBorders(bulletsPT);
  bulletsBorders(bulletsFT);
  bulletsBorders(laserPT);
  bulletsBorders(laserFT);
  bulletsBorders(bulletsMap);
}
