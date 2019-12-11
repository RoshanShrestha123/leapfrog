function Player(c,width,height){
  var that = this;
  this.c = c;
  this.gameWidth=width;
  this.gameHeight=height;
  this.x=this.gameWidth/2;
  this.y=this.gameHeight/2;
  this.speed =1;
  this.width=70;
  this.height=70;
  this.moveup= false;
  this.movedown = false;
  this.moveleft=false;
  this.moveright=false;
  this.midPointPlayerX=this.width/2;
  this.midPointPlayerY = this.height/2;
  this.angle = 0;
  this.lookAngle=0;
  this.img = document.getElementById('player');
  this.mouseObj = new Mouse(this.c);
  this.mouseX=this.mouseObj.x;
  this.mouseY=this.mouseObj.y;
  this.rayArr = [];
  this.moveX=0;
  this.moveY=0;





  this.draw = function(){
  //  this.drawRays();

    this.mouseObj.draw();
    this.mouseX=this.mouseObj.x;
    this.mouseY=this.mouseObj.y;
    this.lookAngle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
    this.c.save();
    this.c.translate(this.x,this.y);
    this.c.rotate(-Math.PI/2);
    this.c.rotate(this.lookAngle);
    this.c.translate(-this.x,-this.y);
    this.c.drawImage(this.img,this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    // this.c.fillStyle="black";
    // this.c.rect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    // this.c.fill();
    this.c.restore();

  }

  // this.drawRays = function(){
  //   for (var i = 0; i < this.rayArr.length; i++) {
  //     if(i==0){
  //       this.rayArr[i].updateAngle(this.x,this.y,this.lookAngle*180/Math.PI-this.rayArr.length);
  //     }
  //     else{
  //       this.rayArr[i].updateAngle(this.x,this.y,(this.rayArr[0].angle)+i);
  //     }
  //     this.rayArr[i].checkRayCollision(this.rayArr[i].startPosition.x,this.rayArr[i].startPosition.y,this.rayArr[i].x,this.rayArr[i].y,100,40,100,400);
  //
  //
  //   }
  //
  // }

  // this.initRay = function(){
  //   for(var i=0; i<1;i++){
  //     this.rayAngle = this.lookAngle*180/Math.PI;
  //     this.rayObj = new Ray(this.c,this.rayAngle);
  //     this.rayArr.push(this.rayObj);
  //   }
  // }

  this.drawLine = function(){
    this.c.beginPath();
    this.c.moveTo(this.x,this.y);
    this.c.strokeStyle="red";
    this.c.lineTo(this.mouseX,this.mouseY);
    this.c.stroke();
  }

  this.drawLineFromOrigin = function(){
    this.c.beginPath();
    this.c.moveTo(0,0);
    this.c.strokeStyle="green";
    this.c.lineTo(this.x,this.y);
    this.c.stroke();
  }

  this.drawText = function(){
    c.font = "10px Arial";
    c.fillText(Math.floor(this.lookAngle*180/ Math.PI), this.x+this.width/2, this.y+this.height/2);
  }

  this.movementUp = function(){ //move up


    //console.log("angle:", this.y);
    this.moveY =this.speed*Math.sin(this.lookAngle);
    this.moveX =this.speed*Math.cos(this.lookAngle);
  }
  this.movementDown = function(){// move down
    //console.log("angle:", this.y);
    this.moveY =-this.speed*Math.sin(this.lookAngle) ;
    this.moveX =-this.speed*Math.cos(this.lookAngle);
  }
  this.movementLeft = function(){// move left
    // this.y -=this.speed * Math.cos(this.angle*180/Math.PI);
    // this.x -=this.speed *Math.sin(this.angle*180/Math.PI);
  }
  this.movementRight = function(){//move right
    // this.y +=this.speed * Math.cos(this.angle*180/Math.PI);
    // this.x +=this.speed *Math.sin(this.angle*180/Math.PI);
  }

  document.addEventListener('keydown',function(event){
    if(event.keyCode==37||event.keyCode==65){
      that.moveleft=true;
    }
    if(event.keyCode==39||event.keyCode==68){
      that.moveright=true;
    }
    if(event.keyCode==38||event.keyCode==87){
      that.moveup=true;
    }
    if(event.keyCode==40 || event.keyCode==83){
      that.movedown=true;
    }
  });
  document.addEventListener('keyup',function(event){
    if(event.keyCode==37 ||event.keyCode==65){
      that.moveleft=false;
    }
    if(event.keyCode==39||event.keyCode==68){
      that.moveright=false;
    }
    if(event.keyCode==38 ||event.keyCode==87){
      that.moveup=false;
    }
    if(event.keyCode==40 || event.keyCode==83){
      that.movedown=false;
    }
  });

}
