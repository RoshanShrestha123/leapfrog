function Room(c,x,y,width,height) {
  this.c = c;
  this.x=x;
  this.y=y;
  this.width =width;
  this.height=height;



  this.draw = function(){

    this.c.beginPath();
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();
  }
  this.update = function(x,y){

    this.x-=x;
    this.y-=y;
    this.draw();
  }


}
