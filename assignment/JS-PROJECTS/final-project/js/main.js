function Game(canvas){
  var that = this;
  this.canvas = canvas;
  this.c= this.canvas.getContext('2d');
  this.canvas.height = 500;
  this.canvas.width = 500;
  this.playerObj = new Player(this.c,this.canvas.width,this.canvas.height);
  this.gunObj;
  this.bulletArr=[];
  this.isShooting=false;
  this.shootingAngle=0;
  window.addEventListener('click',function(){
    that.isShooting=true;
    that.playerX = that.playerObj.x;
    that.playerY= that.playerObj.y;
    that.mouseX = that.playerObj.mouseX;
    that.mouseY = that.playerObj.mouseY;
    that.gunObj = new Gun(that.c,that.playerX,that.playerY,that.mouseX,that.mouseY);
    that.bulletArr.push(that.gunObj);
  //  console.log("shooting angle", that.shootingAngle);
  });

  this.fireBullet = function(){
    if(this.bulletArr.length>0){
      for (var i = 0; i < this.bulletArr.length; i++) {
        this.bulletArr[i].update();
      }
    }
  }

  this.controlPlayerMovement = function(){
    if(this.playerObj.moveup==true){
      this.playerObj.movementUp();
    }
    if(this.playerObj.movedown==true){
      this.playerObj.movementDown();
    }
    if(this.playerObj.moveleft==true){
      this.playerObj.movementLeft();
    }
    if(this.playerObj.moveright==true){
      this.playerObj.movementRight();
    }
  }

  setInterval(function(){
    that.c.clearRect(0,0,this.canvas.width,this.canvas.height);

    //console.log("frame");
    that.controlPlayerMovement();

    if(that.isShooting==true){
      that.gunObj.update(that.shootingAngle,that.playerX,that.playerY);
    }
    that.playerObj.drawLine();
    that.playerObj.draw();
  // that.playerObj.drawLineFromOrigin();
   that.playerObj.drawText();
   that.fireBullet();
  },1);


}
var canvas = document.getElementById('canvas');
var gameObj = new Game(canvas);
