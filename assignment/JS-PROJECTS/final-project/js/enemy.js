function Enemy(c,x,y,player,room){
  this.c = c;
  this.room = room;
  this.player = player;
  this.width = 50;
  this.height = 50;
  this.color = 'rgba(100,255,255,1)';
  this.x = x;
  this.y = y;
  this.rayArr = [];
  this.rayAngle =0;
  this.visualStatus = false;



  this.leftSideOfPlayer ={
    x3:this.player.x-(this.player.width/2),
    y3:this.player.y-(this.player.height/2),
    x4:this.player.x-(this.player.width/2),
    y4:(this.player.y-(this.player.height/2))+this.player.height,
    tag:'player'
  }
  this.rightSideOfPlayer ={
    x3:(this.player.x-(this.player.width/2))+this.player.width,
    y3:(this.player.y-(this.player.height/2)),
    x4:(this.player.x-(this.player.width/2))+this.player.width,
    y4:(this.player.y-(this.player.height/2))+this.player.height,
    tag:'player'
  }
  this.bottomSideOfPlayer ={
    x3:this.player.x-(this.player.width/2),
    y3:(this.player.y-(this.player.height/2))+this.player.height,
    x4:(this.player.x-(this.player.width/2))+this.player.width,
    y4:(this.player.y-(this.player.height/2))+this.player.height,
    tag:'player'
  }
  this.topSideOfPlayer ={
    x3:this.player.x-(this.player.width/2),
    y3:this.player.y-(this.player.height/2),
    x4:(this.player.x-(this.player.width/2))+this.player.width,
    y4:this.player.y-(this.player.height/2),
    tag:'player'
  }
//  console.log(this.room.roomArr[1].borderObj.sideArr);
  this.lineArr = [this.leftSideOfPlayer,this.rightSideOfPlayer,this.topSideOfPlayer,this.bottomSideOfPlayer];
  for (var i = 0; i < this.room.roomArr.length; i++) {
    for(var j = 0;j<this.room.roomArr[i].borderObj.sideArr.length;j++){
      this.lineArr.push(this.room.roomArr[i].borderObj.sideArr[j]);
    }
  }


  this.initEnemy = function(x,y){
    this.x = x;
    this.y =y ;
  }

  this.draw = function(){

    this.c.beginPath();
    this.c.fillStyle=this.color;
    this.c.rect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    this.c.fill();
  }
  this.update = function(){
    this.x -=this.player.moveX;
    this.y -=this.player.moveY;
    //this.draw();
  }

  this.drawRays = function(){
    for (var i = 0; i < this.rayArr.length; i++) {
      for (var j = 0; j < this.lineArr.length; j++) {
      this.rayArr[i].checkRayCollision(this.lineArr[j]);
      if(this.rayArr[i].sawPlayer==true){
        this.visualStatus=true;
      //  this.color='red';
      }
      }
      this.rayArr[i].updateAngle(this.x,this.y);



    }
    if(this.visualStatus==true){
     this.color='red';
     this.checkState();
    }else{
      this.color='green';
    }

    this.visualStatus=false;
  }


  this.initRay = function(){
    for(var i=0; i<360;i++){
      this.rayAngle =i;
      this.rayObj = new Ray(this.c,this.rayAngle,this.player);
      this.rayArr.push(this.rayObj);
    }
  }

  this.checkState = function(){
    
  }
}
