function Bird(c,gameWidth,gameHeight){
  this.x=0;
  this.y=1;
  this.dy=1;
  this.c = c;
  this.width=30;
  this.height=30;
  this.gravity=0.2;
  this.isAlive = true;
  this.gameWidth=gameWidth;
  this.gameHeight = gameHeight;

  this.draw = function(){
    c.beginPath();
    c.rect((this.x)+this.gameWidth/2,this.y,this.width,this.height);
    c.fill();
  }
  this.update = function(){
    this.checkBorderCollision();
    this.dy+=this.gravity;
    this.y+=this.dy;
    this.draw();

  }
  this.checkBorderCollision = function(){
    if(this.x<0|| this.x+this.width>this.gameWidth || this.y<0 || this.y+this.height>this.gameHeight){
      console.log("collided");
      this.isAlive=false;
    }
  }
}
