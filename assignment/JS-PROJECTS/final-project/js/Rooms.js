/**
 * [Room description]
 * @method      Room
 * @param       {context} c
 * @param       {*} x
 * @param       {*} y
 * @param       {*} width
 * @param       {*} height
 * @param       {*} t
 * @param       {*} r
 * @param       {*} d
 * @param       {*} l
 * @param       {*} color
 * @param       {*} name   optional
 * @constructor
 */

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
this.sideOfRoom ={
  l:l,
  r:r,
  t:t,
  d:d
}

/**
 * Create the room object from here
 * @type {RoomBorder}
 */

  this.borderObj = new RoomBorder(this.c,0,0,this.sideOfRoom.t,this.sideOfRoom.r,this.sideOfRoom.d,this.sideOfRoom.l,this.room);
  this.borderObj.initBorder();

  this.draw = function(){

    this.c.beginPath();
    this.c.fillStyle=this.room.color;
    // this.c.rect(this.room.x,this.room.y,this.room.width,this.room.height);
    // this.c.fill();

    this.c.drawImage(this.room.img,this.room.x,this.room.y,this.room.width,this.room.height);
    this.borderObj.renderBorder();
    this.c.beginPath();
  }

  this.setBgImage = function(img){
    this.room.img = img;
  }

  /**
   * update the position of the rooms
   * @method
   * @param  {[type]} player 
   * @return {[type]}
   */

  this.update = function(player){
    this.room.x-=player.moveX;
    this.room.y-=player.moveY;
    this.borderObj.verticalBorder.x-=player.moveX;
    this.borderObj.verticalBorder.y-=player.moveY;
    this.borderObj.doorVertical.x-=player.moveX;
    this.borderObj.doorVertical.y-=player.moveY;
    this.borderObj.horizontalBorder.x-=player.moveX;
    this.borderObj.horizontalBorder.y-=player.moveY;




    this.draw();
  }


}
