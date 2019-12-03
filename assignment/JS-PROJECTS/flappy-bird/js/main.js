function Game(){
  var that = this;
  var canvas = document.getElementById('canvas');
  canvas.height=600;
  canvas.width=500;
  var c = canvas.getContext('2d');
  var birdObj = new Bird(c,canvas.width,canvas.height);
  var obsObj ;
  this.obsInterval = 0;
  this.obsArr=[];

window.addEventListener('keydown',function(event){
  if (event.keyCode==32) {
    that.jump();
  }
});

this.checkCollision = function(){

  for (var i = 0; i < this.obsArr.length; i++) {
    if (birdObj.x+birdObj.width>this.obsArr[i].x1&&
        birdObj.x<this.obsArr[i].x1+this.obsArr[i].width&&
        birdObj.y+birdObj.height>this.obsArr[i].y1&&
        birdObj.y<this.obsArr[i].y1+this.obsArr[i].height) {
        console.log("just passed");
        birdObj.isAlive=false;
    }
    if (birdObj.x+birdObj.width>this.obsArr[i].x2&&
        birdObj.x<this.obsArr[i].x2+this.obsArr[i].width&&
        birdObj.y+birdObj.height>this.obsArr[i].y2&&
        birdObj.y<this.obsArr[i].y2+this.obsArr[i].height) {
        console.log("just passed");
        birdObj.isAlive=false;
    }
  }
}


this.jump = function(){
  birdObj.dy=-5;
}
/*
game main loop starts here
 */
  setInterval(function(){
    if(birdObj.isAlive==true){
      c.clearRect(0,0,canvas.width,canvas.height);
      birdObj.update();
      if(that.obsArr.length>0){//if obs array is not empty
        for (var i = 0; i < that.obsArr.length; i++) {
          that.obsArr[i].update();
          that.checkCollision();
        }
      }
      if(that.obsInterval>250){// generate new Obs in --250-- time period
        obsObj= new Obs(c,canvas.width,canvas.height);
        that.obsArr.push(obsObj);
        that.obsInterval=0;
      }
      that.obsInterval++;
    }

  },10);
}
var gameObj = new Game();
