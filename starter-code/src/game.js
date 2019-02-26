var canvasDiv = document.querySelector(".canvas-container")
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
    this.ctx.fillRect(0, 0, 60, this.canvas.height);

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
}