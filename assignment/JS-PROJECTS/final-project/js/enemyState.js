function EnemyState(player,angle){
  this.player = player;

  this.currentState = 0;
  this.shootActivate = false;
  this.angle = angle;
  this.color = 'green';
  this.state ={
    IDLE:0,
    ATTACK:1,
    DEAD:2
  }

  this.initState = function(state){
    this.currentState = state;

  }
  this.update = function(x,y){
    this.enemyX = x;
    this.enemyY =y;
    switch (this.currentState) {
      case 0:
        this.idleState();
        break;
      case 1:
        this.attackState();
        break;
      case 2:
        this.deadState();
        break;

    }
  }
  this.idleState = function(){
  //  console.log("stay idle");
    this.color= 'green';
    this.angle =  this.angle;
    this.shootActivate = false;
  }
  this.attackState = function(){
  //  console.log("attack motherFU@@**");
    this.color ='red';
  //  console.log(this.enemyX);
   this.angle = Math.atan2(this.player.y-this.enemyY,this.player.x-this.enemyX);
    //console.log(this.angle);
    this.shootActivate = true;
  }
  this.deadState = function(){
    this.color ='blue';
  }

}
