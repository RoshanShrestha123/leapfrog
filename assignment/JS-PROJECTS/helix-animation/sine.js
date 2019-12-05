function Circle(c,x,y,angle,size){
  var that = this;
  this.centerX = x;
  this.centerY = y;
  this.temp=this.centerY;
  this.angle =angle;
  this.radius = 0;
  this.counter =0;
  this.y=y;
  this.draw = function(){
    c.beginPath();
    var my_gradient = c.createLinearGradient(300, 0, 300, 300);
    my_gradient.addColorStop(0.3 , "#fcac76");
    my_gradient.addColorStop(0.5 ,"#f8948d");
    my_gradient.addColorStop(1, "#e580a2");
    c.fillStyle = my_gradient;
    c.arc(this.centerX,this.centerY,this.radius, 0 , 2 * Math.PI);
    c.fill();
  }

  this.update = function(){
    this.centerY=y+ 40* Math.cos(this.angle*Math.PI/180);
    this.angle++;
    if(Math.cos(this.angle*Math.PI/180)<=0){

      this.radius+=0.1;
      if(this.radius>10){
        this.radius=10;
      }
    }
    else{
      this.radius-=0.1;
      if(this.radius<1){
        this.radius=1;
      }
    }


    if(this.angle==360){
      this.angle=0;


    }

    this.draw();

  }


}
