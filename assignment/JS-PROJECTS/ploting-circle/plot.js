var canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");

var arr = [
  {x:100,y:100},
  {x:200,y:300},
  {x:50,y:100},
  {x:250,y:30},
  {x:100,y:100},
  {x:200,y:300},
  {x:400,y:500}
]




function drawCircle(arr,radius){
  for (var i = 0; i < arr.length; i++) {
    c.beginPath()
    c.arc(arr[i].x,arr[i].y,radius,0,2*Math.PI);
    c.fillStyle="blue";
    c.fill();
  }
}
drawCircle(arr,10);
