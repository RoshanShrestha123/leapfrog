/**
 * this class will will execute first,
 * handel user input,
 * check state and Game Loop
 * @method      Game
 * @param       {DOM ELEMENT} canvas
 * @constructor
 */

function Game(canvas,c){
  var that = this;
  this.canvas = canvas;
  this.c= c;
  this.playerObj = new Player(this.c,this.canvas.width,this.canvas.height);
  this.gunObj;
  this.bulletArr=[];
  this.isShooting=false;
  this.shootingAngle=0;
  this.scoreObj = new Score();
  this.manageRoomObj = new ManageRoom(this.c,this.canvas);
  this.enemyManagementObj = new EnemyManagement(this.c,this.playerX,this.playerY,this.playerObj,this.manageRoomObj);
  this.enemyManagementObj.initEnemyArr();
  this.enemyManagementObj.initRays();
  this.playerObj.initArrayObs(this.enemyManagementObj.enemyArr[0].lineArr);
  this.playerObj.sideOfEnemy(this.enemyManagementObj.enemyArr);
  this.playerObj.initRay();
  this.gridObj = new Grid(this.c,this.canvas.width,this.canvas.height,this.manageRoomObj);
  this.gridObj.initGrid();
  this.gridObj.checkGridCollision();
  this.uiObj = new Ui(this.c,this.canvas);
  this.enemyCount =0;
  this.gameOver = false;



this.resetGame = function(){
  this.enemyManagementObj.enemyArr=[];
  this.manageRoomObj.roomArr=[];
  this.bulletArr=[];
}
  // for (var i = 0; i < this.enemyManagementObj.enemyObj.length; i++) {
  //   this.gridObj.getEnemyPosition(this.enemyManagementObj.enemyObj.x,this.enemyManagementObj.enemyObj.y)
  // }

  //-----------------------------------------event-listener-MOUSECLICK------------------------------------------------------//
/**
 * this function will init the New Bullet everytime the player click the mouse Left Button
 * and push that bullet object to bullet array.
 * @method
 */
  document.addEventListener('click',function(){
    if(that.gameOver==false){
      that.gunSound = new Audio('./music/rifle.ogg');
      that.gunSound.play();
      that.gunSound.volume = 0.2;
      that.isShooting=true;
      that.playerX = that.playerObj.x;
      that.playerY= that.playerObj.y;
      that.mouseX = that.playerObj.mouseX;
      that.mouseY = that.playerObj.mouseY;
      that.gunObj = new Gun(that.c,that.playerX,that.playerY,that.mouseX,that.mouseY,that.manageRoomObj,that.enemyManagementObj.enemyArr);
      that.bulletArr.push(that.gunObj);
      console.log(that.bulletArr.length);
    }

  });
  //-----------------------------------------function-to-move-bullet-forward------------------------------------------------------//

  this.fireBullet = function(){
    if(this.bulletArr.length>0){
      for (var i = 0; i < this.bulletArr.length; i++) {
        this.bulletArr[i].update();
        for (var j = 0; j < this.enemyManagementObj.enemyArr.length; j++) {
          var collision =this.bulletArr[i].checkBulletCollision(this.enemyManagementObj.enemyArr[j]);
          if(collision==true && this.enemyManagementObj.enemyArr[j].enemyState.currentState!=10 ){
            this.enemyManagementObj.enemyArr[j].isDead=true;
          }
          if(this.bulletArr[i].x>this.canvas.width || this.bulletArr[i].x<0 ||        this.bulletArr[i].y>this.canvas.height|| this.bulletArr[i].y<0){
          }
        }
      }
    }
  }


  //-----------------------------------------function-to-control-the-player-movement-----------------------------------------------------//

  this.controlPlayerMovement = function(){
    if(this.playerObj.moveup==true){
      this.playerObj.movementUp();

    }
    if(this.playerObj.movedown==true){
      this.playerObj.movementDown();

    }
    if(this.playerObj.moveleft==true){
      this.playerObj.movementLeft();
    }
    if(this.playerObj.moveright==true){
      this.playerObj.movementRight();
    }

  }
  this.updateEnvironmentPosition = function(){
      that.gridObj.updateGridPos(this.playerObj.moveX,this.playerObj.moveY);
     for (var i = 0; i < this.enemyManagementObj.enemyArr.length; i++) {
       this.enemyManagementObj.enemyArr[i].updatePos();
     }
      for (var i = 0; i < this.manageRoomObj.roomArr.length; i++) {
        this.manageRoomObj.roomArr[i].update(this.playerObj);
      }
  }
  //-----------------------------------------GAME LOOP------------------------------------------------------//

/**
 * this is the GAME LOOP,
 * frame update @ '1 millisecond / sec',
 * @method
 */
this.gameLoop = function(){
    if(this.playerObj.isDead==false){
      this.updateEnvironmentPosition();

      //this.gridObj.updateGridPos(this.playerObj.moveX,this.playerObj.moveY);
      this.playerObj.moveX =0;
      this.playerObj.moveY =0;

      this.c.clearRect(0,0,this.canvas.width,this.canvas.height);
      this.controlPlayerMovement();// check user input and move the player accordingly
      if(this.isShooting==true){
        this.gunObj.update(this.shootingAngle,this.playerX,this.playerY);
      }
      for (var i = 0; i < this.manageRoomObj.roomArr.length; i++) {
        this.manageRoomObj.roomArr[i].draw();
        if(this.manageRoomObj.roomArr[i].borderObj.isCollided==true && this.playerObj.qPressed == true && this.manageRoomObj.roomArr[i].borderObj.alreadyOpen==false){
          this.manageRoomObj.roomArr[i].borderObj.alreadyOpen=true;
        }
        this.manageRoomObj.roomArr[i].borderObj.checkBorderCollision(this.playerObj,'player');
        for (var j = 0; j < this.enemyManagementObj.enemyArr.length; j++) {
          this.manageRoomObj.roomArr[i].borderObj.checkBorderCollisionEnemy(this.enemyManagementObj.enemyArr[j]);
        }
      }

      this.playerObj.drawRays();
      this.playerObj.draw();

      for (var i = 0; i < this.enemyManagementObj.enemyArr.length; i++) {
        this.enemyManagementObj.enemyArr[i].update(this.scoreObj);
        if( this.enemyManagementObj.enemyArr[i].enemyStatusCount == false && this.enemyManagementObj.enemyArr[i].canDie == false){
          // console.log("this is dead 1");
          this.enemyCount++;
          this.enemyManagementObj.enemyArr[i].enemyStatusCount = true;
        }
      //  this.enemyManagementObj.enemyArr[i].drawRays();
      }
      this.fireBullet();
      this.uiObj.updateScore(this.scoreObj.score);
      this.uiObj.renderUi(this.playerObj,this.enemyManagementObj.enemyArr);

      if(this.enemyCount==this.enemyManagementObj.enemyArr.length){
        console.log("game over");
        this.gameOver = true;
      }
      //that.gridObj.renderGrid();

    }
    else{

    }
}




}

//-----------------------------------------GAME MAIN OBJECT------------------------------------------------------//
