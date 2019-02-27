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
    this.interval = setInterval(updateGameArea, 20);
  },
  frame: 0,
  clearArea: function(){
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
  },
}


//Cambios por frame
function updateGameArea() {
  myGameArea.clearArea();
  playerPT.crashWithBorders();
  playerFT.crashWithBorders();
  playerPT.draw();
  playerFT.draw();
  flagPT.draw();
  flagFT.draw();
  myGameArea.frames +=1;
  ball1.draw();
  ball2.draw();
  ball3.draw();
  ball4.draw();
  ball5.draw();
  ball6.draw();
  ball1.moveComponent();
  ball2.moveComponent();
  ball3.moveComponent();
  ball4.moveComponent();
  ball5.moveComponent();
  ball6.moveComponent();
  ball1.crashWithBorders();
  ball2.crashWithBorders();
  ball3.crashWithBorders();
  ball4.crashWithBorders();
  ball5.crashWithBorders();
  ball6.crashWithBorders();
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