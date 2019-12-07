function Gun(c){
  this.angle=0;
  this.c = c;
  this.x=0;
  this.y=0;
  this.speed=1;
  this.width = 10;
  this.height=10;

  this.draw = function(){
    this.c.beginPath();
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();
  }
  this.update = function(x,y,angle){
    this.y -=this.speed * Math.cos(this.angle*180/Math.PI);
    this.x +=this.speed *Math.sin(this.angle*180/Math.PI);
    this.draw();
  }

}
