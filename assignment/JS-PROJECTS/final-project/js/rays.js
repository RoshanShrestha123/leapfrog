function Ray(c,angle){
  this.c = c;
  this.startPosition = {
    x :100,
    y :100
  };
  this.speed =10;
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
    this.x+=this.xUnit;
    this.y+=this.yUnit;
    this.draw();
  }

//experiment
  this.checkRayCollision= function(player){
    var deno = ((this.startPosition.x-this.x)*((player.y-(player.height/2))-((player.y-(player.height/2))+player.height)))-((this.startPosition.y-this.y)*((player.x-(player.width/2))-(player.x-(player.width/2))));
    var t = (((this.startPosition.x-(player.x-(player.width/2)))*((player.y-(player.height/2))-((player.y-(player.height/2))+player.height)))-((this.startPosition.y-(player.y-(player.height/2)))*((player.x-(player.width/2))-(player.x-(player.width/2)))))/deno;
    var u = -((((this.startPosition.x-this.x)*(this.startPosition.y-(player.y-(player.height/2))))-((this.startPosition.y-this.y)*(this.startPosition.x-(player.x-(player.width/2)))))/deno);
    if(t>=0 && t<=1 && u>=0 && u<=1){
      this.x = this.startPosition.x+(t*(this.x-this.startPosition.x));
      this.y = this.startPosition.y+(t*(this.y-this.startPosition.y));
    }
  }

}
