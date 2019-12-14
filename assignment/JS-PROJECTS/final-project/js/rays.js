function Ray(c,angle,player){
  this.c = c;
  this.player = player;
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
  this.sawPlayer = false;
  this.visualPlayer = false;

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
  //  console.log(player);
    var deno = ((this.startPosition.x-this.x)*(player.y3-player.y4))-((this.startPosition.y-this.y)*(player.x3-player.x4));
    var t = ((this.startPosition.x-player.x3)*(player.y3-player.y4)-((this.startPosition.y-player.y3)*(player.x3-player.x4)))/deno;
    var u = -((((this.startPosition.x-this.x)*(this.startPosition.y-player.y3))-((this.startPosition.y-this.y)*(this.startPosition.x-player.x3)))/deno);
    if(t>=0 && t<=1 && u>=0 && u<=1){
      this.x = this.startPosition.x+(t*(this.x-this.startPosition.x));
      this.y = this.startPosition.y+(t*(this.y-this.startPosition.y));
      if(player.tag=='player'){
        this.sawPlayer=true;
      }
      else{
        this.sawPlayer=false;
      }



    }

  }
}
