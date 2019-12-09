function Gun(c,playerX,playerY,mouseX,mouseY){
  this.angle=0;
  this.c = c;
  this.mouseX=mouseX;
  this.mouseY=mouseY;
  this.x=playerX;
  this.y=playerY;
  //this.angle = Math.floor(angleToShoot*180/Math.PI);
  this.speed=5;
  this.width = 5;
  this.height=5;
  this.angle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
  this.yUnit =this.speed * Math.sin(this.angle);
  this.xUnit =this.speed *Math.cos(this.angle);

  this.draw = function(){
    this.c.beginPath();
    this.c.fillStyle="red";
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();
  }
  this.update = function(){
  //  console.log("angle for bullet",this.angle);
  //  this.angle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
    this.y +=this.yUnit;
    this.x +=this.xUnit;
    this.draw();
  }

}
