function Enemy(c,x,y,player){
  this.c = c;
  this.player = player;
  this.width = 50;
  this.height = 50;
  this.x = x;
  this.y = y;
  this.rayArr = [];
  this.rayAngle =0;

  this.initEnemy = function(x,y){
    this.x = x;
    this.y =y ;
  }

  this.draw = function(){

    this.c.beginPath();
    this.c.fillStyle='rgba(100,255,255,0.3)';
    this.c.rect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    this.c.fill();
  }
  this.update = function(){
    this.x -=this.player.moveX;
    this.y -=this.player.moveY;
    //this.draw();
  }

  this.drawRays = function(){
    for (var i = 0; i < this.rayArr.length; i++) {
      this.rayArr[i].checkRayCollision(this.player);
     this.rayArr[i].updateAngle(this.x,this.y,);


    }
  }

  this.initRay = function(){
    for(var i=0; i<50;i++){
      this.rayAngle =i;
      this.rayObj = new Ray(this.c,this.rayAngle);
      this.rayArr.push(this.rayObj);
    }
  }
}
