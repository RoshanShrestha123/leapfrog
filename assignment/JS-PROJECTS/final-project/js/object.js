function ObjectCollision(c){
  this.c = c;
  this.x;
  this.y;
  this.width;
  this.height;
  this.dX = 3;
  this.dY = 3;
  this.itemPicked = false;

  this.initObject = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = document.getElementById('collect');
  }
  this.show = function(){
    this.c.beginPath();
    this.c.drawImage(this.image,this.x,this.y,this.width,this.height);

  }
  this.checkCollisionObject = function(player){
    //console.log("checlCollision");
    this.player = player;

    if(this.x<(this.player.x-(this.player.width/2))+this.player.width && this.x+this.width> this.player.x-(this.player.width/2) &&
      this.y<this.player.y-(this.player.height/2)+this.player.height && this.y+ this.height > this.player.y-(this.player.height/2)){
        // if(Math.abs(this.x-(this.player.x-(this.player.width/2)))> Math.abs(this.y-(this.player.y-(this.player.height/2))))

        if(this.player.fPressed && this.itemPicked==false){
          console.log("evidence collected");
          this.itemPicked = true;
        }

      }

  }
  this.updatePos = function(moveX,moveY){
    this.x-= moveX;
    this.y-=moveY;
  }
}
