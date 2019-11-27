var ball = document.getElementById('ball');
var container = document.getElementById('container');
var posY=0;
var dir=1;
var containerHeight=container.offsetHeight;
console.log("Height of container: ", containerHeight);
var ballRadius=ball.offsetWidth;
var ballCurrentPosY;
ball.style.left="100px";

console.log("ball width: ",ballRadius);


function animate(){
  setInterval(function(){


    ball.style.top=posY+"px";
    ballCurrentPosY=ball.offsetTop;
    if(ballCurrentPosY+ballRadius>containerHeight || ballCurrentPosY<0 ){
      console.log("Direction : ", dir);
      dir*=-1;
    }
    posY+=dir;
  },1);
}
animate();
