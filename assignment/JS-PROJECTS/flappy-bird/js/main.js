/**
 * This is the main class that control all the object in game,
 * score, collison, highscore, event listener all are in this class
 * @method      Game
 */

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
  var uiObj = new UiControl(c,canvas.width,canvas.height);
  this.obsInterval = 0;
  this.obsArr=[];
  this.startGame=false;
  this.restartGame=false;
  this.score = 0;
  this.highScore=localStorage.getItem("highScore");
  this.rotate =10;


window.addEventListener('keyup',function(event){
  if (event.keyCode==32) {
    that.jump();
    this.startGame=true;


  }
});
window.addEventListener('click',function(){
  if (this.restartGame==true) {
    that.score=0;
    birdObj.isAlive=true;
    birdObj.y=200;
    birdObj.dy=0;
    that.obsArr=[];
    this.restartGame=false;
    console.log(that.obsArr);
  }
});

/**
 * draw the base of the game(Ground) with scroll effect
 * @method drawBase
 */
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


this.drawScoreText = function(){
  c.beginPath();
  c.font = "50px Teko";
  c.fillStyle="white"
  c.fillText(this.score,190,100);
}
this.drawHighScoreText = function(){
  c.beginPath();
  c.font = "50px Teko";
  c.fillStyle="white"
  c.fillText("High Score: "+this.highScore,100,140);

}

/**
 * check collision with each piller
 * @method checkCollision
 */

this.checkCollision = function(){
  for (var i = 0; i < this.obsArr.length; i++) {
    if (birdObj.x+birdObj.width>this.obsArr[i].x1&&
        birdObj.x<this.obsArr[i].x1+this.obsArr[i].width&&
        birdObj.y+birdObj.height>this.obsArr[i].y1&&
        birdObj.y<this.obsArr[i].y1+this.obsArr[i].height) {
        birdObj.isAlive=false;
    }
    if (birdObj.x+birdObj.width>this.obsArr[i].x2&&
        birdObj.x<this.obsArr[i].x2+this.obsArr[i].width&&
        birdObj.y+birdObj.height>this.obsArr[i].y2&&
        birdObj.y<this.obsArr[i].y2+this.obsArr[i].height) {
        birdObj.isAlive=false;
    }

  }
}

/**
 * Increase the score if bird pass the piller
 * @method increaseScore
 */

this.increaseScore = function(){
  //console.log("test");
  for (var i = 0; i < this.obsArr.length; i++) {
    if (birdObj.x+birdObj.width==this.obsArr[i].x1+this.obsArr[i].width) {
      this.score++;
    }


  }
}

/**
 * Add upforce to the  bird
 * @method  jump
 * @return {upforce}
 */

this.jump = function(){
  birdObj.dy=-3;

}


/*
game main loop starts here
 */
  setInterval(function(){
  //  console.log(this.obsArr);

    if (this.startGame==true) {
      if(birdObj.isAlive==true){
        c.clearRect(0,0,canvas.width,canvas.height);
        that.drawBackground();
        birdObj.update();
        if(that.obsArr.length>0){//if obs array is not empty
          that.increaseScore();
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
        that.drawScoreText();
      }
      else{
        if(that.highScore=='null'){

          that.highScore=0;
        }
        if(that.highScore<that.score){
          that.highScore=that.score;
          console.log(that.highScore);
        }
      //  that.highScore= that.score;
        localStorage.setItem("highScore",that.highScore);
        uiObj.drawGameOver();
        that.drawHighScoreText();
        uiObj.clickToStart();
        this.restartGame=true;
      }
    }
    else{
      c.clearRect(0,0,canvas.width,canvas.height);
      that.drawBackground();
      birdObj.draw();
      that.drawBase();
      uiObj.drawWelcomeMesg();
    }


  },10);
}
var gameObj = new Game();
