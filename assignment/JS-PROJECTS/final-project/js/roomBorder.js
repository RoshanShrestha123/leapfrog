function SideCordinate(x3,y3,x4,y4,side){
  this.x3= x3;
  this.y3 =y3;
  this.x4 = x4;
  this.y4 = y4;
  this.side = side;
  this.tag ='wall';
}

function RoomBorder(c,x,y,t,r,b,l,room){
  this.c = c;
  this.sideLine;
  this.doorGap=70;
  this.roomInfo = room;
  this.isCollided = false;
  this.alreadyOpen = false;
  this.horiBorderImage = document.getElementById('horiBorder');
  this.vertiBorderImage = document.getElementById('vertiBorder');
  this.vertiDoorImage = document.getElementById('vertiDoor');
  this.sides = {
    top :t,
    right :r,
    bottom :b,
    left :l
  }
  this.doorVertical = {
    x:this.roomInfo.x,
    y:this.roomInfo.y+(this.roomInfo.height/2),
    width:20,
    height:100

  }

  this.verticalBorder = {
    x:this.roomInfo.x,
    y:this.roomInfo.y-30,
    width:30,
    height:this.roomInfo.height+60
  }
  this.horizontalBorder = {
    x:this.roomInfo.x,
    y:this.roomInfo.y,
    width:this.roomInfo.width,
    height:30
  }


  this.sideArr =[];
  this.initBorder = function(){
  if(this.sides.top==1){
      this.sideLine = new SideCordinate(this.horizontalBorder.x-this.verticalBorder.width,this.horizontalBorder.y,this.horizontalBorder.x+this.roomInfo.width+this.verticalBorder.width,this.horizontalBorder.y,'top','wall');
      this.sideArr.push(this.sideLine);
  }
  if(this.sides.left==1){
      this.sideLine = new SideCordinate(this.verticalBorder.x,this.verticalBorder.y-this.horizontalBorder.height,this.verticalBorder.x,this.verticalBorder.y+this.roomInfo.height+this.horizontalBorder.height,'left','wall');
      this.sideArr.push(this.sideLine);
  }
  //door
  if(this.sides.left==2){
      this.sideLine = new SideCordinate(this.doorVertical.x-this.doorVertical.width,this.doorVertical.y,this.doorVertical.width,this.doorVertical.height,'left','door');
      this.sideArr.push(this.sideLine);
      console.log("door");
  }
  if(this.sides.right==1){
      this.sideLine = new SideCordinate(this.verticalBorder.x+this.roomInfo.width,this.verticalBorder.y-this.horizontalBorder.height,this.verticalBorder.x+this.roomInfo.width,this.verticalBorder.y+this.roomInfo.height+this.horizontalBorder.height,'right','wall');
      this.sideArr.push(this.sideLine);
  }
  if(this.sides.bottom==1){
      this.sideLine = new SideCordinate(this.horizontalBorder.x-this.verticalBorder.width,
        this.horizontalBorder.y+this.roomInfo.height,
        this.horizontalBorder.x+this.roomInfo.width+this.verticalBorder.width,
        this.horizontalBorder.y+this.roomInfo.height,'bottom','wall');
      this.sideArr.push(this.sideLine);
  }
  // if(this.sides.bottom==2){
  //     this.sideLine = new SideCordinate(this.horizontalBorder.x-this.verticalBorder.width,
  //       this.horizontalBorder.y+this.roomInfo.height,
  //       this.horizontalBorder.x+this.roomInfo.width+this.verticalBorder.width,
  //       this.horizontalBorder.y+this.roomInfo.height,'bottom','door');
  //     this.sideArr.push(this.sideLine);
  // }
}


  this.renderBorder = function(){
    if(this.sides.top==1){
      this.c.beginPath();
      this.c.drawImage(this.horiBorderImage,this.horizontalBorder.x,this.horizontalBorder.y-this.horizontalBorder.height,
        this.horizontalBorder.width,this.horizontalBorder.height);
        for (var i = 0; i < this.sideArr.length; i++) {
          if (this.sideArr[i].side=='top') {
              this.sideArr[i].x3 = this.horizontalBorder.x-this.verticalBorder.width;
              this.sideArr[i].y3 = this.horizontalBorder.y;
              this.sideArr[i].x4 = this.horizontalBorder.x+this.roomInfo.width+this.verticalBorder.width;
              this.sideArr[i].y4 = this.horizontalBorder.y;
          }
        }
    }
    if(this.sides.right==1){
      this.c.beginPath();
      this.c.drawImage(this.vertiBorderImage,this.verticalBorder.x+this.roomInfo.width,this.verticalBorder.y,
      this.verticalBorder.width,this.verticalBorder.height);
      for (var i = 0; i < this.sideArr.length; i++) {
        if (this.sideArr[i].side=='right') {
            this.sideArr[i].x3 = this.verticalBorder.x+this.roomInfo.width;
            this.sideArr[i].y3 = this.verticalBorder.y;
            this.sideArr[i].x4 = this.verticalBorder.x+this.roomInfo.width;
            this.sideArr[i].y4 = this.verticalBorder.y+this.roomInfo.height;
        }
      }
    }
    if(this.sides.bottom==1){
      this.c.beginPath();
      this.c.drawImage(this.horiBorderImage,this.horizontalBorder.x,this.horizontalBorder.y+this.roomInfo.height,
      this.horizontalBorder.width,this.horizontalBorder.height);
      for (var i = 0; i < this.sideArr.length; i++) {
        if (this.sideArr[i].side=='bottom') {
            this.sideArr[i].x3 = this.horizontalBorder.x-this.verticalBorder.width;
            this.sideArr[i].y3 = this.horizontalBorder.y+this.roomInfo.height;
            this.sideArr[i].x4 = this.horizontalBorder.x+this.roomInfo.width+this.verticalBorder.width;
            this.sideArr[i].y4 = this.horizontalBorder.y+this.roomInfo.height;
        }
      }
    }
    if(this.sides.left==1){
      this.c.beginPath();
      this.c.drawImage(this.vertiBorderImage,this.verticalBorder.x-this.verticalBorder.width,this.verticalBorder.y,
      this.verticalBorder.width,this.verticalBorder.height);
      for (var i = 0; i < this.sideArr.length; i++) {
        if (this.sideArr[i].side=='left') {
            this.sideArr[i].x3 = this.verticalBorder.x;
            this.sideArr[i].y3 = this.verticalBorder.y-this.horizontalBorder.height;
            this.sideArr[i].x4 = this.verticalBorder.x;
            this.sideArr[i].y4 = this.verticalBorder.y+this.roomInfo.height+this.horizontalBorder.height;
        }
      }
    }
    if(this.sides.left==2){
      if(this.alreadyOpen==true){
        this.c.save();
        this.c.translate(this.doorVertical.x,this.doorVertical.y+(this.doorVertical.height/2));
        //this.c.rotate(-Math.PI/2);
        this.c.rotate(0);// in radian

        this.c.translate(-this.doorVertical.x,-this.doorVertical.y+(this.doorVertical.height/2));
        this.c.drawImage(this.vertiDoorImage,this.doorVertical.x-this.doorVertical.width,this.doorVertical.y-(this.doorVertical.height/2),
        this.doorVertical.width,this.doorVertical.height);

        for (var i = 0; i < this.sideArr.length; i++) {
          if (this.sideArr[i].side=='left') {
              this.sideArr[i].x3 = this.doorVertical.x;
              this.sideArr[i].y3 = this.doorVertical.y-(this.doorVertical.height/2);
              this.sideArr[i].x4 = this.doorVertical.x;
              this.sideArr[i].y4 = this.doorVertical.y+(this.doorVertical.height/2);
          }
        }
        this.c.restore();


      }
      else{

        this.c.beginPath();
        this.c.drawImage(this.vertiDoorImage,this.doorVertical.x-this.doorVertical.width,this.doorVertical.y-(this.doorVertical.height/2),
        this.doorVertical.width,this.doorVertical.height);
        for (var i = 0; i < this.sideArr.length; i++) {
          if (this.sideArr[i].side=='left') {
              this.sideArr[i].x3 = this.doorVertical.x-10;
              this.sideArr[i].y3 = this.doorVertical.y-(this.doorVertical.height/2);
              this.sideArr[i].x4 = this.doorVertical.x;
              this.sideArr[i].y4 = this.doorVertical.y+(this.doorVertical.height/2);
          }
        }
        //console.log(this.doorVertical.x+" before");
      }

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
            this.player.moveX -=1;



          }
          //check left side of collision
          if(this.verticalBorder.x<=this.player.x && this.verticalBorder.y+this.verticalBorder.height>this.player.y){
            console.log("left side");
            this.player.moveX +=1;
          //  this.player.x+=200;


          }
        }
    }
    //collsion test on the left wall
    if(this.sides.left ==2){
      if(this.doorVertical.x>= this.player.x-(this.player.width/2) &&
        this.doorVertical.x-this.doorVertical.width<= this.player.width +this.player.x-(this.player.width/2) &&
        this.doorVertical.y+this.doorVertical.height>= this.player.y-(this.player.height/2) &&
        this.doorVertical.y<=this.player.y+this.player.height-(this.player.height/2)){
          console.log("collided with door");
          //check right side of collision
          this.isCollided = true;
          if(this.doorVertical.x>this.player.x){
            console.log("right side door");
            this.player.moveX +=1;
          }
          //check left side of collision
          if(this.doorVertical.x<=this.player.x && this.doorVertical.y+this.doorVertical.height>this.player.y){
            console.log("left side door");
            this.player.moveX -=1;
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
            this.player.moveX -=1;
            //this.player.movedown= true;
            //this.player.x-=10;
          }

          //check left side of collision
          if(this.verticalBorder.x+(this.roomInfo.width)<=this.player.x ){
            console.log("left side");
            this.player.moveX +=1;

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
            this.player.moveY -=1;
          }
          //check bottom side of collision
          if(this.horizontalBorder.y<this.player.y ){
            console.log("bottom side");
            this.player.moveY +=1;
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
            this.player.moveY -=1;
          }
          //check bottom side of collision
          if(this.horizontalBorder.y+(this.roomInfo.height)<this.player.y ){
            console.log("bottom side");
            this.player.moveY +=1;


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
