function GameState(canvas){
  var that = this;
  this.canvas = canvas;
  this.canvas.height = 700;
  this.canvas.width = 1290;
  this.gameObj = null;
  this.gameStarted = false;
  this.menuStart = false;
  this.endScreenStart = false;
  this.c= this.canvas.getContext('2d');
  this.bgMusic = new Audio('./music/bgMusic.ogg');


  this.startMenu = function(){
    this.menuObj = new Menu(this.canvas,this.c);
    this.menuStart = true;
    this.gameStarted = false;
    this.endScreenStart=false;
  }

  this.startEndScreen = function(){
    this.endScreenObj = new EndScreen(this.canvas,this.c);
    this.endScreenStart=true;
    this.gameStarted=false;
    this.menuStart=false;
  }

  document.addEventListener('keydown',function(event){
    if(event.keyCode==69 && that.gameStarted==false && that.endScreenStart==false && that.menuStart==true){  //press e
    that.startGame();

    }
  });
  this.startGame = function(){
    console.log("game start");
    that.gameObj = new Game(that.canvas,that.c);
    that.gameStarted = true;
    that.menuStart = false;
  }

setInterval(function(){
  that.c.clearRect(this.x,this.y,this.width,this.height);
  //start Game
  if(that.gameStarted==true){
    that.gameObj.gameLoop();
    if(that.gameObj.playerObj.isDead == true){
      that.endScreenStart=true;
    }
    if(that.gameObj.gameOver==true){
      that.gameStarted=false;
      that.endScreenStart=true;
      that.startEndScreen();
    }
    //console.log("inside loop");
  }
  //start end screen
  if(that.endScreenStart==true){
    that.endScreenObj.showEndScreen(that.gameObj.scoreObj.score);
    that.gameStarted=false;
    if(that.endScreenObj.exitEndScreen==true){
      that.gameStarted=true;
      that.endScreenStart=false;
      that.gameObj.playerObj.isDead =false;
      that.gameObj.gameOver=false;
      that.gameObj.resetGame();
      that.startGame();

    }
  }
  //start menu
  if(that.menuStart==true){
    that.menuObj.showMenu();
  }

},1);








}
var canvas = document.getElementById('canvas');
var gameStateObj = new GameState(canvas);
gameStateObj.startMenu();
