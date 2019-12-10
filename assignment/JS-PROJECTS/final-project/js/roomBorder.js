function RoomBorder(c,x,y,t,r,b,l,room){
  this.c = c;
  this.roomInfo = room;
  this.horiBorderImage = document.getElementById('horiBorder');
  this.vertiBorderImage = document.getElementById('vertiBorder');
  console.log("room",this.roomInfo);
  this.sides = {
    top :t,
    right :r,
    bottom :b,
    left :l
  }
  this.verticalBorder = {
    x:this.roomInfo.x,
    y:this.roomInfo.y,
    width:30,
    height:this.roomInfo.height
  }
  this.horizontalBorder = {
    x:this.roomInfo.x,
    y:this.roomInfo.y,
    width:this.roomInfo.width,
    height:30
  }

  this.renderBorder = function(){
    if(this.sides.top==1){
      this.c.beginPath();
      this.c.drawImage(this.horiBorderImage,this.horizontalBorder.x,this.horizontalBorder.y-this.horizontalBorder.height,
        this.horizontalBorder.width,this.horizontalBorder.height)
      // this.c.fillStyle="brown";
      // this.c.rect(this.horizontalBorder.x,this.horizontalBorder.y-this.horizontalBorder.height,
      //   this.horizontalBorder.width,this.horizontalBorder.height);
      // this.c.fill();
    }
    if(this.sides.right==1){
      this.c.beginPath();
      this.c.drawImage(this.vertiBorderImage,this.verticalBorder.x+this.roomInfo.width,this.verticalBorder.y,
      this.verticalBorder.width,this.verticalBorder.height);
      // this.c.fillStyle="brown";
      // this.c.rect(this.verticalBorder.x+this.roomInfo.width,this.verticalBorder.y,
      // this.verticalBorder.width,this.verticalBorder.height);
      // this.c.fill();
    }
    if(this.sides.bottom==1){
      this.c.beginPath();
      this.c.drawImage(this.horiBorderImage,this.horizontalBorder.x,this.horizontalBorder.y+this.roomInfo.height,
      this.horizontalBorder.width,this.horizontalBorder.height);
      // this.c.fillStyle="brown";
      // this.c.rect(this.horizontalBorder.x,this.horizontalBorder.y+this.roomInfo.height,
      // this.horizontalBorder.width,this.horizontalBorder.height);
      // this.c.fill();
    }
    if(this.sides.left==1){
      this.c.beginPath();
      this.c.drawImage(this.vertiBorderImage,this.verticalBorder.x-this.verticalBorder.width,this.verticalBorder.y,
      this.verticalBorder.width,this.verticalBorder.height);
      // this.c.fillStyle="brown";
      // this.c.rect(this.verticalBorder.x-this.verticalBorder.width,this.verticalBorder.y,
      // this.verticalBorder.width,this.verticalBorder.height);
      // this.c.fill();
    }
  }

  this.checkBorderCollision = function(player){
    this.player = player;

    //collsion test on the left wall
    if(this.sides.left ==1){
      if(this.verticalBorder.x>= this.player.x-(this.player.width/2) &&
        this.verticalBorder.x-this.verticalBorder.width<= this.player.width +this.player.x-(this.player.width/2) &&
        this.verticalBorder.y+this.verticalBorder.height>= this.player.y-(this.player.height/2) &&
        this.verticalBorder.y<=this.player.y+this.player.height-(this.player.height/2)){
          //check right side of collision
          if(this.verticalBorder.x>this.player.x){
            console.log("collided from right side");
            this.player.moveup=false;
            this.player.x-=0.5;
          }
          //check left side of collision
          if(this.verticalBorder.x<=this.player.x && this.verticalBorder.y+this.verticalBorder.height>this.player.y){
            console.log("collided from left side");
            this.player.moveup=false;
            this.player.x+=0.5;
          }
        }
    }

    //collsion test on the right wall
    if(this.sides.right ==1){
      if(this.verticalBorder.x+ this.verticalBorder.width+(this.roomInfo.width)>= this.player.x-(this.player.width/2) &&
        this.verticalBorder.x+(this.roomInfo.width)<= this.player.width +this.player.x-(this.player.width/2) &&
        this.verticalBorder.y+this.verticalBorder.height>= this.player.y-(this.player.height/2) &&
        this.verticalBorder.y<=this.player.y+this.player.height-(this.player.height/2)){
          //check right side of collision
          if(this.verticalBorder.x+(this.roomInfo.width)>this.player.x ){
            console.log("collided from right side");
            this.player.moveup=false;
            this.player.x-=0.5;
          }
          //check left side of collision
          if(this.verticalBorder.x+(this.roomInfo.width)<=this.player.x ){
            console.log("collided from left side");
            this.player.moveup=false;
            this.player.x+=0.5;
          }
        }
    }

    //collsion test on the top wall
    if(this.sides.top ==1){
      if(this.horizontalBorder.x+ this.horizontalBorder.width>= this.player.x-(this.player.width/2) &&
        this.horizontalBorder.x<= this.player.width +this.player.x-(this.player.width/2) &&
        this.horizontalBorder.y>= this.player.y-(this.player.height/2) &&
        this.horizontalBorder.y-this.horizontalBorder.height<=this.player.y+this.player.height-(this.player.height/2)){
          console.log("collided to top");
          //check top side of collision
          if(this.horizontalBorder.y>this.player.y ){
            console.log("collided from top side");
            this.player.moveup=false;
            this.player.y-=0.5;
          }
          //check bottom side of collision
          if(this.horizontalBorder.y<=this.player.y ){
            console.log("collided from bottom side");
            this.player.moveup=false;
            this.player.y+=0.5;
          }
        }
    }

    //collsion test on the bottom wall
    if(this.sides.bottom ==1){
      if(this.horizontalBorder.x+ this.horizontalBorder.width>= this.player.x-(this.player.width/2) &&
        this.horizontalBorder.x<= this.player.width +this.player.x-(this.player.width/2) &&
        this.horizontalBorder.y+this.horizontalBorder.height+(this.roomInfo.height)>= this.player.y-(this.player.height/2) &&
        this.horizontalBorder.y+(this.roomInfo.height)<=this.player.y+this.player.height-(this.player.height/2)){
          console.log("collided to bottom");
          //check top side of collision
          if(this.horizontalBorder.y+(this.roomInfo.height)>this.player.y ){
            console.log("collided from top side");
            this.player.moveup=false;
            this.player.y-=0.5;
          }
          //check bottom side of collision
          if(this.horizontalBorder.y+(this.roomInfo.height)<=this.player.y ){
            console.log("collided from bottom side");
            this.player.moveup=false;
            this.player.y+=0.5;
          }
        }
    }

    // //collsion test on the top wall
    // if(this.sides.bottom ==1){
    //   if(this.horizontalBorder.y+ this.horizontalBorder.height+(this.roomInfo.height-10)>= this.player.y-(this.player.height/2) &&
    //     this.horizontalBorder.x+(this.roomInfo.width-10)<= this.player.width +this.player.x-(this.player.width/2) &&
    //     this.horizontalBorder.y+this.horizontalBorder.height>= this.player.y &&
    //     this.horizontalBorder.y<=this.player.y+this.player.height){
    //       //check right side of collision
    //       if(this.horizontalBorder.x+(this.roomInfo.width-10)>this.player.x ){
    //         console.log("collided from bottom side");
    //         this.player.moveup=false;
    //         this.player.x-=0.5;
    //       }
    //       //check left side of collision
    //       if(this.horizontalBorder.x+(this.roomInfo.width-10)<=this.player.x ){
    //         console.log("collided from left side");
    //         this.player.moveup=false;
    //         this.player.x+=0.5;
    //       }
    //     }
    // }
  }
}
