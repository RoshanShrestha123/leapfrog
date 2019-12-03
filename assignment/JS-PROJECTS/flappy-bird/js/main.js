function Game(){
  var that = this;
  var canvas = document.getElementById('canvas');
  canvas.height=615;
  canvas.width=388;
  this.x=0;
  this.xNext=canvas.width;
  this.y=0;
  var c = canvas.getContext('2d');
  var birdObj = new Bird(c,canvas.width,canvas.height);
  var obsObj ;
  this.obsInterval = 0;
  this.obsArr=[];
  this.startGame=false;
  this.restartGame=false;





window.addEventListener('keydown',function(event){
  if (event.keyCode==32) {
    that.jump();
  }
});

this.drawBase = function(){
  var baseImg = document.getElementById('base');
  var nextBase = document.getElementById('base');
  c.beginPath();
  c.drawImage(baseImg,this.x,canvas.height-100,canvas.width,100);

  c.beginPath();
  c.drawImage(nextBase,this.xNext,canvas.height-100,canvas.width,100);
  this.x--;
   this.xNext--;
  if(this.x+canvas.width<=0){
    this.x=canvas.width;
    console.log("paxadi ja");
  }
  if(this.xNext+canvas.width<=0){
    this.xNext=canvas.width;

  }
}

this.drawBackground = function(){
  var bgImg = document.getElementById('bgImage');
  c.beginPath();
  c.drawImage(bgImg,0,0,canvas.width,canvas.height);


  //c.fill();
}

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
  birdObj.dy=-3;

}
/*
game main loop starts here
 */
  setInterval(function(){


    if(birdObj.isAlive==true){
      c.clearRect(0,0,canvas.width,canvas.height);
      that.drawBackground();

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
      that.drawBase();
    }
    else{
        that.checkCollision();
    }
  },10);
}
var gameObj = new Game();
