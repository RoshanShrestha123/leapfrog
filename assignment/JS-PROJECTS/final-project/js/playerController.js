function Player(c,width,height){
  var that = this;
  this.c = c;
  this.gameWidth=width;
  this.gameHeight=height;
  this.x=200;
  this.y=100;
  this.speed =2;
  this.width=50;
  this.height=50;
  this.moveup= false;
  this.movedown = false;
  this.moveleft=false;
  this.moveright=false;
  this.mouseX=null;
  this.mouseY=null;
  this.angle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);
  this.img = document.getElementById('player');
  this.mouseObj = new Mouse(this.c,this.mouseX,this.mouseY);
  this.draw = function(){
    this.mouseObj.draw(this.mouseX,this.mouseY);
    this.angle = Math.atan2(this.mouseY-this.y,(this.mouseX-this.x));
    this.c.save();
    this.c.translate(this.x,this.y);
    this.c.rotate(-Math.PI/180);
    this.c.rotate(this.angle);
    this.c.translate(-this.x,-this.y);
    //this.c.tra
    this.c.drawImage(this.img,this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    // this.c.beginPath();
    // this.c.rect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    // this.c.fill();
    this.c.restore();

  }

  this.drawLine = function(){
    this.c.beginPath();
    this.c.moveTo(this.x,this.y);
    //console.log(this.mouseX);
    this.c.strokeStyle="red";
    this.c.lineTo(this.mouseX,this.mouseY);
    this.c.stroke();
  }

  // this.drawLineFromOrigin = function(){
  //   this.c.beginPath();
  //   this.c.moveTo(0,0);
  // //  console.log(this.mouseX);
  //   this.c.strokeStyle="green";
  //   this.c.lineTo(this.x,this.y);
  //   this.c.stroke();
  // }

  this.drawText = function(){

    c.font = "10px Arial";
    c.fillText(this.angle*180/ Math.PI, this.x+this.width/2, this.y+this.height/2);
  }

  this.movementUp = function(){ //move up
    this.y -=this.speed * Math.cos(this.angle*180/Math.PI);
    this.x +=this.speed *Math.sin(this.angle*180/Math.PI);
  }
  this.movementDown = function(){// move down
    this.y +=this.speed * Math.cos(this.angle*180/Math.PI);
    this.x +=this.speed *Math.sin(this.angle*180/Math.PI);
  }
  this.movementLeft = function(){// move left
    this.x -=this.speed;
  }
  this.movementRight = function(){//move right
    this.x +=this.speed;
  }

  window.addEventListener('keydown',function(event){
    if(event.keyCode==37||event.keyCode==65){
      console.log("pressed left");
      that.moveleft=true;
    }
    if(event.keyCode==39||event.keyCode==68){
      console.log("pressed right");
      that.moveright=true;
    }
    if(event.keyCode==38||event.keyCode==87){
      console.log("pressed up");
      that.moveup=true;
    }
    if(event.keyCode==40 || event.keyCode==83){
      console.log("pressed down");
      that.movedown=true;
    }
  });
  window.addEventListener('keyup',function(event){
    if(event.keyCode==37 ||event.keyCode==65){
      console.log("pressed left release");
      that.moveleft=false;
    }
    if(event.keyCode==39||event.keyCode==68){
      console.log("pressed right release");
      that.moveright=false;
    }
    if(event.keyCode==38 ||event.keyCode==87){
      console.log("pressed up release");
      that.moveup=false;
    }
    if(event.keyCode==40 || event.keyCode==83){
      console.log("pressed down release");
      that.movedown=false;
    }
  });
  window.addEventListener('mousemove',function(event){
    that.mouseX= event.pageX;
    that.mouseY = event.pageY;
  //  console.log("x:",that.mouseX);
  });
}
