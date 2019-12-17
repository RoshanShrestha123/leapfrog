function Ray(c,angle,player){
  this.c = c;
  this.player = player;
  this.startPosition = {
    x :100,
    y :100
  };
  this.speed =5;
  this.angle = angle;
  this.radian = this.angle*Math.PI/180;
  this.xUnit=Math.cos(this.radian)*this.speed;
  this.yUnit=Math.sin(this.radian)*this.speed;
  this.lengthOfRay =0;
  this.x=0;
  this.y=0;
  this.x+=this.xUnit;
  this.y+=this.yUnit;
  this.sawPlayer = false;


  //-----------------------------------------function-to render the rays-----------------------------------------------------//

  this.draw = function(){
    this.c.beginPath();
    this.c.strokeStyle= 'rgba(189, 189, 189,0.5)';
    this.c.moveTo(this.startPosition.x,this.startPosition.y);
    this.c.lineTo(this.x,this.y);
    this.c.stroke();
  }
  //-----------------------------------------function to update the angle of rays------------------------------------------------------//

  this.updateAngle = function(playerX,playerY,angle){
    this.startPosition.x = playerX;
    this.startPosition.y = playerY;
    this.radian = angle*(Math.PI/180);
    this.xUnit=Math.cos(this.radian)*this.speed;
    this.yUnit=Math.sin(this.radian)*this.speed;
    this.x+=this.xUnit;
    this.y+=this.yUnit;

  }

  //-----------------------------------------function-to check ray collision to objects-----------------------------------------------------//


//which target??
  this.checkRayCollision= function(object,target){
    var deno = ((this.startPosition.x-this.x)*(object.y3-object.y4))-((this.startPosition.y-this.y)*(object.x3-object.x4));
    var t = ((this.startPosition.x-object.x3)*(object.y3-object.y4)-((this.startPosition.y-object.y3)*(object.x3-object.x4)))/deno;
    var u = -((((this.startPosition.x-this.x)*(this.startPosition.y-object.y3))-((this.startPosition.y-this.y)*(this.startPosition.x-object.x3)))/deno);
    if(t>=0 && t<=1 && u>=0 && u<=1){
      this.x = this.startPosition.x+(t*(this.x-this.startPosition.x));
      this.y = this.startPosition.y+(t*(this.y-this.startPosition.y));
      if(object.tag==target){
        this.sawPlayer=true;
      //  console.log("i saw you",target);
      }
      else{
        this.sawPlayer=false;
      }



    }

  }
}
