function Gun(c,playerX,playerY,mouseX,mouseY){
  this.angle=0;
  this.c = c;
  this.mouseX=mouseX;
  this.mouseY=mouseY;
  this.x=playerX;
  this.y=playerY;
  //this.angle = Math.floor(angleToShoot*180/Math.PI);
  this.speed=1;
  this.width = 10;
  this.height=10;

  this.draw = function(){
    this.c.beginPath();
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();
  }
  this.update = function(){
  //  console.log("angle for bullet",this.angle);
    this.angle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
    this.y +=this.speed * Math.sin(this.angle);
    this.x +=this.speed *Math.cos(this.angle);
    this.draw();
  }

}
