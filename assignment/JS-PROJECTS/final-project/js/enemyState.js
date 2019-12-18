function EnemyState(player,angle){
  this.player = player;
  this.image = null;
  this.currentState = 0;
  this.shootActivate = false;
  this.angle = angle;
  this.color = 'green';
  this.width = 0;
  this.height = 0;
  this.freezeLoop = false;
  this.afterArrestedAngle = 0;
  this.mesg = '';
  //this.isVisible = false;
  this.state ={
    IDLE:0,
    ATTACK:1,
    DEAD:2,
    SURENDER:3
  }

  this.initState = function(state){
    this.currentState = state;

  }
  this.update = function(x,y){
    this.enemyX = x;
    this.enemyY = y;
    switch (this.currentState) {
      case 0:
        this.idleState();
        break;
      case 1:
        this.attackState();
        break;
      case 2:
        this.surrender();
        break;
      case 3:
        this.dntCare();
        break;
      case 9:
        this.arrested();
        break;
      case 10:
        this.deadState();
        break;

    }
  }
  this.idleState = function(){
  //  console.log("idle");
   this.image = document.getElementById('enemy');
    this.angle =  this.angle;
    this.width = 72;
    this.height = 34;
    this.mesg ='idle';
    //this.isVisible = false;

    this.shootActivate = false;
  }
  this.attackState = function(){
    this.image = document.getElementById('enemy');
    this.angle = Math.atan2(this.player.y-this.enemyY,this.player.x-this.enemyX);
    this.shootActivate = true;
    this.width = 72;
    this.height = 34;
    this.mesg ='attack';

  }
  this.surrender = function(){
    this.image =document.getElementById('enemySurender');
    this.angle = Math.atan2(this.player.y-this.enemyY,this.player.x-this.enemyX);
    this.width = 60;
    this.height = 60;
    this.shootActivate = false;
    this.isVisible = true;
    this.afterArrestedAngle = -this.angle;
    this.mesg ='surrender';
  //  console.log("i surrender");
  }

  this.dntCare = function(){
  //  console.log("idle");
   this.image = document.getElementById('enemy');
    this.angle =  this.angle;
    this.width = 72;
    this.height = 34;
    this.mesg ='I dnt care';
    //this.isVisible = false;

    this.shootActivate = false;
  }

  this.arrested = function(){
    //console.log('you are arrested');
    this.angle = this.afterArrestedAngle;
    this.isVisible = true;
    this.freezeLoop = true;
    this.mesg ='arrested';

  }
  this.deadState = function(){
    this.mesg ='Dead';
    this.isVisible = true;
  }

}
