var mouseEvent="";


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var largura = 2;

var mouseX;
var mouseY;

canvas.addEventListener("mousedown", desenhar);

function desenhar(e){
    color = document.getElementById("color").value;
    largura = document.getElementById("number").value;
   
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", myMouseMove)



function myMouseMove(e){
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=largura;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
}
}
canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(){
    mouseEvent="mouseup";
}
















