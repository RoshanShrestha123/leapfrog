/**
 * This is the class for the player car,
 * it consist function like initilaization of car, drawing car,
 * setting the postion of car and updating position
 * @param       {dom element} parentElement this is the parent
 * element where all the object are instanciate
 * @constructor
 */
function Player(parentElement){
this.x=0;
this.y= 50;
this.width = 63;
this.carMidPoint =this.width/2;

this.height = 135;
this.parentElement = parentElement;
this.element = null;
this.currentLane = 1;


 this.initCar = function(){
   var playerCar = document.createElement('div');
   this.parentElement.appendChild(playerCar);
   playerCar.style.width= this.width+ 'px';
   playerCar.style.height = this.height+ 'px';
   // playerCar.style.background = "yellow";
   playerCar.style.background = "url('images/orange-car.png')";
   playerCar.style.backgroundSize="100% 100%";
   this.element = playerCar;
   this.element.style.position = "absolute";

 }

 this.drawPlayerCar = function(){
   this.element.style.left =this.x-this.carMidPoint +"px";
   this.element.style.top = this.y+"px";
 }

 this.setPlayerCarPosition = function(x,y){

   this.x = x;
   this.y = y;
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

function ScoreBoard(parentElement){
  this.score = 0;
  this.parentElement = parentElement;

  this.initScore= function(){
    var score = document.createElement('div');
    this.parentElement.appendChild(score);
    score.style.width=200+ 'px';
    score.style.height = 30+ 'px';
    score.style.background = "white";
    // score.style.background = "url('images/orange-car.png')";
    score.style.backgroundSize="100% 100%";
    this.element = score;
    this.element.style.position = "absolute";
    this.element.style.left=30+"%";
    this.element.style.top=0;
    this.element.innerHTML="score: "+this.score;
    this.element.style.zIndex="5";
    this.element.style.textAlign="center";
    this.element.style.fontSize=30+"px";
  }

  this.drawScore= function(){
    this.element.innerHTML="score: "+this.score;
  }

  this.increaseScore = function(){
    this.score+=10;
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



 this.initEnemyCar = function(){
   this.currentLane = Math.floor(Math.random()*3);
   var enemyCar = document.createElement('div');
   this.parentElement.appendChild(enemyCar);
   enemyCar.style.width= this.width+ 'px';

   enemyCar.style.height = this.height+ 'px';
   enemyCar.style.background = "red";
   this.element = enemyCar;
   this.element.style.position = "absolute";
   enemyCar.style.background = "url('images/police-car.png')";


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
  this.GAME_HEIGHT = 600;
  this.GAME_WIDTH = 400;
  this.enemyInitCounter=0;
  this.destinationLane=0;
  this.enemyInitTime = Math.floor((Math.random()*40)+20);
  var playerCarObj = new Player(gameScreen);
  var scoreObj = new ScoreBoard(gameScreen);
  this.direction = 0;
  var enemyCarObj;
  this.gameScreen= gameScreen;
  this.roadMoveSpeed =5;
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
    scoreObj.initScore();
    playerCarObj.initCar();


    playerCarObj.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj.currentLane],this.PlayerCarYPosition);
    playerCarObj.drawPlayerCar();
    this.destinationLane=laneObj.carRunningPath[playerCarObj.currentLane];
    console.log("offset", this.destinationLane);

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
        console.log("collided");

      }
    }

  }


  //event listener for the key press
  window.addEventListener('keydown',function(event){
    if(event.keyCode == 37){
      if(playerCarObj.currentLane!=0){
        playerCarObj.currentLane-=1;
        that.destinationLane=laneObj.carRunningPath[playerCarObj.currentLane];
        that.direction=-8;
        console.log(that.destinationLane);
      //  var newPosition=laneObj.carRunningPath[playerCarObj.currentLane];

      //  playerCarObj.setPlayerCarPosition(newPosition,that.PlayerCarYPosition);
      //  playerCarObj.drawPlayerCar();

      }
    }
    if(event.keyCode == 39){
      if(playerCarObj.currentLane<2){
        playerCarObj.currentLane+=1;
        that.destinationLane=laneObj.carRunningPath[playerCarObj.currentLane];
        that.direction=8;
        console.log(that.destinationLane);
      //  playerCarObj.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj.currentLane],that.PlayerCarYPosition);
      //  playerCarObj.drawPlayerCar();

      }
    }
  });

  /**
   * GAME LOOP
   */
  setInterval(function(){
    scoreObj.drawScore();
    if(that.collided==false){

      that.gameScreen.style.backgroundPosition = 0+"px "+ that.roadMoveSpeed+"px";
      that.roadMoveSpeed+=7;

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
      console.log("currentLane", Math.ceil(playerCarObj.x));
      console.log("destinationLane",Math.ceil(that.destinationLane));
      // if(Math.ceil(that.destinationLane)!=Math.ceil(playerCarObj.x-playerCarObj.carMidPoint)){
      //   playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition);
      // }

      if(that.direction>0){
        if(playerCarObj.x<=that.destinationLane){
          playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition);
        }
        else{
          that.direction=0;
        }

      }
      else if(that.direction<0){
        if (playerCarObj.x>that.destinationLane) {
          playerCarObj.setPlayerCarPosition(playerCarObj.x+(that.direction),that.PlayerCarYPosition);
        }
          else{
            that.direction=0;
          }
      }


      playerCarObj.drawPlayerCar();
      that.enemyInitCounter++;
    }


  },30);
}

var gameScreen = document.getElementById('gameScreen');
var gameObj = new Game(gameScreen).init();
