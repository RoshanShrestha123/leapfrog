function Room(c,x,y,width,height,t,r,d,l,color,name) {
  this.c = c;
  this.room = {
    x:x,
    y:y,
    width:width,
    height:height,
    color:color,
    name:name,
    img : null
  }


  this.borderObj = new RoomBorder(this.c,0,0,t,r,d,l,this.room);

  this.draw = function(){
    this.c.beginPath();
    this.c.fillStyle=this.room.color;
    // this.c.rect(this.room.x,this.room.y,this.room.width,this.room.height);
    // this.c.fill();
    this.c.drawImage(this.room.img,this.room.x,this.room.y,this.room.width,this.room.height);
    this.borderObj.renderBorder();
  }

  this.setBgImage = function(img){
    this.room.img = img;

  }
  this.update = function(player){

    this.room.x-=player.moveX;
    this.room.y-=player.moveY;
    this.borderObj.verticalBorder.x-=player.moveX;
    this.borderObj.verticalBorder.y-=player.moveY;
    this.borderObj.doorVertical.topX-=player.moveX;
    this.borderObj.doorVertical.topY-=player.moveY;
    this.borderObj.doorVertical.bottomX-=player.moveX;
    this.borderObj.doorVertical.bottomY-=player.moveY;
    this.borderObj.horizontalBorder.x-=player.moveX;
    this.borderObj.horizontalBorder.y-=player.moveY;

    this.draw();
  }


}
