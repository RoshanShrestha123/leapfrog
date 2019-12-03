function Game(){
  var that = this;
  var canvas = document.getElementById('canvas');
  canvas.height=600;
  canvas.width=500;
  var c = canvas.getContext('2d');
  var birdObj = new Bird(c,canvas.width,canvas.height);
  var obsObj = new Obs(c,canvas.width,canvas.height);

window.addEventListener('keydown',function(event){
  if (event.keyCode==32) {
    console.log("jump");
    that.jump();
  }
});


this.jump = function(){
  birdObj.dy=-5;
}
/*
game main loop starts here
 */
  setInterval(function(){
    c.clearRect(0,0,canvas.width,canvas.height);
    birdObj.update();
    obsObj.update();
  },10);
}
var gameObj = new Game();
