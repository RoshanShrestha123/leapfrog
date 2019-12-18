function GameState(canvas){
  var that = this;
  this.canvas = canvas;
  this.canvas.height = 700;
  this.canvas.width = 1290;
  this.c= this.canvas.getContext('2d');
  this.startGame = function(){
  this.gameObj = new Game(this.canvas,this.c);// Main Game Object!!
  }
  this.startMenu = function(){
    this.menuObj = new Menu(this.canvas,this.c);

  }

  setInterval(function(){
    that.c.clearRect(this.x,this.y,this.width,this.height);
    that.menuObj.showMenu();

  },1);
}
var canvas = document.getElementById('canvas');
var gameStateObj = new GameState(canvas);
gameStateObj.startMenu();
