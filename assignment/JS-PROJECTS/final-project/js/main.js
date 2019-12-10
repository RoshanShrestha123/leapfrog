function Game(canvas){
  var that = this;
  this.canvas = canvas;
  this.c= this.canvas.getContext('2d');
  this.canvas.height = 700;
  this.canvas.width = 1290;
  this.playerObj = new Player(this.c,this.canvas.width,this.canvas.height);
  // this.playerObj.initRay();
  this.gunObj;
  this.bulletArr=[];
  this.isShooting=false;
  this.shootingAngle=0;
  this.obsArr =[];
  this.manageRoomObj = new ManageRoom(this.c);
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
        if(this.bulletArr[i].x>this.canvas.width || this.bulletArr[i].x<0 || this.bulletArr[i].y>this.canvas.height ||
            this.bulletArr[i].y<0){
              console.log("bullet is out");
              this.bulletArr.shift();
              console.log(this.bulletArr.length);
            }
      }
    }
  }

  this.initObjArr = function(){

  }




  this.controlPlayerMovement = function(){
    if(this.playerObj.moveup==true){
     this.playerObj.movementUp();
      for (var i = 0; i < this.manageRoomObj.roomArr.length; i++) {
        //console.log();
        this.manageRoomObj.roomArr[i].update(this.playerObj);
      }

    }
    if(this.playerObj.movedown==true){
      this.playerObj.movementDown();
      for (var i = 0; i < this.manageRoomObj.roomArr.length; i++) {
        //console.log();
        this.manageRoomObj.roomArr[i].update(this.playerObj)
      }
    }
    if(this.playerObj.moveleft==true){
      this.playerObj.movementLeft();
      //  this.obsObj.update(this.playerObj.moveX,this.playerObj.moveY);
    }
    if(this.playerObj.moveright==true){
      this.playerObj.movementRight();
      //  this.obsObj.update(this.playerObj.moveX,this.playerObj.moveY);
    }
  }

  setInterval(function(){
    that.c.clearRect(0,0,this.canvas.width,this.canvas.height);
    for (var i = 0; i < that.manageRoomObj.roomArr.length; i++) {
      that.manageRoomObj.roomArr[i].draw();
      that.manageRoomObj.roomArr[i].borderObj.checkBorderCollision(that.playerObj);
    }
    that.controlPlayerMovement();

    if(that.isShooting==true){
      that.gunObj.update(that.shootingAngle,that.playerX,that.playerY);
    }
    that.playerObj.draw();
   that.fireBullet();
  },1);


}
var canvas = document.getElementById('canvas');
var gameObj = new Game(canvas);
