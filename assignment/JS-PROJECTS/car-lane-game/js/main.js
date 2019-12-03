/**
 * This is the class for the player car,
 * it consist function like initilaization of car, drawing car,
 * setting the postion of car and updating position
 * @param       {dom element} parentElement this is the parent
 * element where all the object are instanciate
 * @constructor
 */
function Player(parentElement,lane){
this.x=0;
this.y= 50;
this.width = 63;
this.carMidPoint =this.width/2;
this.rotate =0;
this.height = 135;
this.parentElement = parentElement;
this.element = null;
this.currentLane = lane;
this.carImage =["url('images/black-car.png')","url('images/orange-car.png')","url('images/police-car.png')"];



 this.initCar = function(){
   var playerCar = document.createElement('div');
   this.parentElement.appendChild(playerCar);
   playerCar.style.width= this.width+ 'px';
   playerCar.style.height = this.height+ 'px';
   // playerCar.style.background = "yellow";
   playerCar.style.background = this.carImage[Math.floor(Math.random()*3)];
   playerCar.style.backgroundSize="100% 100%";
   this.element = playerCar;
   this.element.style.position = "absolute";

 }

 this.drawPlayerCar = function(){
   this.element.style.left =this.x-this.carMidPoint +"px";
   this.element.style.top = this.y+"px";
   this.element.style.transform="rotate("+this.rotate+"deg)";
 }

 this.setPlayerCarPosition = function(x,y,rotate){

   this.x = x;
   this.y = y;
   this.rotate = rotate;
 }



}
/**
 * This class helps to calculate the total width of the each lane,
 * so that car can be exactly on the middle of the lane no matter how many lane is added
 * or how big the road become.
 * @param       {[type]} screenWidth [description]
 * @constructor
 */
function Lane(screenWidth){
  this.TOTAL_LANE=3;
  this.carRunningPath =[];
  this.LANE_WIDTH= 0;
  this.laneMidPoint=0;
  this.temp1=0;
  this.temp2=0;

  this.createRunningPath = function(){

    this.LANE_WIDTH = screenWidth/this.TOTAL_LANE;
    this.laneMidPoint = this.LANE_WIDTH/2;
    for (var i = 1; i <= this.TOTAL_LANE ; i++) {
      this.temp2= i*this.laneMidPoint;
      this.carRunningPath.push(this.temp2+ this.temp1);
      this.temp1= this.temp2;

    }
  }




}

function ScoreBoard(parentElement,x,y,i){
  this.score = 0;
  this.parentElement = parentElement;

  this.initScore= function(){
    var score = document.createElement('div');
    this.parentElement.appendChild(score);
    score.style.width=200+ 'px';
    score.style.height = 50+ 'px';
    score.style.background = "white";
    // score.style.background = "url('images/orange-car.png')";
    score.style.backgroundSize="100% 100%";
    this.element = score;
    this.element.style.position = "absolute";
    this.element.style.left=x+"px";
    this.element.style.top=y+"px";
    this.element.innerHTML="score: "+this.score;
    this.element.style.zIndex="5";
    this.element.style.textAlign="center";
    this.element.style.fontSize=30+"px";
  }

  this.drawScore= function(){
    this.element.innerHTML="score "+i +": "+this.score;
  }

  this.increaseScore = function(){
    this.score+=10;
  }

}

function Button(parentElement){
  var that = this;
  this.canPlay = false;
  this.parentElement = parentElement;
  this.play= function(){
    var playBtn = document.createElement('div');
    this.parentElement.appendChild(playBtn);
    playBtn.style.width=200+ 'px';
    playBtn.style.height = 70+ 'px';
    playBtn.style.background = "white";
    playBtn.style.background = "url('images/play.png')";
    playBtn.style.backgroundSize="100% 100%";
    this.element = playBtn;
    this.element.style.position = "absolute";
    this.element.style.left=30+"%";
    this.element.style.top=50+"%";

    this.element.style.zIndex="5";
    this.element.style.textAlign="center";
    this.element.style.fontSize=30+"px";
    this.element.style.cursor ="pointer";
    this.element.addEventListener("click",this.playNow);
  }
  this.restart= function(){
    var restartBtn = document.createElement('div');
    this.parentElement.appendChild(restartBtn);
    restartBtn.style.width=200+ 'px';
    restartBtn.style.height = 50+ 'px';
    restartBtn.style.background = "white";
    // restartBtn.style.background = "url('images/orange-car.png')";
    restartBtn.style.backgroundSize="100% 100%";
    this.element = restartBtn;
    this.element.style.position = "absolute";
    this.element.style.left=30+"%";
    this.element.style.top=50+"%";
    this.element.innerHTML="restartBtn: ";
    this.element.style.zIndex="5";
    this.element.style.textAlign="center";
    this.element.style.fontSize=30+"px";
    this.element.style.cursor ="pointer";
    this.element.addEventListener("click",this.restartNow);
    this.element.style.display="block";
    console.log('restart');
  }

  this.playNow = function(){
    that.canPlay=true;
    that.element.style.display ='none';
    console.log("clicked",that.canPlay);

  }
  this.restartNow = function(){
    that.canPlay=true;
    that.element.style.display ='none';
    console.log("clicked",that.canPlay);
  }
}







/**
 * This class of Opponent Car comming through the opposite direction.
 * @param       {DOM element} parentElement this is the parent element
 * where all the object are instanciate
 */
function Enemy(parentElement){
  this.x=50;
  this.y= 50;
  this.width = 63;
  this.carMidPoint =this.width/2;
  this.height = 135;
  this.parentElement = parentElement;
  this.element = null;
  this.carImage =["url('images/black-car.png')","url('images/orange-car.png')","url('images/police-car.png')"];



 this.initEnemyCar = function(){
   this.currentLane = Math.floor(Math.random()*3);
   var enemyCar = document.createElement('div');
   this.parentElement.appendChild(enemyCar);
   this.element = enemyCar;
   this.element.style.width= this.width+ 'px';
   this.element.style.background = this.carImage[Math.floor(Math.random()*3)];
   this.element.style.height = this.height+ 'px';
   this.element.style.backgroundSize = "cover";
   this.element.style.backgroundRepeat="no-repeat";
   this.element.style.position = "absolute";
 }
 this.drawEnemyCar = function(){
   this.element.style.left = this.x-this.carMidPoint+"px";
   this.element.style.top = this.y+"px";
 }

 /**
  * [description]
  * @param  {integer} x  X position of the enemy car
  * @param  {integer} y Y Position of the enemy car

  */
 this.setEnemyCarPosition = function(x,y){
   this.x = x;
   this.y = y;
 }
}

/**
 * This is the main Game class which handle all the game loop and
 * game init fucntion of the game
 * @param       {dom element} gameScreen his is the parent element
 *  where all the object are instanciate
 */
function Game(gameScreen){
  var that = this;
  this.collided=false;
  this.enemyArr=[];
  this.GAME_HEIGHT = 700;
  this.GAME_WIDTH = 400;
  this.enemyInitCounter=0;
  this.destinationLane=0;
  this.destinationLane2=0;
  this.enemyInitTime = Math.floor((Math.random()*40)+20);
  this.rotation=0;
  this.rotation2=0;
  this.maxBullet=20;
  this.currentBullet=20;
  this.currentBullet2=20;
  this.refillCounter =0;
  var playerCarObj = new Player(gameScreen,2);
  var playerCarObj2 = new Player(gameScreen,0);
  var scoreObj = new ScoreBoard(gameScreen,200,50,1);
  var scoreObj2 = new ScoreBoard(gameScreen,0,50,2);
  var ammoObj = new Ammo(gameScreen,300,0);
  var ammoObj2 = new Ammo(gameScreen,0,0);
  var buttonObj = new Button(gameScreen);
  this.direction = 0;
  this.direction2 = 0;
  var enemyCarObj;
  var bulletObj;
  var bulletObj2;
  this.bulletArr=[];
  this.bulletArr2=[];
  this.gameScreen= gameScreen;
  this.roadMoveSpeed =0;
  this.roadSpeed=7;
  this.increaseSpeed = false;

  var laneObj = new Lane(this.GAME_WIDTH);
  this.PlayerCarYPosition =(this.GAME_HEIGHT-(playerCarObj.height+10));

  this.createGameScreen = function(){
  //  console.log(laneObj);
    laneObj.createRunningPath();
    this.gameScreen.style.height= this.GAME_HEIGHT+"px";
    this.gameScreen.style.width= this.GAME_WIDTH+"px";
    //this.gameScreen.style.background= "green";
    this.gameScreen.style.position="relative";
    this.gameScreen.style.background="url('images/road2.png')";
    this.gameScreen.style.backgroundSize ="cover";
    //this.gameScreen.style.backgroundRepeat ="no-repeat";
    ammoObj.drawAmmo(that.currentBullet);
    ammoObj2.drawAmmo(that.currentBullet2);
    scoreObj.initScore();
    scoreObj2.initScore();

    playerCarObj.initCar();
    playerCarObj.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj.currentLane],this.PlayerCarYPosition);
    playerCarObj.drawPlayerCar();
    this.destinationLane=laneObj.carRunningPath[playerCarObj.currentLane];

    playerCarObj2.initCar();
    playerCarObj2.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj2.currentLane],this.PlayerCarYPosition);
    playerCarObj2.drawPlayerCar();
    this.destinationLane2=laneObj.carRunningPath[playerCarObj2.currentLane];

    buttonObj.play();

  }
  this.init = function(){
    this.createGameScreen();

  }

  this.initEnemyCarArr = function(){
    enemyCarObj = new Enemy(gameScreen);
    enemyCarObj.initEnemyCar();
    enemyCarObj.setEnemyCarPosition(laneObj.carRunningPath[2],-enemyCarObj.height);
    this.enemyArr.push(enemyCarObj);

  }

  this.updateEnemyCar = function(){
    for (var i = 0; i < this.enemyArr.length; i++) {
      this.enemyArr[i].setEnemyCarPosition(laneObj.carRunningPath[this.enemyArr[i].currentLane],this.enemyArr[i].y);
      // this.enemyArr[i].setEnemyCarPosition(laneObj.carRunningPath[this.enemyArr[i].currentLane],this.enemyArr[i].y);
      this.enemyArr[i].y+=5;
      this.enemyArr[i].drawEnemyCar();
      if(this.enemyArr[i].y>this.GAME_HEIGHT){
        scoreObj.increaseScore();
        scoreObj2.increaseScore();
        //that.scoreObj.displayScore();
        this.enemyArr.shift();
      }
    }
  }

  this.checkCollision = function(){
    for (var i = 0; i < this.enemyArr.length; i++) {
      if(playerCarObj.x+playerCarObj.width>= this.enemyArr[i].x &&
        playerCarObj.y+playerCarObj.height>=this.enemyArr[i].y &&
      playerCarObj.x<= this.enemyArr[i].x+ this.enemyArr[i].width &&
      playerCarObj.y<=this.enemyArr[i].y+this.enemyArr[i].height){
        this.collided=true;
        this.gameOverscreen();
        console.log("collided");

      }
    }

/*
for player 2
 */
    for (var i = 0; i < this.enemyArr.length; i++) {
      if(playerCarObj2.x+playerCarObj2.width>= this.enemyArr[i].x &&
        playerCarObj2.y+playerCarObj2.height>=this.enemyArr[i].y &&
      playerCarObj2.x<= this.enemyArr[i].x+ this.enemyArr[i].width &&
      playerCarObj2.y<=this.enemyArr[i].y+this.enemyArr[i].height){
        this.collided=true;
        this.gameOverscreen();
        console.log("collided");

      }
    }

  }

  this.checkCollisionWithBullet = function(bulletCheck,i){

      for (var j = 0; j < this.enemyArr.length; j++) {
        if(this.bulletArr[i].x+this.bulletArr[i].width>= this.enemyArr[j].x &&
          this.bulletArr[i].y+this.bulletArr[i].height>=this.enemyArr[j].y &&
        this.bulletArr[i].x<= this.enemyArr[j].x+ this.enemyArr[j].width &&
        this.bulletArr[i].y<=this.enemyArr[j].y+this.enemyArr[j].height){

          this.enemyArr[j].element.style.display="none";
          this.bulletArr[i].element.style.display="none";
          this.enemyArr.splice(j,1);
          this.bulletArr.splice(i,1);
          console.log("enemy array",this.enemyArr);
          console.log("enemy dead");
          scoreObj.increaseScore();
        }
      }
  }

  this.checkCollisionWithBullet2 = function(bulletCheck,i){

      for (var j = 0; j < this.enemyArr.length; j++) {
        if(this.bulletArr2[i].x+this.bulletArr2[i].width>= this.enemyArr[j].x &&
          this.bulletArr2[i].y+this.bulletArr2[i].height>=this.enemyArr[j].y &&
        this.bulletArr2[i].x<= this.enemyArr[j].x+ this.enemyArr[j].width &&
        this.bulletArr2[i].y<=this.enemyArr[j].y+this.enemyArr[j].height){

          this.enemyArr[j].element.style.display="none";
          this.bulletArr2[i].element.style.display="none";
          this.enemyArr.splice(j,1);
          this.bulletArr2.splice(i,1);
          console.log("enemy array",this.enemyArr);
          console.log("enemy dead");
          scoreObj2.increaseScore();
        }
      }
  }


  this.gameOverscreen =  function(){

    var gameOver = document.createElement('div');
    this.gameScreen.appendChild(gameOver);
    this.element = gameOver;
    this.element.style.Position= "absolute";
    this.element.style.textAlign = "center";
    this.element.innerHTML = "Game Over!!";
    this.element.style.background = "rgb(0,0,0)";
    this.element.style.color = "#fff";
    this.element.style.fontSize="40px";
    this.element.style.lineHeight="600px";
    this.element.style.width = this.gameScreen.offsetWidth +"px";
    this.element.style.zIndex = "10";
    this.element.style.height= this.gameScreen.offsetHeight+"px";
    this.element.classList.add('gameOverScreen');
    var resetButton = document.createElement('Button');
    resetButton.innerHTML = "Restart";
    resetButton.style.position="absolute";
    resetButton.style.background ="white";
    resetButton.style.border = "none";
    resetButton.style.top="60%";
    resetButton.style.cursor="pointer";
    resetButton.style.left="40%";
    resetButton.style.padding="20px";
    resetButton.addEventListener("click", this.restartGame);
    this.element.appendChild(resetButton);
    }

    this.restartGame = function(){

      // to do
    }

  //event listener for the key press
  window.addEventListener('keydown',function(event){
    //move left for player one
    if(event.keyCode == 37){
      if(playerCarObj.currentLane!=0){
        playerCarObj.currentLane-=1;
        that.destinationLane=laneObj.carRunningPath[playerCarObj.currentLane];
        that.direction=-15;
        that.rotation=10;
      }
    }
    //move right for player one
    if(event.keyCode == 39){
      if(playerCarObj.currentLane<2){
        playerCarObj.currentLane+=1;
        that.destinationLane=laneObj.carRunningPath[playerCarObj.currentLane];
        that.direction=15;
        that.rotation=10;
      }
    }



    if(event.keyCode == 38){
      if (that.currentBullet>0) {
        console.log("shoot bullet");
        bulletObj = new Bullet(gameScreen);
        bulletObj.initBullet(playerCarObj.x,playerCarObj.y);
        bulletObj.drawBullet();
        that.bulletArr.push(bulletObj);
        that.currentBullet--;
       ammoObj.drawAmmo(that.currentBullet);
      }

    }



    //move left for player 2
    if(event.keyCode == 65){
      console.log("player 2");
      if(playerCarObj2.currentLane!=0){
        playerCarObj2.currentLane-=1;
        that.destinationLane2=laneObj.carRunningPath[playerCarObj2.currentLane];
        that.direction2=-15;
        that.rotation2=10;
      }
    }
    //move right for player 2
    if(event.keyCode == 68){
      if(playerCarObj2.currentLane<2){
        playerCarObj2.currentLane+=1;
        that.destinationLane2=laneObj.carRunningPath[playerCarObj2.currentLane];
        that.direction2=15;
        that.rotation2=10;
      }
    }
    if(event.keyCode == 87){
      if (that.currentBullet2>0) {
        console.log("shoot bullet player 2");
        bulletObj2 = new Bullet(gameScreen);
        bulletObj2.initBullet(playerCarObj2.x,playerCarObj2.y);
        bulletObj2.drawBullet();
        that.bulletArr2.push(bulletObj2);
        that.currentBullet2--;
        ammoObj2.drawAmmo(that.currentBullet2);
      }

    }

  });

  /**
   * GAME LOOP
   */
  setInterval(function(){
    if(buttonObj.canPlay==true){
      scoreObj.drawScore();
      scoreObj2.drawScore();
      // if(that.refillCounter>(Math.floor(Math.random()*100)+50)){
      //   ammoObj.refill(gameScreen,laneObj.carRunningPath[Math.floor(Math.random()*3)],10);
      // }
      that.refillCounter+=10;
      console.log(that.refillCounter);
      if(that.collided==false){

        that.gameScreen.style.backgroundPosition = 0+"px "+ that.roadMoveSpeed+"px";
        that.roadMoveSpeed+=that.roadSpeed;
        /*
          enemy spaning and animation here
         */
        if(that.enemyInitCounter==that.enemyInitTime){
          that.initEnemyCarArr();
          that.enemyInitTime= Math.floor((Math.random()*40)+40);
          that.enemyInitCounter=0;
        }
        if(that.enemyArr.length>0){
          that.checkCollision();
          that.updateEnemyCar();
        }

        if(that.direction>0){
          if(playerCarObj.x<=that.destinationLane){
            playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition,that.rotation);
          }
          else{
            that.direction=0;
            that.rotation=0;
              playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition,that.rotation);
          }
        }
        else if(that.direction<0){
          if (playerCarObj.x>that.destinationLane) {
            playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition,-that.rotation);
          }
            else{
              that.direction=0;
              that.rotation=0;
                playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition,that.rotation);
            }
        }
        //player 2
        if(that.direction2>0){
          console.log("this is the right");
          if(playerCarObj2.x<=that.destinationLane2){
            playerCarObj2.setPlayerCarPosition(playerCarObj2.x+(that.direction2),that.PlayerCarYPosition,that.rotation2);
          }
          else{
            that.direction2=0;
            that.rotation2=0;
              playerCarObj2.setPlayerCarPosition(playerCarObj2.x+(that.direction2),that.PlayerCarYPosition,that.rotation2);
          }
        }
        else if(that.direction2<0){
          console.log("this is the left");
          if (playerCarObj2.x>that.destinationLane2) {
            playerCarObj2.setPlayerCarPosition(playerCarObj2.x+(that.direction2),that.PlayerCarYPosition,-that.rotation2);
          }
            else{
              that.direction2=0;
              that.rotation2=0;
                playerCarObj2.setPlayerCarPosition(playerCarObj2.x+(that.direction2),that.PlayerCarYPosition,that.rotation2);
            }
        }
        for (var i = 0; i < that.bulletArr.length; i++) {
          //that.bulletArr[i].y=10;
          that.bulletArr[i].updateBulletPos();
          that.bulletArr[i].drawBullet();
          that.checkCollisionWithBullet(that.bulletArr[i],i);
        }
        for (var i = 0; i < that.bulletArr2.length; i++) {
          //that.bulletArr2[i].y=10;
          that.bulletArr2[i].updateBulletPos();
          that.bulletArr2[i].drawBullet();
          that.checkCollisionWithBullet2(that.bulletArr2[i],i);
        }
        playerCarObj.drawPlayerCar();
        playerCarObj2.drawPlayerCar();

        that.enemyInitCounter++;
      }
      else{
        buttonObj.canPlay=false;
      }
    }
    else{
      // buttonObj.restart();
    }



  },30);
}

var gameScreen = document.getElementById('gameScreen');
var gameObj = new Game(gameScreen).init();

var gameScreen2 = document.getElementById('gameScreen2');
var gameObj2 = new Game(gameScreen2).init();
