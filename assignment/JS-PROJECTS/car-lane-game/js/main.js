//PLAYER CAR class
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
   playerCar.style.background = "red";
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
//ENEMY CAR CLASS
function Enemy(){

}



function Game(gameScreen){
  this.GAME_HEIGHT = 500;
  this.GAME_WIDTH = 400;

var playerCarObj = new Player(gameScreen);
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

  },1000);
}

var gameScreen = document.getElementById('gameScreen');
var gameObj = new Game(gameScreen).init();
