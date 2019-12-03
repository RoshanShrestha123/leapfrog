function Obs(c,gameWidth,gameHeight){
  this.x1=gameWidth;
  this.x2=this.x1;
  this.height = 500;
  this.width =70;
  this.y1=-Math.floor(Math.random()*500);
  this.y2=(this.y1+this.height)+150;
//  console.log(this.y1);

  this.gameWidth=gameWidth;
  this.gameHeight = gameHeight;


  this.drawUpObs = function(){
    c.beginPath();
    c.rect(this.x1,this.y1,this.width,this.height);
    c.fill();

  }
  this.drawDownObs = function(){
    c.beginPath();
    c.rect(this.x2,this.y2,this.width,this.height);
    c.fill();
  }
  this.update = function(){
    this.x1-=1;
    this.x2-=1;
    this.drawUpObs();
    this.drawDownObs();
  }
}
