var canvasDiv = document.querySelector(".canvas-container")

//Area de juego
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "lightcoral";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "black";
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(800, 800, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
}







//players motion
function moveUp(obj){
  if(obj.flag === false){
    obj.y -= 5;
  }
  else{
    obj.y -= 3
  }
}

function moveDown(obj){
  if(obj.flag === false){
    obj.y += 5;
  }
  else{
    obj.y += 3
  }
}

function moveRight(obj){
  if(obj.flag === false){
    obj.x += 5;
  }
  else{
    obj.x += 3
  }
}

function moveLeft(obj){
  if(obj.flag === false){
    obj.x -= 5;
  }
  else{
    obj.x -= 3
  }
}

function stop(obj){
  obj.x = obj.x
  obj.y = obj.y
}