function EnemyBullet(c,x,y,enemyRotation){
  this.c = c;
  this.x = x;
  this.y =y;
  this.width = 10;
  this.height = 10;
  this.speed = 10;
  this.color ='red';
  this.angle = enemyRotation;
  this.xUnit = Math.cos(this.angle)*this.speed;
  this.yUnit = Math.sin(this.angle)* this.speed;

  this.draw = function(){
    this.c.beginPath();
    this.c.fillStyle = this.color;
    this.c.rect(this.x, this.y, this.width,this.height);
    this.c.fill();
  }

  this.updatePosition = function(){
    this.x +=this.xUnit;
    this.y += this.yUnit;
    this.draw();
  }
}
