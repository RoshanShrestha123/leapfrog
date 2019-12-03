function Obs(c,gameWidth,gameHeight){
  this.x=gameWidth;
  this.height = 300;
  this.width =70;
  this.y1=0;
  this.y2=this.height+150;

  this.gameWidth=gameWidth;
  this.gameHeight = gameHeight;


  this.drawUpObs = function(){
    c.beginPath();
    c.rect(this.x,this.y1,this.width,this.height);
    c.fill();
  }
  this.drawDownObs = function(){
    c.beginPath();
    c.rect(this.x,this.y2,this.width,this.height);
    c.fill();
  }
  this.update = function(){
    this.x-=1;
    this.drawUpObs();
    this.drawDownObs();
  }
}
