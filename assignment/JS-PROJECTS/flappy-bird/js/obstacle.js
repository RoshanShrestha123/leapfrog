function Obs(c,gameWidth,gameHeight){
  this.x1=gameWidth;
  this.x2=this.x1;
  this.height = 320;
  this.width =52;
   //this.y1=-200;
  this.y1=-Math.floor(Math.random()*200);
  this.y2=(this.y1+this.height)+100;
//  console.log(this.y1);

  this.gameWidth=gameWidth;
  this.gameHeight = gameHeight;


  this.drawUpObs = function(){
    var img = document.getElementById('pipeUp');
    c.beginPath();
    c.drawImage(img,this.x1,this.y1,this.width,this.height);

  }
  this.drawDownObs = function(){
    var img = document.getElementById('pipeDown');
    c.beginPath();
    c.drawImage(img,this.x2,this.y2,this.width,this.height);
    // c.rect(this.x2,this.y2,this.width,this.height);
    // c.fill();
  }
  this.update = function(){
    this.x1-=1;
    this.x2-=1;
    this.drawUpObs();
    this.drawDownObs();
  }
}
