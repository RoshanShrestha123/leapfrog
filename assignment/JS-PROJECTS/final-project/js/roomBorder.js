function RoomBorder(c,x,y,t,r,b,l,room){
  this.c = c;
  this.doorGap=70;
  this.roomInfo = room;
  this.horiBorderImage = document.getElementById('horiBorder');
  this.vertiBorderImage = document.getElementById('vertiBorder');
  this.sides = {
    top :t,
    right :r,
    bottom :b,
    left :l
  }
  this.doorVertical = {
    topX:this.roomInfo.x,
    topY:this.roomInfo.y,
    topHeight:this.roomInfo.height/2-10,
    bottomHeight:this.roomInfo.height/2-10,
    bottomX:this.roomInfo.x,
    bottomY:this.roomInfo.y+this.doorGap,
    width:30
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

  this.sideCordinateForRayCasting = {
    x3:null,
    x4:null,
    y3:null,
    y4:null
  }
  this.sideArr =[];
this.initBorder = function(){
  if(this.sides.top==1){
      this.sideCordinateForRayCasting.x3=this.horizontalBorder.x;
      this.sideCordinateForRayCasting.y3=this.horizontalBorder.y;
      this.sideCordinateForRayCasting.x4=this.horizontalBorder.x+this.horizontalBorder.width;
      this.sideCordinateForRayCasting.y4=this.horizontalBorder.y;
      this.sideArr.push(this.sideCordinateForRayCasting);
  }
  if(this.sides.left==1){
      this.sideCordinateForRayCasting.x3=this.verticalBorder.x;
      this.sideCordinateForRayCasting.y3=this.verticalBorder.y;
      this.sideCordinateForRayCasting.x4=this.verticalBorder.x;
      this.sideCordinateForRayCasting.y4=this.verticalBorder.y+this.verticalBorder.height;
      this.sideArr.push(this.sideCordinateForRayCasting);
  }
  console.log("side:",this.sideArr);
  // if(this.sides.right==1){
  //     this.sideCordinateForRayCasting.x3=this.verticalBorder.x+this.roomInfo.width;
  //     this.sideCordinateForRayCasting.y3=this.verticalBorder.y;
  //     this.sideCordinateForRayCasting.x4=this.verticalBorder.x+this.roomInfo.width;
  //     this.sideCordinateForRayCasting.y4=this.verticalBorder.y+this.verticalBorder.height;
  //     this.sideArr.push(this.sideCordinateForRayCasting);
  // }
}

  this.renderBorder = function(){
    if(this.sides.top==1){
      this.c.beginPath();
      this.c.drawImage(this.horiBorderImage,this.horizontalBorder.x,this.horizontalBorder.y-this.horizontalBorder.height,
        this.horizontalBorder.width,this.horizontalBorder.height);
    }
    if(this.sides.right==1){
      this.c.beginPath();
      this.c.drawImage(this.vertiBorderImage,this.verticalBorder.x+this.roomInfo.width,this.verticalBorder.y,
      this.verticalBorder.width,this.verticalBorder.height);
    }
    if(this.sides.bottom==1){
      this.c.beginPath();
      this.c.drawImage(this.horiBorderImage,this.horizontalBorder.x,this.horizontalBorder.y+this.roomInfo.height,
      this.horizontalBorder.width,this.horizontalBorder.height);
    }
    if(this.sides.left==1){
      this.c.beginPath();
      this.c.drawImage(this.vertiBorderImage,this.verticalBorder.x-this.verticalBorder.width,this.verticalBorder.y,
      this.verticalBorder.width,this.verticalBorder.height);
    }
  }

  this.initDoor = function(){

  }

//check collision here
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
            console.log("right side");
            this.player.moveup=false;
            this.player.x-=0.5;
          }
          //check left side of collision
          if(this.verticalBorder.x<=this.player.x && this.verticalBorder.y+this.verticalBorder.height>this.player.y){
            console.log("left side");
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
            console.log("right side");
            this.player.moveup=false;
            this.player.x-=0.5;
          }
          //check left side of collision
          if(this.verticalBorder.x+(this.roomInfo.width)<=this.player.x ){
            console.log("left side");
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
          //check top side of collision
          if(this.horizontalBorder.y>this.player.y ){
            console.log("top side");
            this.player.moveup=false;
            this.player.y-=0.5;
          }
          //check bottom side of collision
          if(this.horizontalBorder.y<this.player.y ){
            console.log("bottom side");
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
          //check top side of collision
          if(this.horizontalBorder.y+(this.roomInfo.height)>this.player.y ){
            console.log("top side");
            this.player.moveup=false;
            this.player.y-=0.5;
          }
          //check bottom side of collision
          if(this.horizontalBorder.y+(this.roomInfo.height)<this.player.y ){
            console.log("bottom side");
            this.player.moveup=false;
            this.player.y+=0.5;
          }
        }
    }


  }

  //check collision here
    this.checkBorderCollisionEnemy = function(enemy){
      this.player = enemy;

      //collsion test on the left wall
      if(this.sides.left ==1){
        if(this.verticalBorder.x>= this.player.x-(this.player.width/2) &&
          this.verticalBorder.x-this.verticalBorder.width<= this.player.width +this.player.x-(this.player.width/2) &&
          this.verticalBorder.y+this.verticalBorder.height>= this.player.y-(this.player.height/2) &&
          this.verticalBorder.y<=this.player.y+this.player.height-(this.player.height/2)){
            //check right side of collision
            if(this.verticalBorder.x>this.player.x){
              console.log("right side");
              this.player.moveup=false;
              this.player.x-=0.5;
            }
            //check left side of collision
            if(this.verticalBorder.x<=this.player.x && this.verticalBorder.y+this.verticalBorder.height>this.player.y){
              console.log("left side");
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
              console.log("right side");
              this.player.moveup=false;
              this.player.x-=0.5;
            }
            //check left side of collision
            if(this.verticalBorder.x+(this.roomInfo.width)<=this.player.x ){
              console.log("left side");
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
            //check top side of collision
            if(this.horizontalBorder.y>this.player.y ){
              console.log("top side");
              this.player.moveup=false;
              this.player.y-=0.5;
            }
            //check bottom side of collision
            if(this.horizontalBorder.y<this.player.y ){
              console.log("bottom side");
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
            //check top side of collision
            if(this.horizontalBorder.y+(this.roomInfo.height)>this.player.y ){
              console.log("top side");
              this.player.moveup=false;
              this.player.y-=0.5;
            }
            //check bottom side of collision
            if(this.horizontalBorder.y+(this.roomInfo.height)<this.player.y ){
              console.log("bottom side");
              this.player.moveup=false;
              this.player.y+=0.5;
            }
          }
      }


    }
}
