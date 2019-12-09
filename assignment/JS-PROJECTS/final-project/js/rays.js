function Ray(c,angle){
  this.c = c;
  this.startPosition = {
    x :100,
    y :100
  };
  this.speed =100;
  this.angle = angle;
  this.radian = this.angle*Math.PI/180;
  this.xUnit=Math.cos(this.radian)*this.speed;
  this.yUnit=Math.sin(this.radian)*this.speed;
  this.lengthOfRay =0;
  this.x=0;
  this.y=0;
  this.x+=this.xUnit;
  this.y+=this.yUnit;

  this.draw = function(){
    this.c.beginPath();
    this.c.strokeStyle="white";
    this.c.moveTo(this.startPosition.x,this.startPosition.y);
    this.c.lineTo(this.x,this.y);
    this.c.stroke();
  }

  this.updateAngle = function(playerX,playerY,angle){
    this.startPosition.x = playerX;
    this.startPosition.y = playerY;
    this.angle = angle;
    this.radian = this.angle*Math.PI/180;
    this.xUnit=Math.cos(this.radian)*this.speed;
    this.yUnit=Math.sin(this.radian)*this.speed;
    this.x+=this.xUnit;
    this.y+=this.yUnit;

    if(this.x > 500 || this.x <0){
  //  console.log("ray is out of box");
    }
    else{

    }
    if(this.y>500 || this.y <0){
    //  console.log("ray is out of box");
    }
    else{

    }
    this.draw();
  }

//experiment
  this.checkRayCollision= function(x1,y1,x2,y2,x3,y3,x4,y4){
    var deno = ((x1-x2)*(y3-y4))-((y1-y2)*(x3-x4));
    var t = (((x1-x3)*(y3-y4))-((y1-y3)*(x3-x4)))/deno;
    var u = -((((x1-x2)*(y1-y3))-((y1-y2)*(x1-x3)))/deno);
    console.log(t,u);

    if(t>0 && t<1 && u>0){
     console.log("colliding");
      this.x = x1+(t*(x2-x1));
      this.y = y1+(t*(y2-y1));
    }
  }

}
