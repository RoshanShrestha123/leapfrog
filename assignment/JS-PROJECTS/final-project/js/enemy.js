function Enemy(c,x,y){
  this.c = c;
  this.x=x;
  this.y= y;
  this.width = 100;
  this.height = 100;
  this.draw = function(){
    this.c.beginPath();
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();
  }

  this.updatePosition = function(){
    
  }
}
