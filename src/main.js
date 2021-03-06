var time;
var time2;
var canvasBkg = 0;
var intro = document.querySelector("audio");
gun = new Audio("sounds/gunshort.mp3");
machine = new Audio("sounds/machineshort.mp3");
laser = new Audio("sounds/lasershort.mp3");
energyCanon = new Audio("sounds/energyshot.mp3");
explosionEffect = new Audio("sounds/Explosion.mp3");
window.onload = function() {
  
  creationOfObjects();
  
  document.querySelector(".off").onclick = function() {
    intro.play();
    document.querySelector(".off").classList.add("hide");
    document.querySelector(".on").classList.remove("hide");
  }
  document.querySelector(".on").onclick = function() {
    intro.pause();
    document.querySelector(".on").classList.add("hide");
    document.querySelector(".off").classList.remove("hide");
  }
  //Actions after start
  document.getElementById("start-button").onclick = function() {
    intro.pause();
    document.querySelector(".off").classList.add("hide");
    document.querySelector(".on").classList.add("hide");
    mainImage.classList.add("hide");
    selection.classList.add("hide");
    infoBoxLife[0].classList.remove("hide")
    infoBoxLife[1].classList.remove("hide")
    infoBoxWeapon[0].classList.remove("hide")
    infoBoxWeapon[1].classList.remove("hide")
    infoBoxPower[0].classList.remove("hide")
    infoBoxPower[1].classList.remove("hide")
    myGameArea.start();
  };
  
  //character selection buttons functionality
  document.querySelector(".buttonFTL").onclick = function() {
    if (ftArraycount === 0){
      ftImgArray[ftArraycount].classList.add("hide");
      ftRoleArray[ftArraycount].classList.add("hide");
      ftArraycount = 2;
      ftImgArray[ftArraycount].classList.remove("hide");
      ftRoleArray[ftArraycount].classList.remove("hide");
    }
    else {
      ftImgArray[ftArraycount].classList.add("hide");
      ftRoleArray[ftArraycount].classList.add("hide");
      ftArraycount--
      ftImgArray[ftArraycount].classList.remove("hide");
      ftRoleArray[ftArraycount].classList.remove("hide");
    }
  };
  document.querySelector(".buttonFTR").onclick = function() {
    if (ftArraycount === 2){
      ftImgArray[ftArraycount].classList.add("hide");
      ftRoleArray[ftArraycount].classList.add("hide");
      ftArraycount = 0;
      ftImgArray[ftArraycount].classList.remove("hide");
      ftRoleArray[ftArraycount].classList.remove("hide");
    }
    else {
      ftImgArray[ftArraycount].classList.add("hide");
      ftRoleArray[ftArraycount].classList.add("hide");
      ftArraycount++
      ftImgArray[ftArraycount].classList.remove("hide");
      ftRoleArray[ftArraycount].classList.remove("hide");
    }
  };
  document.querySelector(".buttonPTL").onclick = function() {
    if (ptArraycount === 0){
      ptImgArray[ptArraycount].classList.add("hide");
      ptRoleArray[ptArraycount].classList.add("hide");
      ptArraycount = 2;
      ptImgArray[ptArraycount].classList.remove("hide");
      ptRoleArray[ptArraycount].classList.remove("hide");
    }
    else {
      ptImgArray[ptArraycount].classList.add("hide");
      ptRoleArray[ptArraycount].classList.add("hide");
      ptArraycount--
      ptImgArray[ptArraycount].classList.remove("hide");
      ptRoleArray[ptArraycount].classList.remove("hide");
    }
  };
  document.querySelector(".buttonPTR").onclick = function() {
    if (ptArraycount === 2){
      ptImgArray[ptArraycount].classList.add("hide");
      ptRoleArray[ptArraycount].classList.add("hide");
      ptArraycount = 0;
      ptImgArray[ptArraycount].classList.remove("hide");
      ptRoleArray[ptArraycount].classList.remove("hide");
    }
    else {
      ptImgArray[ptArraycount].classList.add("hide");
      ptRoleArray[ptArraycount].classList.add("hide");
      ptArraycount++
      ptImgArray[ptArraycount].classList.remove("hide");
      ptRoleArray[ptArraycount].classList.remove("hide");
    }
  };

  //change map
  document.querySelector(".mars-sel").onclick = function() {
    marsDiv.classList.add("selected");
    mapDivArray[0].classList.remove("hide");
    mapDivArray[0].setAttribute("style", 'color: wheat;')
    mapDivArray[1].classList.add("hide");
    mapDivArray[2].classList.add("hide");
    canvasBkg = 0;
    backgroundSelect = gamebkg[0]
    bodysel.setAttribute("style", 'background-image: url("images/background.png")')
    mainImage.setAttribute("style", 'background-image: url("images/paisaje\ .gif")')
    iceDiv.classList.remove("selected");
    forestDiv.classList.remove("selected");
    ftRoleArray[0].setAttribute("style", 'color: wheat;')
    ftRoleArray[1].setAttribute("style", 'color: wheat;')
    ftRoleArray[2].setAttribute("style", 'color: wheat;')
    ptRoleArray[0].setAttribute("style", 'color: wheat;')
    ptRoleArray[1].setAttribute("style", 'color: wheat;')
    ptRoleArray[2].setAttribute("style", 'color: wheat;')
  }
  document.querySelector(".ice-sel").onclick = function() {
    iceDiv.classList.add("selected");
    mapDivArray[0].classList.add("hide");
    mapDivArray[1].classList.remove("hide");
    mapDivArray[1].setAttribute("style", 'color: red;')
    mapDivArray[2].classList.add("hide");
    canvasBkg = 1;
    backgroundSelect = gamebkg[1]
    bodysel.setAttribute("style", 'background-image: url("images/icebkg.jpg")')
    mainImage.setAttribute("style", 'background-image: url("images/paisaje_blanco.gif")')
    marsDiv.classList.remove("selected");
    forestDiv.classList.remove("selected");
    ftRoleArray[0].setAttribute("style", 'color: red;')
    ftRoleArray[1].setAttribute("style", 'color: red;')
    ftRoleArray[2].setAttribute("style", 'color: red;')
    ptRoleArray[0].setAttribute("style", 'color: red;')
    ptRoleArray[1].setAttribute("style", 'color: red;')
    ptRoleArray[2].setAttribute("style", 'color: red;')
  }
  document.querySelector(".forest-sel").onclick = function() {
    forestDiv.classList.add("selected");
    mapDivArray[0].classList.add("hide");
    mapDivArray[1].classList.add("hide");
    mapDivArray[2].classList.remove("hide");
    mapDivArray[2].setAttribute("style", 'color: aqua;')
    canvasBkg = 2;
    backgroundSelect = gamebkg[2]
    bodysel.setAttribute("style", 'background-image: url("images/forestbkg.png")')
    mainImage.setAttribute("style", 'background-image: url("images/paisaje_tierra.gif")')
    iceDiv.classList.remove("selected");
    marsDiv.classList.remove("selected");
    ftRoleArray[0].setAttribute("style", 'color: aqua;')
    ftRoleArray[1].setAttribute("style", 'color: aqua;')
    ftRoleArray[2].setAttribute("style", 'color: aqua;')
    ptRoleArray[0].setAttribute("style", 'color: aqua;')
    ptRoleArray[1].setAttribute("style", 'color: aqua;')
    ptRoleArray[2].setAttribute("style", 'color: aqua;')
  }

  //change stage button functionality
  document.querySelector(".change-stage").onclick = function() {
    scoreBoard.classList.add("hide");
    var canvasSel = document.querySelector("canvas");
    canvasSel.classList.remove("hide");
    if (stage === 2){
      myGameArea.start();
    }
    if (stage === 3){
      myGameArea.start();
    }
    if (stage === 4){
      canvasSel.classList.add("rotate-canvas");
      myGameArea.start();
    }
    if (stage === 5){
      myGameArea.start();
    }
  };

  document.querySelector(".final-button").onclick = function() {
    finalScreen.classList.add("hide");
    var canvasSel = document.querySelector("canvas");
    canvasSel.classList.remove("rotate-canvas");
    canvasSel.classList.remove("hide");
    myGameArea.start();
  }

  //movement definition
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 87:
        playerPT.facing = "up"
        key87 = true;
        break;
      case 83:
        playerPT.facing = "down"
        key83 = true;
        break;
      case 65:
        playerPT.facing = "left"
        key65 = true;
        break;
      case 68:
        playerPT.facing = "right"
        key68 = true;
        break;
      case 38:
        playerFT.facing = "up"
        key38 = true;
        break;
      case 40:
        playerFT.facing = "down"
        key40 = true;
        break;
      case 37:
        playerFT.facing = "left"
        key37 = true;
        break;
      case 39:
        playerFT.facing = "right"
        key39 = true;
        break;
      case 80:
        if(playerFT.weapon === "machine-gun"){ 
          if(!time){ key80 = true;
            gun.play();
            time = setTimeout(_=> time = undefined, 300)}
          break;
          }
        if (playerFT.weapon === "laser"){
          laser.play(); 
          if(!time){ key80 = true;
            time = setTimeout(_=> time = undefined, 900)}
          break;
          }
      case 86:
        if(playerPT.weapon === "machine-gun"){
          if(!time2) {key86 = true;
            gun.play();
            time2 = setTimeout(_=> time2 = undefined, 300)}
          break;
        }
        if (playerPT.weapon === "laser"){
          laser.play();
          if(!time2) {key86 = true;
            time2 = setTimeout(_=> time2 = undefined, 900)}
          break;
        }
      case 67:
        if(playerPT.weapon === "machine-gun"){
          playerPT.weapon = "laser";
          machinePT.classList.add("hide")
          laserPTImg.classList.remove("hide")
        }
        else{
          playerPT.weapon = "machine-gun";
          laserPTImg.classList.add("hide")
          machinePT.classList.remove("hide")
        }
        break;
      case 79:
        if(playerFT.weapon === "machine-gun"){
          playerFT.weapon = "laser";
          machineFT.classList.add("hide")
          laserFTImg.classList.remove("hide")
        }
        else{
          playerFT.weapon = "machine-gun";
          laserFTImg.classList.add("hide")
          machineFT.classList.remove("hide")
        }
        break;
      case 73:
        if(playerFT.power >= 420){
          key73 = true;
          energyCanon.play();
          playerFT.power = 0;
          loadBar[1].classList.remove("progress2")
        }
        break;
      case 88:
        if(playerPT.power >= 420){
          key88 = true;
          energyCanon.play();          
          playerPT.power = 0;
          loadBar[0].classList.remove("progress2")
        }
        break;
    }
  }

  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 87:
        key87 = false;
        break;
      case 83:
        key83 = false;
        break;
      case 65:
        key65 = false;
        break;
      case 68:
        key68 = false;
        break;
      case 38:
        key38 = false;
        break;
      case 40:
        key40 = false;
        break;
      case 37:
        key37 = false;
        break;
      case 39:
        key39 = false;
        break;
      case 80:
        key80 = false;
        break;
      case 86:
        key86 = false;
        break;
    }
  }
}

