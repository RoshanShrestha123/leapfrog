function GameState(canvas){
  var that = this;
  this.canvas = canvas;
  this.canvas.height = 700;
  this.canvas.width = 1290;
  this.gameObj = null;
  this.gameStarted = false;
  this.menuStart = false;
  this.c= this.canvas.getContext('2d');


  this.startMenu = function(){
    this.menuObj = new Menu(this.canvas,this.c);
    this.menuStart = true;
    this.gameStarted = false;

  }
  document.addEventListener('keydown',function(event){
    if(event.keyCode==69 && that.gameStarted==false){  //press e
    console.log("game start");
    that.gameObj = new Game(that.canvas,that.c);
    that.gameStarted = true;
    that.menuStart = false;

    }
  });

 setInterval(function(){
    that.c.clearRect(this.x,this.y,this.width,this.height);
    if(that.gameStarted==true){
      that.gameObj.gameLoop();
      if(that.gameObj.playerObj.isDead == true){
        that.gameStarted=false;
      }
    }
    else{
      that.menuObj.showMenu();
    }



  },1);
}
var canvas = document.getElementById('canvas');
var gameStateObj = new GameState(canvas);
gameStateObj.startMenu();
