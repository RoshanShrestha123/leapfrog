function Game(canvas){
  var that = this;
  this.canvas = canvas;
  this.c= this.canvas.getContext('2d');
  this.canvas.height = 500;
  this.canvas.width = 500;
  this.playerObj = new Player(this.c,this.canvas.width,this.canvas.height);
  this.gunObj = new Gun(this.c);
  this.isShooting=false;
  this.playerX;
  this.playerY;
  this.shootingAngle=0;
  window.addEventListener('click',function(){
    that.isShooting=true;
    that.shootingAngle=that.playerObj.angle;
    that.playerX = that.playerObj.x;
    that.playerY= that.playerObj.y;
  });

  setInterval(function(){
    that.c.clearRect(0,0,this.canvas.width,this.canvas.height);

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

    if(that.isShooting==true){
      that.gunObj.update(that.shootingAngle,that.playerX,that.playerY);
    }
    that.playerObj.drawLine();
    that.playerObj.draw();
   that.playerObj.drawLineFromOrigin();
   that.playerObj.drawText();

  },1);


}
var canvas = document.getElementById('canvas');
var gameObj = new Game(canvas);
