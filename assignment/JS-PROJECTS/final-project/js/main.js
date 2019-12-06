function Game(canvas){
  var that = this;
  this.canvas = canvas;
  this.c= this.canvas.getContext('2d');
  this.canvas.height = 500;
  this.canvas.width = 500;
  this.playerObj = new Player(this.c,this.canvas.width,this.canvas.height);

  //this.playerObj.draw();



  setInterval(function(){
    that.c.clearRect(0,0,this.canvas.width,this.canvas.height);
    that.playerObj.drawLine();
    that.playerObj.draw();
  //  that.playerObj.drawLineFromOrigin();
    that.playerObj.drawText();
    //console.log("frame");
    if(that.playerObj.moveup==true){
      that.playerObj.movementUp();
    }
    if(that.playerObj.movedown==true){
      that.playerObj.movementDown();
    }
    if(that.playerObj.moveleft==true){
      that.playerObj.movementLeft();
    }
    if(that.playerObj.moveright==true){
      that.playerObj.movementRight();
    }

  },10);


}
var canvas = document.getElementById('canvas');
var gameObj = new Game(canvas);
