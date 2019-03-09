var map = [];
var mapFire = true;
function Map(x, y, radius, width, height){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.width = width;
  this.height = height;
}

Map.prototype.draw = function(){
  if (this.radius === 0){
    ctx = myGameArea.canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  if (this.radius != 0){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.fill();
  }
}

//Map orders
function mapOrders(){
  map1.draw();
  map2.draw();
  map3.draw();
  map4.draw();
  map5.draw();
  map6.draw();
  map7.draw();
  for (i=0;i<map.length;i++){
    if(map[i].radius === 0){
      if(playerFT.crashWithMap(map[i]) && playerFT.x+playerFT.width >= map[i].x && playerFT.x <= map[i].x){playerFT.x -= 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.x <= map[i].x+map[i].width && playerFT.x+playerFT.width >= map[i].x+map[i].width){playerFT.x += 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y+playerFT.height >= map[i].y && playerFT.y <= map[i].y){playerFT.y -= 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y <= map[i].y+map[i].height && playerFT.y+playerFT.height >= map[i].y+map[i].height){playerFT.y += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x+playerPT.width >= map[i].x && playerPT.x <= map[i].x){playerPT.x -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x <= map[i].x+map[i].width && playerPT.x+playerPT.width >= map[i].x+map[i].width){playerPT.x += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y+playerPT.height >= map[i].y && playerPT.y <= map[i].y){playerPT.y -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y <= map[i].y+map[i].height && playerPT.y+playerPT.height >= map[i].y+map[i].height){playerPT.y += 5}
    }
    if(map[i].radius != 0){
      if(playerFT.crashWithMap(map[i]) && playerFT.x >= map[i].x) {playerFT.x += 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y >= map[i].y) {playerFT.y += 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.x+playerFT.width <= map[i].x) {playerFT.x -= 5}
      if(playerFT.crashWithMap(map[i]) && playerFT.y+playerFT.height <= map[i].y) {playerFT.y -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x >= map[i].x) {playerPT.x += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y >= map[i].y) {playerPT.y += 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.x+playerPT.width <= map[i].x) {playerPT.x -= 5}
      if(playerPT.crashWithMap(map[i]) && playerPT.y+playerPT.height <= map[i].y) {playerPT.y -= 5}
    }
  }
  if (myGameArea.frame % 120 === 0){
    bulletCreation(mapFire, map3)
    bulletCreation(mapFire, map4)
    bulletCreation(mapFire, map5)
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
