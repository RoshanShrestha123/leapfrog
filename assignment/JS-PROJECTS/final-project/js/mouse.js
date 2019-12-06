function Mouse(c,x,y){
  this.c = c;
  this.x = x;
  this.y = y;
  this.width=50;
  this.height=50;
  this.img = document.getElementById('crossair');

  this.draw = function(x,y){
    this.c.drawImage(this.img,x-this.width/2,y-this.height/2,this.width,this.height);
  }
}
