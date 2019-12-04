function Bird(c,gameWidth,gameHeight){
  this.gameWidth=gameWidth;
  this.gameHeight = gameHeight;
  this.x=this.gameWidth/2-20;
  this.y=200;
  this.dy=1;
  this.c = c;
  this.width=34;
  this.height=24;
  this.gravity=0.1;
  this.isAlive = true;
  this.rotate=10;
  var img1 = document.getElementById('up-flap');
  var img2 = document.getElementById('middle-flap');
  var img3 = document.getElementById('down-flap');
  this.imageCollection=[img1,img2,img3,img2];
  console.log(this.imageCollection);
  var counter=0;
  var i=0;

  var birdImageArr = [];

  this.draw = function(){
    c.beginPath();

    // c.rect(this.x,this.y,this.width,this.height);
    //c.rotate(20*Math.PI/180);
    c.drawImage(this.imageCollection[i],this.x,this.y,this.width,this.height);
    //c.rotate(this.rotate);
    c.fill();
    if(counter>15){
      i++;
      if(i>3){
        i=0;
      }
      counter=0;
    }

    counter++;
  }
  this.update = function(){
    this.checkBorderCollision();
    this.dy+=this.gravity;
    this.y+=this.dy;
    this.draw();
    console.log("dy",this.dy);

  }
  this.checkBorderCollision = function(){
    if(this.x<0|| this.x+this.width>this.gameWidth || this.y<0 || this.y+this.height>=this.gameHeight-100){
      this.y=(this.gameHeight-100)-this.height;
      console.log("collided");
      this.isAlive=false;
    }
  }

}
