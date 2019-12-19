function Enemy(c,x,y,player,room,index,collisionObj){
  this.c = c;
  this.room = room;
  this.player = player;
  this.width = 100;
  this.height = 100;
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
  this.tag ='enemy';
  this.lineArr=[];
  this.lineArrAll=[];
  this.index = index;
  this.hasGun = true;
  this.isVisible = false;
  this.enemyState=null;
  this.collided = true;
  this.listenCommand = false;
  this.mesg = '';
  this.currentState =null;
  this.alreadyChanged = false;
  this.activateCounter = false;
  this.isDead = false;



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
  this.lineArrPlayer = [this.leftSideOfPlayer,this.rightSideOfPlayer,this.topSideOfPlayer,this.bottomSideOfPlayer];
  this.lineArrAll = this.lineArrPlayer;
  for (var i = 0; i < this.room.roomArr.length; i++) {
    for(var j = 0;j<this.room.roomArr[i].borderObj.sideArr.length;j++){
      this.lineArr.push(this.room.roomArr[i].borderObj.sideArr[j]);
      this.lineArrAll.push(this.room.roomArr[i].borderObj.sideArr[j]);
    }
  }
  //-----------------------------------------object to store the lines -ENDS------------------------------------------------------//

  //-----------------------------------------function-to- init enemy------------------------------------------------------//


  this.initEnemy = function(x,y,angle){
    var temp = Math.floor(Math.random()*2);
    if(temp ==0){
      this.hasGun = false;
    }
    else{
      this.hasGun = true;
    }
    this.x = x;
    this.y =y ;
    this.angle = angle;
    this.enemyState = new EnemyState(this.player,this.angle);
    this.enemyState.initState(0);
    // this.height = this.enemyState.height;
    // this.width = this.enemyState.width;

  }

  //-----------------------------------------function-to render player every frame------------------------------------------------------//
this.enemyDraw = function(){
  this.c.save();
  this.c.beginPath();
//  this.fillStyle='red';

  this.rotateEnemy(this.enemyState.angle);
this.c.fillStyle=this.color;
  this.c.drawImage(this.image,this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
  this.c.restore();
}
this.drawEnemyText = function(){
  this.c.fillStyle='white';
  this.c.font='20px gameFont';
  this.c.fillText(this.mesg,this.x-(this.width/2),this.y-this.height);
  this.c.fill();
}

  this.update = function(scoreObj){
    if(this.enemyState.freezeLoop==false){
      this.enemyState.update(this.x,this.y);
      this.updateValueFromState();

    if(this.enemyState.shootActivate==true){
      if(this._SHOOT_INTERVAL>=300){
        this.initBullet();
        this._SHOOT_INTERVAL=0;
      }
      this._SHOOT_INTERVAL++;
    }


    //condition to arrest
    if(this.x+this.width>this.player.x && this.x < this.player.x+this.player.width &&
        this.y+this.height> this.player.y && this.y<this.player.y+ this.player.height &&this.enemyState.currentState==2 && this.player.qPressed==true){
            this.enemyState.initState(9);
            scoreObj.increaseScore(750);
            scoreObj.displayScore();
        }
    if(this.enemyState.currentState!=9){
        this.drawRays();
    }
    }else{
      this.isVisible=true;
    }

    this.updateBulletPos();
    if(this.isDead==true){
      this.enemyState.initState(10);
      if(this.enemyState.previousState==1){
      scoreObj.increaseScore(500);
      scoreObj.displayScore();
      }
      else{
        scoreObj.decreaseScore(500);
        scoreObj.displayScore();
      }
      console.log("this is dead");
      this.isDead=false;
    }
    if(this.isVisible==true){
      this.enemyDraw();
      this.drawEnemyText();
      if(this.player.ePressed==true && this.alreadyChanged==false){
        this.delay = 200;
        this.activateCounter=true;
        this.alreadyChanged=true;
      }
    }
    if(this.activateCounter==true){
      if(this.delay>0){
        this.delay--;
      }
      else{
        var randomState = Math.floor(Math.random()*2)+1
        this.enemyState.initState(randomState);
        console.log(randomState);
        this.activateCounter=false;
      }
    }
  }


  this.initBullet = function(){
      this.bulletObj = new Gun(this.c,this.x,this.y,this.player.x,this.player.y,this.room,this.player);
      this.bulletArr.push(this.bulletObj);
  }
  this.updateBulletPos = function(){
    if(this.bulletArr.length!=0){
      for (var i = 0; i < this.bulletArr.length; i++) {
        this.bulletArr[i].update();
        var bulletCollided = this.bulletArr[i].checkBulletCollision(this.player);
        if(bulletCollided){
          this.bulletArr.splice(i,1);
          this.player.isDead=true;
        }
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
      for (var j = 0; j < this.lineArrAll.length; j++) {
      this.rayArr[i].checkRayCollision(this.lineArrAll[j],'player');
      if(this.rayArr[i].sawPlayer==true){
        this.visualStatus=true;
      }
    }
    this.lookAngle = this.enemyState.angle*(180/Math.PI);
  //  this.rayArr[i].draw();
    this.rayArr[i].updateAngle(this.x,this.y,this.lookAngle+i);

    }

    if(this.visualStatus==true && this.enemyState.currentState==0){
    // this.color=this.enemyState.color;
     if(this.hasGun==true){
       this.enemyState.initState(1);//attack
     }
     else{
       this.enemyState.initState(2);//surrender
     }
    }
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

  this.rotateEnemy = function(angle){
    this.angle = angle;
    this.c.translate(this.x,this.y);
    this.c.rotate(-Math.PI/2);
    this.c.rotate(this.angle);
    this.c.translate(-this.x,-this.y);
  }

  this.updateValueFromState = function(){
    this.height = this.enemyState.height;
    this.width = this.enemyState.width;
    this.image = this.enemyState.image;
    this.mesg = this.enemyState.mesg;
    if(this.enemyState.currentState==3 || this.enemyState.currentState==4){
        this.isVisible = this.enemyState.isVisible;
    }

  }
}
