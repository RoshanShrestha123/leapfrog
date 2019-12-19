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
  this.obsArr =[];
  this.manageRoomObj = new ManageRoom(this.c,this.canvas);
  this.enemyManagementObj = new EnemyManagement(this.c,this.playerX,this.playerY,this.playerObj,this.manageRoomObj);
  this.enemyManagementObj.initRays();
  this.playerObj.initArrayObs(this.enemyManagementObj.enemyArr[0].lineArr);
  this.playerObj.sideOfEnemy(this.enemyManagementObj.enemyArr);
  this.playerObj.initRay();
  this.gridObj = new Grid(this.c,this.canvas.width,this.canvas.height,this.manageRoomObj);
  this.gridObj.initGrid();
  this.gridObj.checkGridCollision();
  this.uiObj = new Ui(this.c);



  for (var i = 0; i < this.enemyManagementObj.enemyObj.length; i++) {
    this.gridObj.getEnemyPosition(this.enemyManagementObj.enemyObj.x,this.enemyManagementObj.enemyObj.y)
  }

  //-----------------------------------------event-listener-MOUSECLICK------------------------------------------------------//
/**
 * this function will init the New Bullet everytime the player click the mouse Left Button
 * and push that bullet object to bullet array.
 * @method
 */

  document.addEventListener('click',function(){
    that.isShooting=true;
    that.playerX = that.playerObj.x;
    that.playerY= that.playerObj.y;
    that.mouseX = that.playerObj.mouseX;
    that.mouseY = that.playerObj.mouseY;
    that.gunObj = new Gun(that.c,that.playerX,that.playerY,that.mouseX,that.mouseY,that.manageRoomObj,that.enemyManagementObj.enemyArr);
    that.bulletArr.push(that.gunObj);
  });
  //-----------------------------------------function-to-move-bullet-forward------------------------------------------------------//

  this.fireBullet = function(){
    if(this.bulletArr.length>0){
      for (var i = 0; i < this.bulletArr.length; i++) {
        this.bulletArr[i].update();
        for (var j = 0; j < this.enemyManagementObj.enemyArr.length; j++) {
          var collision =this.bulletArr[i].checkBulletCollision(this.enemyManagementObj.enemyArr[j]);
          if(collision==true){
            //this.bulletArr.splice(i,1);
            this.enemyManagementObj.enemyArr[j].isDead=true;
            console.log("bullet collided");
          }
        }

        if(this.bulletArr[i].x>this.canvas.width || this.bulletArr[i].x<0 || this.bulletArr[i].y>this.canvas.height|| this.bulletArr[i].y<0){
              this.bulletArr.shift();
              console.log("bullet out");
            }
      }
    }
  }


  //-----------------------------------------function-to-control-the-player-movement-----------------------------------------------------//
this.updateEnvironmentPosition = function(){
    that.gridObj.updateGridPos(this.playerObj.moveX,this.playerObj.moveY);
   for (var i = 0; i < this.enemyManagementObj.enemyArr.length; i++) {
     this.enemyManagementObj.enemyArr[i].updatePos();
   }
    for (var i = 0; i < this.manageRoomObj.roomArr.length; i++) {
      this.manageRoomObj.roomArr[i].update(this.playerObj);
    }
}
  this.controlPlayerMovement = function(){
    //if move up is active -> move upward
    if(this.playerObj.moveup==true){
      this.playerObj.movementUp();

    }
    // if move down is active
    if(this.playerObj.movedown==true){
      this.playerObj.movementDown();

    }
    //if move left is active
    if(this.playerObj.moveleft==true){
      this.playerObj.movementLeft();
    }
    // if move right is active
    if(this.playerObj.moveright==true){
      this.playerObj.movementRight();
    }

  }
  //-----------------------------------------GAME LOOP------------------------------------------------------//

/**
 * this is the GAME LOOP,
 * frame update @ '1 millisecond / sec',
 * @method
 */
this.gameLoop = function(){
    if(that.playerObj.isDead==false){
      this.updateEnvironmentPosition();
      this.playerObj.moveX =0;
      this.playerObj.moveY =0;
      that.c.clearRect(0,0,this.canvas.width,this.canvas.height);
      that.controlPlayerMovement();// check user input and move the player accordingly
      if(that.isShooting==true){
        that.gunObj.update(that.shootingAngle,that.playerX,that.playerY);
      }
      for (var i = 0; i < that.manageRoomObj.roomArr.length; i++) {
        that.manageRoomObj.roomArr[i].draw();
        if(that.manageRoomObj.roomArr[i].borderObj.isCollided==true && that.playerObj.qPressed == true && that.manageRoomObj.roomArr[i].borderObj.alreadyOpen==false){
          that.manageRoomObj.roomArr[i].borderObj.alreadyOpen=true;
        }
        that.manageRoomObj.roomArr[i].borderObj.checkBorderCollision(that.playerObj,'player');
        for (var j = 0; j < that.enemyManagementObj.enemyArr.length; j++) {
          that.manageRoomObj.roomArr[i].borderObj.checkBorderCollisionEnemy(that.enemyManagementObj.enemyArr[j]);
        }
      }
      //that.gridObj.renderGrid();
      //that.gridObj.updateGridPos(this.playerObj.moveX,this.playerObj.moveY);
      that.playerObj.drawRays();
      that.playerObj.draw();

      for (var i = 0; i < that.enemyManagementObj.enemyArr.length; i++) {
        that.enemyManagementObj.enemyArr[i].update(that.scoreObj);
      //  that.enemyManagementObj.enemyArr[i].drawRays();
      }
      that.fireBullet();
      that.uiObj.updateScore(that.scoreObj.score);
      that.uiObj.renderUi();

    }
    else{

    }
}




}

//-----------------------------------------GAME MAIN OBJECT------------------------------------------------------//
