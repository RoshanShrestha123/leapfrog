function Node(c,x,y,size,color){
  this.c = c;
  this.x = x;
  this.y = y;
  this.size=size;
  this.width=this.size;
  this.height = this.size;
  this.color = color;
  this.tag ='_collide';

  this.initCell = function(){
    this.x = this.x*this.size;
    this.y = this.y*this.size;
  }

  this.drawCell = function(){

    this.c. beginPath();
    // this.c.fillStyle='black';
    // this.c.font = '10px Arial';
    // this.c.fillText(Math.floor(this.x),this.x,this.y);
    this.c.strokeStyle= this.color;
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.stroke();

    //console.log("node created");
  }
  this.updateCellPos = function(moveX,moveY){
    this.x -=moveX;
    this.y -=moveY;
  }
  this.setColor = function(color){
    this.color = color;
  }

}
