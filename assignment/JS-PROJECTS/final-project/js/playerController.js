function Player(c,width,height){
  var that = this;
  this.c = c;
  this.gameWidth=width;
  this.gameHeight=height;
  this.x=this.gameWidth/2;
  this.y=this.gameHeight/2;
  this.speed =1;
  this.width=50;
  this.height=78;
  this.sx=0;
  this.sy=0;
  this.sWidth =72;
  this.sHeight =100;
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
  this.moveX=0;
  this.moveY=0;
  this.imageFrame =0;
  this.counter =0;
  this.dFrame = 1;
  this.collided = false;
  this.lineArr = [];
  this.rayArr = [];
  this.sawEnemy =false;
  this.enemyArr=[];
  this.visualStatus = false;
  this.sideOfEnemy = function(enemyArr){
    this.enemyArr = enemyArr;

    for (var i = 0; i < enemyArr.length; i++) {
      this.leftSideOfPlayer ={
        x3:this.enemyArr[i].x-(this.enemyArr[i].width/2),
        y3:this.enemyArr[i].y-(this.enemyArr[i].height/2),
        x4:this.enemyArr[i].x-(this.enemyArr[i].width/2),
        y4:(this.enemyArr[i].y-(this.enemyArr[i].height/2))+this.enemyArr[i].height,
        tag:'enemy'+this.enemyArr[i].index,
        index:this.enemyArr[i].index
      }
      this.lineArr.push(this.leftSideOfPlayer);
      this.rightSideOfPlayer ={
        x3:(this.enemyArr[i].x-(this.enemyArr[i].width/2))+this.enemyArr[i].width,
        y3:(this.enemyArr[i].y-(this.enemyArr[i].height/2)),
        x4:(this.enemyArr[i].x-(this.enemyArr[i].width/2))+this.enemyArr[i].width,
        y4:(this.enemyArr[i].y-(this.enemyArr[i].height/2))+this.enemyArr[i].height,
        tag:'enemy'+this.enemyArr[i].index,
        index:this.enemyArr[i].index
      }
      this.lineArr.push(this.rightSideOfPlayer);
      this.bottomSideOfPlayer ={
        x3:this.enemyArr[i].x-(this.enemyArr[i].width/2),
        y3:(this.enemyArr[i].y-(this.enemyArr[i].height/2))+this.enemyArr[i].height,
        x4:(this.enemyArr[i].x-(this.enemyArr[i].width/2))+this.enemyArr[i].width,
        y4:(this.enemyArr[i].y-(this.enemyArr[i].height/2))+this.enemyArr[i].height,
        tag:'enemy'+this.enemyArr[i].index,
        index:this.enemyArr[i].index
      }
      this.lineArr.push(this.bottomSideOfPlayer);
      this.topSideOfPlayer ={
        x3:this.enemyArr[i].x-(this.enemyArr[i].width/2),
        y3:this.enemyArr[i].y-(this.enemyArr[i].height/2),
        x4:(this.enemyArr[i].x-(this.enemyArr[i].width/2))+this.enemyArr[i].width,
        y4:this.enemyArr[i].y-(this.enemyArr[i].height/2),
        tag:'enemy'+this.enemyArr[i].index,
        index:this.enemyArr[i].index
      }
      this.lineArr.push(this.topSideOfPlayer);
      console.log(this.lineArr);

    }
  //  console.log(this.lineArr);

  }


  this.initArrayObs = function(arr){
    this.lineArr = arr;
    console.log(this.lineArr);
  }



//-----------------------------------------function to render player------------------------------------------------------//
//render the player sprite every frame
  this.draw = function(){
    this.mouseObj.draw();
    this.mouseX=this.mouseObj.x;
    this.mouseY=this.mouseObj.y;
    this.sx = this.sWidth * this.imageFrame;
    this.lookAngle = Math.atan2(this.mouseY-this.y,this.mouseX-this.x);// in radian
    this.c.save();
    this.c.translate(this.x,this.y);
    this.c.rotate(-Math.PI/2);
    this.c.rotate(this.lookAngle);// in radian
    this.c.translate(-this.x,-this.y);
    this.c.drawImage(this.img,this.sx,this.sy,this.sWidth,this.sHeight,this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    this.c.restore();





  }
//-----------------------------------------function to control player------------------------------------------------------//
//player to move forward respective to the mouse position
  this.movementUp = function(){ //move up
    this.moveY =this.speed*Math.sin(this.lookAngle);
    this.moveX =this.speed*Math.cos(this.lookAngle);
  }
  //player to move forward respective to mouse position
  this.movementDown = function(){// move down
    this.moveY =-this.speed*Math.sin(this.lookAngle) ;
    this.moveX =-this.speed*Math.cos(this.lookAngle);
  }
  //player to move left respective to mouse position
  this.movementLeft = function(){// move left
    //// TODO:
  }
  //player to move right respective to mouse position
  this.movementRight = function(){//move right
    // TODO:
  }



  //-----------------------------------------event listener------------------------------------------------------//
/**
 * Event listener to detect the KEY DOWN event
 */
  document.addEventListener('keydown',function(event){
    if(event.keyCode==37||event.keyCode==65){
      that.moveleft=true;
    }
    if(event.keyCode==39||event.keyCode==68){
      that.moveright=true;
    }
    if(event.keyCode==38||event.keyCode==87){
        that.moveup=true;
        that.counter++;
        if (that.counter>=2) {
          console.log(that.imageFrame);
          that.imageFrame+= that.dFrame;
          if(that.imageFrame>=3){
            that.dFrame=-1;
          }
          if(that.imageFrame<=0){
            that.dFrame= 1;
          }
          that.counter=0;
        }
    }

    if(event.keyCode==40 || event.keyCode==83){
      that.movedown=true;
    }

    if(event.keyCode==69){
      console.log("hand in the air now!!!");
    }
  });
  /**
   * Event to listener to detect the KEY UP event
   */
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
  //-----------------------------------------RAYCATING from the enemy the cordinate ------------------------------------------------------//

  this.drawRays = function(){
    if(this.moveup==true){
      for (var i = 0; i < this.enemyArr.length; i++) {
        for (var j = 0; j < this.lineArr.length; j++) {
          if(this.lineArr[j].tag=='enemy'+i){
            if(this.lineArr[j].index==i){
              this.lineArr[j].x3 -=this.moveX;
              this.lineArr[j].x4 -=this.moveX;
              this.lineArr[j].y3 -=this.moveY;
              this.lineArr[j].y4 -=this.moveY;
            }
          }
        }
      }
    }


    for (var i = 0; i < this.rayArr.length; i++) {
      for (var j = 0; j < this.lineArr.length; j++) {
        for (var k = 0; k < this.enemyArr.length; k++) {
          this.rayArr[i].checkRayCollision(this.lineArr[j],'enemy'+k);
          if(this.rayArr[i].sawPlayer==true){
           this.visualStatus=true;
          }
        }

    }
    this.rayAngle = this.lookAngle*(180/Math.PI);
    this.rayArr[i].updateAngle(this.x,this.y,this.rayAngle+(i-50));
    this.rayArr[i].draw();
    }
    if(this.visualStatus==true){
      this.sawEnemy=true;

    }else{
      this.sawEnemy=false;
    }

    this.visualStatus=false;
  }

  //-----------------------------------------init ray ------------------------------------------------------//

  this.initRay = function(){
    for(var i=0; i<100;i++){
      this.rayAngle =(i-50)+(this.lookAngle*(180/Math.PI));
      this.rayObj = new Ray(this.c,this.rayAngle,this.player);
      this.rayArr.push(this.rayObj);
    }
  }


}
