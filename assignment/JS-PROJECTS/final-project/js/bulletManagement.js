function Gun(c,playerX,playerY,mouseX,mouseY,manageRoom){
//  console.log(target);

  this.angle=0;
  this.c = c;
  this.mouseX=mouseX;
  this.mouseY=mouseY;
  this.x=playerX;
  this.y=playerY;
  //this.angle = Math.floor(angleToShoot*180/Math.PI);
  this.speed=10;
  this.width = 3;
  this.height=50;
  this.angle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
  this.yUnit =this.speed * Math.sin(this.angle);
  this.xUnit =this.speed *Math.cos(this.angle);

  this.draw = function(){
    this.c.save();
    this.c.beginPath();
    this.c.fillStyle="#c4b804";
    this.c.translate(this.x,this.y);
    this.c.rotate(-Math.PI/2);
    this.c.rotate(this.angle);
    this.c.translate(-this.x,-this.y);
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();
    this.c.restore();
  }
  this.update = function(){
    this.y +=this.yUnit;
    this.x +=this.xUnit;
    this.draw();
  }
  this.checkBulletCollision = function(target){
      this.target = target;
    if(this.x+this.width>this.target.x && this.x < this.target.x + this.target.width&&
        this.y+this.height > this.target.y && this.y<this.target.y+this.target.height){
        //  console.log("collided");
          return true;
        }
  }

}
