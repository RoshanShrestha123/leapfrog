/**
 * This is the class for the player car,
 * it consist function like initilaization of car, drawing car,
 * setting the postion of car and updating position
 * @param       {dom element} parentElement this is the parent
 * element where all the object are instanciate
 * @constructor
 */
function Player(parentElement){
this.x=50;
this.y= 50;
this.width = 70;
this.carMidPoint =this.width/2;

this.height = 100;
this.parentElement = parentElement;
this.element = null;
this.currentLane = 1;

 this.initCar = function(){
   var playerCar = document.createElement('div');
   this.parentElement.appendChild(playerCar);
   playerCar.style.width= this.width+ 'px';
   playerCar.style.height = this.height+ 'px';
   playerCar.style.background = "yellow";
   this.element = playerCar;
   this.element.style.position = "absolute";

 }

 this.drawPlayerCar = function(){
   this.element.style.left = this.x-this.carMidPoint+"px";
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
/**
 * This class of Opponent Car comming through the opposite direction.
 * @param       {element} parentElement this is the parent element
 * where all the object are instanciate
 * @constructor
 */
function Enemy(parentElement){
  this.x=50;
  this.y= 50;
  this.width = 70;
  this.carMidPoint =this.width/2;
  this.height = 100;
  this.parentElement = parentElement;
  this.element = null;
  this.currentLane = Math.floor(Math.random()*3);

   this.initCar = function(){
     var enemyCar = document.createElement('div');
     this.parentElement.appendChild(enemyCar);
     enemyCar.style.width= this.width+ 'px';
     enemyCar.style.height = this.height+ 'px';
     enemyCar.style.background = "red";
     this.element = enemyCar;
     this.element.style.position = "absolute";

   }

   this.drawEnemyCar = function(){
     this.element.style.left = this.x-this.carMidPoint+"px";
     this.element.style.top = this.y+"px";
   }

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
  this.GAME_HEIGHT = 500;
  this.GAME_WIDTH = 400;

var playerCarObj = new Player(gameScreen);
var enemyCarObj = new Enemy(gameScreen);
var laneObj = new Lane(this.GAME_WIDTH);

  this.PlayerCarYPosition =(this.GAME_HEIGHT-(playerCarObj.height+10));



  this.createGameScreen = function(){
  //  console.log(laneObj);
    laneObj.createRunningPath();
    gameScreen.style.height= this.GAME_HEIGHT+"px";
    gameScreen.style.width= this.GAME_WIDTH+"px";
    gameScreen.style.background= "green";
    gameScreen.style.position="relative";
    playerCarObj.initCar();
    playerCarObj.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj.currentLane],this.PlayerCarYPosition);
    playerCarObj.drawPlayerCar();
    enemyCarObj.initCar();
    enemyCarObj.drawEnemyCar();


  }
  this.init = function(){
    this.createGameScreen();
  }
  window.addEventListener('keydown',function(event){
    if(event.keyCode == 37){
      if(playerCarObj.currentLane!=0){
        console.log("key pressed left ");
        playerCarObj.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj.currentLane-1],this.PlayerCarYPosition);
        playerCarObj.drawPlayerCar();
        playerCarObj.currentLane-=1;
      }

    }
    if(event.keyCode == 39){

      if(playerCarObj.currentLane<2){
      console.log("key pressed right");
        playerCarObj.setPlayerCarPosition(laneObj.carRunningPath[playerCarObj.currentLane+1],this.PlayerCarYPosition);
        playerCarObj.drawPlayerCar();
          playerCarObj.currentLane+=1;
      }
    }

  });
  //MAIN LOOP OF GAME
  setInterval(function(){
    enemyCarObj.setEnemyCarPosition(laneObj.carRunningPath[enemyCarObj.currentLane],this.enemyY);
    this.enemyY++;

enemyCarObj.drawEnemyCar();

  },1000);
}

var gameScreen = document.getElementById('gameScreen');
var gameObj = new Game(gameScreen).init();
