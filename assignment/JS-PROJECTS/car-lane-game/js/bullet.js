function Bullet(parentElement){
  this.x;
  this.y;
  this.speed=10;
  this.width=16;
  this.height=16;
  this.image = "url(images/bullet_1.png)";
  this.parentElement = parentElement;
  this.element= null;

  this.initBullet = function(x,y){
    this.x = x;
    this.y =y;
    var bullet = document.createElement('div');
    this.parentElement.appendChild(bullet);
    this.element = bullet;
    this.element.style.width=this.width+"px";
    this.element.style.height=this.height+"px";
    //this.element.style.background="red";
    this.element.style.position="absolute";
    this.element.style.background=this.image;
  }

  this.drawBullet = function(){
    this.element.style.left = this.x-(this.width/2)+"px";
    this.element.style.top = this.y+"px";
  }

  this.updateBulletPos = function(){
    //this.x = x;
    this.y-=this.speed;
  }
}
