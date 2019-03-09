var bulletsPT = [];
var bulletsFT = [];
var bulletsMap = [];

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


//Creation of bullets
function bulletCreation(bool, obj){
  if (bool === true && obj === playerFT){
    if(obj.facing === "up"){
      bulletsFT.push(new Bullet(obj.x + obj.width / 2, obj.y, 0, -7))
    }
    if(obj.facing === "down"){
      bulletsFT.push(new Bullet(obj.x + obj.width / 2, obj.y + obj.height, 0, 6))
    }
    if(obj.facing === "left"){
      bulletsFT.push(new Bullet(obj.x, obj.y + obj.height / 2, -7, 0))
    }
    if(obj.facing === "right"){
      bulletsFT.push(new Bullet(obj.x + obj.width, obj.y + obj.height / 2, 7, 0))
    }
  }
  if (bool === true && obj === playerPT){
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

function bulletsOrders(){
  bulletsAppear()
  for (i = 0; i<bulletsPT.length; i++){
    if(bulletsPT[i].crashWithBorders() === false){
      bulletsPT[i].draw();
      bulletsPT[i].moveBullet();
    }
  
    else if(bulletsPT[i].crashWithBorders() === true){
      bulletsPT.splice(i,1);
      i--;
    }
  }
  for (i = 0; i<bulletsFT.length; i++){
    if(bulletsFT[i].crashWithBorders() === false){
      bulletsFT[i].draw();
      bulletsFT[i].moveBullet();
    }
  
    else if(bulletsFT[i].crashWithBorders() === true){
      bulletsFT.splice(i,1);
      i--;
    }
  }
  for (i = 0; i<bulletsMap.length; i++){
    if(bulletsMap[i].crashWithBorders() === false){
      bulletsMap[i].draw();
      bulletsMap[i].moveBullet();
    }
  
    else if(bulletsMap[i].crashWithBorders() === true){
      bulletsMap.splice(i,1);
      i--;
    }
  }
}
