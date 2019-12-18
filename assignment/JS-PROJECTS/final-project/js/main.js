/**
 * this class will will execute first,
 * handel user input,
 * check state and Game Loop
 * @method      Game
 * @param       {DOM ELEMENT} canvas
 * @constructor
 */

function Game(canvas){
  var that = this;
  this.canvas = canvas;
  this.c= this.canvas.getContext('2d');
  this.canvas.height = 700;
  this.canvas.width = 1290;
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
    that.gunObj = new Gun(that.c,that.playerX,that.playerY,that.mouseX,that.mouseY,that.manageRoomObj);
    that.bulletArr.push(that.gunObj);
  });
  //-----------------------------------------function-to-move-bullet-forward------------------------------------------------------//

  this.fireBullet = function(){
    if(this.bulletArr.length>0){
      for (var i = 0; i < this.bulletArr.length; i++) {
        this.bulletArr[i].update(); // move the bullet forward
        if(this.bulletArr[i].x>this.canvas.width || this.bulletArr[i].x<0 || this.bulletArr[i].y>this.canvas.height ||
            this.bulletArr[i].y<0){ // remove the bullet from array if it goes out of the canvas
              this.bulletArr.shift();
              console.log("bullet out");
            }
      }
    }
  }


  //-----------------------------------------function-to-control-the-player-movement-----------------------------------------------------//

  this.controlPlayerMovement = function(){
    //if move up is active -> move upward
    if(this.playerObj.moveup==true){
     this.playerObj.movementUp();
       that.gridObj.updateGridPos(this.playerObj.moveX,this.playerObj.moveY);
     for (var i = 0; i < this.enemyManagementObj.enemyArr.length; i++) {
       this.enemyManagementObj.enemyArr[i].updatePos();
     }
      for (var i = 0; i < this.manageRoomObj.roomArr.length; i++) {
        this.manageRoomObj.roomArr[i].update(this.playerObj);
      }
    }
    // if move down is active
    if(this.playerObj.movedown==true){

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

  setInterval(function(){
    that.c.clearRect(0,0,this.canvas.width,this.canvas.height);
    that.controlPlayerMovement();// check user input and move the player accordingly
    if(that.isShooting==true){
      that.gunObj.update(that.shootingAngle,that.playerX,that.playerY);
    }
    for (var i = 0; i < that.manageRoomObj.roomArr.length; i++) {
      that.manageRoomObj.roomArr[i].draw();
      that.manageRoomObj.roomArr[i].borderObj.checkBorderCollision(that.playerObj,'player');
      for (var j = 0; j < that.enemyManagementObj.enemyArr.length; j++) {
        that.manageRoomObj.roomArr[i].borderObj.checkBorderCollisionEnemy(that.enemyManagementObj.enemyArr[j]);
      }
    }
    that.gridObj.renderGrid();
    that.playerObj.drawRays();
    that.playerObj.draw();

    for (var i = 0; i < that.enemyManagementObj.enemyArr.length; i++) {
    //  console.log(that.scoreObj);
      that.enemyManagementObj.enemyArr[i].update(that.scoreObj);
    //  that.enemyManagementObj.enemyArr[i].drawRays();
    }
    that.fireBullet();
    that.uiObj.updateScore(that.scoreObj.score);
    that.uiObj.renderUi();


  },1);


}

//-----------------------------------------GAME MAIN OBJECT------------------------------------------------------//

var canvas = document.getElementById('canvas');
var gameObj = new Game(canvas);// Main Game Object!!
