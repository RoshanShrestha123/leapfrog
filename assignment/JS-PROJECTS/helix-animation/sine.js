function Circle(c,x,angle){
  var that = this;
  this.centerX = x;
  this.centerY = 100;
  this.radius = 10;
  this.angle =angle;
  this.draw = function(){
    c.beginPath();
    c.arc(this.centerX,this.centerY,this.radius, 0 , 2 * Math.PI);
    c.fill();
  }

  this.update = function(){
    this.centerY=100+ 50* Math.cos(this.angle*Math.PI/180);
    this.angle++;
    if(this.angle==360){
      this.angle=0;
    }
    this.draw();
  }


}
