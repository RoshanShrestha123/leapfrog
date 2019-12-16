function Enemy(c,x,y,player,room){
  this.c = c;
  this.room = room;
  this.player = player;
  this.width = 70;
  this.height = 30;
  this.lookAngle = 0;
  this.color = 'rgba(100,255,255,1)';
  this.x = x;
  this.y = y;
  this.rayArr = [];
  this.rayAngle =0;
  this.visualStatus = false;
  this.stateArr = [];
  this.bulletArr = [];
  this.image = document.getElementById('enemy');
  this._SHOOT_INTERVAL = 0;



  //-----------------------------------------objects to store player sides cordinate STARTS------------------------------------------------------//
  // this is for raycasting purpose,
  // line- line intersection formula is applide to the every side player,
  // each side is the line itself , by calculating the side -line fo the player
  // we can easily apply the raycasting
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


//array to store all the lines in the game for raycasting
  this.lineArr = [this.leftSideOfPlayer,this.rightSideOfPlayer,this.topSideOfPlayer,this.bottomSideOfPlayer];
  for (var i = 0; i < this.room.roomArr.length; i++) {
    for(var j = 0;j<this.room.roomArr[i].borderObj.sideArr.length;j++){
      this.lineArr.push(this.room.roomArr[i].borderObj.sideArr[j]);
    }
  }
  //-----------------------------------------object to store the lines -ENDS------------------------------------------------------//

  //-----------------------------------------function-to- init enemy------------------------------------------------------//


  this.initEnemy = function(x,y,angle){
    this.x = x;
    this.y =y ;
    this.angle = angle;
    this.enemyState = new EnemyState(this.player,this.angle);
  }

  //-----------------------------------------function-to render player every frame------------------------------------------------------//

  this.render = function(){
    this.c.save();
    this.enemyState.update(this.x,this.y);
    this.c.beginPath();
    this.rotateEnemy(this.enemyState.angle);
    this.c.fillStyle=this.color;
    // this.c.rect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    // this.c.fill();
    this.c.drawImage(this.image,this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    this.c.restore();
    if(this.enemyState.shootActivate==true){
      if(this._SHOOT_INTERVAL>=200){
        this.initBullet();
        this._SHOOT_INTERVAL=0;
      }
      this._SHOOT_INTERVAL++;
    }
    this.updateBulletPos();

  }
  this.initBullet = function(){
      console.log("shoot ");
      this.bulletObj = new Gun(this.c,this.x,this.y,this.player.x,this.player.y);
      this.bulletArr.push(this.bulletObj);
  }
  this.updateBulletPos = function(){
    if(this.bulletArr.length!=0){
      for (var i = 0; i < this.bulletArr.length; i++) {
        this.bulletArr[i].update();
      }
    }
  }
  this.updatePos = function(){
    this.x -=this.player.moveX;
    this.y -=this.player.moveY;
  }

  //-----------------------------------------RAYCATING from the enemy the cordinate ------------------------------------------------------//

  this.drawRays = function(){
    for (var i = 0; i < this.rayArr.length; i++) {
      for (var j = 0; j < this.lineArr.length; j++) {
      this.rayArr[i].checkRayCollision(this.lineArr[j]);
      if(this.rayArr[i].sawPlayer==true){
        this.visualStatus=true;
      }
    }
    this.lookAngle = this.enemyState.angle*(180/Math.PI);
    this.rayArr[i].updateAngle(this.x,this.y,this.lookAngle+i);



    }
    if(this.visualStatus==true){
     this.color=this.enemyState.color;
     this.enemyState.initState(1);//change state
    }else{
      this.enemyState.initState(0);
      this.color=this.enemyState.color;
    }

    this.visualStatus=false;
  }

  //-----------------------------------------init ray ------------------------------------------------------//

  this.initRay = function(){
    for(var i=0; i<45;i++){
      this.rayAngle =i+this.enemyState.angle;// init rays with this angle
      this.rayObj = new Ray(this.c,this.rayAngle,this.player);
      this.rayArr.push(this.rayObj);
    }
  }


  //-----------------------------------------function to rotate the enemy------------------------------------------------------//
/**
 * rotate the enemy to the angle
 * @method
 * @param  {float} angle angle in the degree
 */

  this.rotateEnemy = function(angle){
    //this.angleInRadi = angle *180/Math.PI;
    this.angle = angle;
    this.c.translate(this.x,this.y);
    this.c.rotate(-Math.PI/2);
    this.c.rotate(this.angle);
    this.c.translate(-this.x,-this.y);
  }
}
