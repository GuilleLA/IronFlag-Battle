//Selectors variables
var bodysel = document.querySelector("body");
var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");
var scoreBoard = document.querySelector(".score-board");
var scorePtHtml = document.querySelector(".score-pt");
var scoreFtHtml = document.querySelector(".score-ft");
var finalScreen = document.querySelector(".final-screen");
var winner = document.querySelector(".winner");
var ptImgCollection = document.getElementsByClassName("playerPT");
var ptImgArray = [].slice.call(ptImgCollection);
var ptRoleCollection = document.getElementsByClassName("rolePT");
var ptRoleArray = [].slice.call(ptRoleCollection);
var ptArraycount = 0;
var ftImgCollection = document.getElementsByClassName("playerFT");
var ftImgArray = [].slice.call(ftImgCollection);
var ftRoleCollection = document.getElementsByClassName("roleFT");
var ftRoleArray = [].slice.call(ftRoleCollection);
var ftArraycount = 1;
var mapCollection = document.getElementsByClassName("map");
var mapDivArray = [].slice.call(mapCollection);
var marsDiv = document.querySelector(".mars-sel");
var iceDiv = document.querySelector(".ice-sel");
var forestDiv = document.querySelector(".forest-sel");
var canvasDiv = document.querySelector(".canvas-container");

//Score and stage variables
var scorePT = 0;
var scoreFT = 0;
var stage = 1;


//Area de juego
var gamebkg = [new Image(), new Image(), new Image()]
gamebkg[0].src ="images/gamebkg.jpg"
gamebkg[1].src ="images/ice.jpg"
gamebkg[2].src ="images/grass.jpg"
var backgroundSelect = gamebkg[0];

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(backgroundSelect, 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.arc(800, 800, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  frame: 0,
  clearArea: function(){
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(backgroundSelect, 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 100, 0, Math.PI*2, true)
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(800, 800, 100, 0, Math.PI*2, true)
    this.ctx.fill();
  },
  stopGame: function(){
    clearInterval(this.interval);
  }
}


//Cambios por frame
function updateGameArea() {
  if (stage === 1){
    myGameArea.clearArea();
    myGameArea.frame +=1;
    playerOrders();
    bulletsOrders();
    flagOrders();
  }
  if (stage === 2){
    myGameArea.clearArea();
    myGameArea.frame +=1;
    mapOrders();
    bulletsOrders();
    playerOrders();
    flagOrders();
  }
  if (stage === 3){
    myGameArea.clearArea();
    myGameArea.frame +=1;
    mapOrders();
    bulletsOrders();
    ballOrders();
    playerOrders();
    flagOrders();
  }
  if (stage === 4){
    myGameArea.clearArea();
    myGameArea.frame +=1;
    mapOrders();
    bulletsOrders();
    ballOrders();
    playerOrders();
    flagOrders();

  }
  if (stage === 5){
    myGameArea.clearArea();
    myGameArea.frame +=1;
    mapOrders();
    bulletsOrders();
    ballOrders();
    playerOrders();
    flagOrders(); 
  }    
}

//Creation of objects
function creationOfObjects(){
  flagPT = new Flags(20, 20, 20, 20)
  flagFT = new Flags(20, 20, 760, 760)
  ball1 = new Component(200, Math.floor(Math.random()*780), 20, 0, 3)
  ball2 = new Component(600, Math.floor(Math.random()*780), 20, 0, 3)
  ball3 = new Component(Math.floor(Math.random()*780), 200, 20, 3, 0)
  ball4 = new Component(Math.floor(Math.random()*780), 600, 20, 3, 0)
  ball5 = new Component(randomBallPosition, randomBallPosition, 20, 3, 3)
  ball6 = new Component(800-randomBallPosition, randomBallPosition, 20, 3, -3)
  balls.push(ball1, ball2, ball3, ball4, ball5, ball6);
  map1 = new Map( 275, 50, 0, 25, 150);
  map2 = new Map( 50, 300, 0, 150, 25);
  map3 = new Map( 200, 600, 40, 0, 0);
  map4 = new Map( 400, 400, 40, 0, 0);
  map5 = new Map( 600, 200, 40, 0, 0);
  map6 = new Map( 500, 600, 0, 25, 150);
  map7 = new Map( 600, 475, 0, 150, 25);
  map.push(map1, map2, map3, map4, map5, map6, map7);
  playerPT = new Player(40, 40, 50, 100, "down");
  playerFT = new Player(40, 40, 725, 675, "up")
}

//reset between stages
function reset() {
  if (stage < 6){
    playerFT.flag = false;
    playerFT.x = playerFT.initialPosX;
    playerFT.y = playerFT.initialPosY;
    playerFT.facing = "up";
    playerPT.flag = false;
    playerPT.x = playerPT.initialPosX;
    playerPT.y = playerPT.initialPosY;
    playerPT.facing = "down";
    flagFT.x = flagFT.initialPosX;
    flagFT.y = flagFT.initialPosY;
    flagPT.x = flagPT.initialPosX;
    flagPT.y = flagPT.initialPosY;
    bulletsPT = [];
    bulletsFT = [];
    bulletsMap = [];
    var canvasSel = document.querySelector("canvas")
    scorePtHtml.innerHTML = "<p>Part-time Ironhacker</p>" + scorePT;
    scoreFtHtml.innerHTML = "<p>Full-time Ironhacker</p>" + scoreFT;
    canvasSel.classList.add("hide");
    scoreBoard.classList.remove("hide");
  }
  else{
    playerFT.flag = false;
    playerFT.x = playerFT.initialPosX;
    playerFT.y = playerFT.initialPosY;
    playerFT.facing = "up";
    playerPT.flag = false;
    playerPT.x = playerPT.initialPosX;
    playerPT.y = playerPT.initialPosY;
    playerPT.facing = "down";
    flagFT.x = flagFT.initialPosX;
    flagFT.y = flagFT.initialPosY;
    flagPT.x = flagPT.initialPosX;
    flagPT.y = flagPT.initialPosY;
    bulletsPT = [];
    bulletsFT = [];
    bulletsMap = [];
    var canvasSel = document.querySelector("canvas");
    canvasSel.classList.add("hide");
    if (scorePT > scoreFT){winner.innerHTML = "Part-time Ironhacker won";}
    if (scorePT < scoreFT){winner.innerHTML = "Full-time Ironhacker won";}
    finalScreen.classList.remove("hide");
    stage = 1;
    scorePT = 0;
    scoreFT = 0;
  }
}

