function Gun(c,playerX,playerY,mouseX,mouseY,manageRoom){

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
  //  console.log("angle for bullet",this.angle);
  //  this.angle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
    this.y +=this.yUnit;
    this.x +=this.xUnit;
    this.draw();
  }

}
