var mainImage = document.querySelector(".main-image");
var selection = document.querySelector(".selection");

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    mainImage.classList.add("hide");
    selection.classList.add("hide");
    myGameArea.start();
  };
}