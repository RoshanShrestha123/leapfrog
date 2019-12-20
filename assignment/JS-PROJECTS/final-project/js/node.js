function Node(c,x,y,size,color,index){
  this.c = c;
  this.x = x;
  this.y = y;
  this.size=size;
  this.width=this.size;
  this.height = this.size;
  this.color = color;
  this.tag ='path';
  this.index = index;
  this.fn =0;
  this.gn =0;
  this.hn =0;
  this.initCell = function(){
    this.x = this.x*this.size;
    this.y = this.y*this.size;
  }

  this.drawCell = function(){
    this.c. beginPath();
    this.c.font = '10px gameFont';
    this.c.fillText(index,this.x,this.y);
    this.c.strokeStyle= this.color;
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.stroke();
  }

  this.updateCellPos = function(moveX,moveY){
    this.x -=moveX;
    this.y -=moveY;
  }


}
