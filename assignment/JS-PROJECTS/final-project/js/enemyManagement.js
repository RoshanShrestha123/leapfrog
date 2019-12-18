function EnemyManagement(c,playerX,playerY,playerObj,manageRoomObj){
  this.c = c;
  this.playerX = playerX;
  this.playerY = playerY;
  this.playerObj = playerObj;
  this.manageRoomObj = manageRoomObj;

  this.enemyArr = [];

    this.enemyObj = new Enemy(this.c,this.playerX,this.playerY,this.playerObj,this.manageRoomObj);
    this.enemyObj.initEnemy(500,100,Math.floor(Math.random()*350));
    this.enemyArr.push(this.enemyObj);

    this.enemyObj = new Enemy(this.c,this.playerX,this.playerY,this.playerObj,this.manageRoomObj);
    this.enemyObj.initEnemy(1100,-10,Math.floor(Math.random()*350));
    this.enemyArr.push(this.enemyObj);

this.initRays = function(){
  for (var i = 0; i < this.enemyArr.length; i++) {
    this.enemyArr[i].initRay();
  }
}

}
