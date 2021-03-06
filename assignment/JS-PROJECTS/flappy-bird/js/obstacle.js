/**
 * this is the class of Obstacle [piller]
 * @method      Obs
 * @param       {context} c          canvas context
 * @param       {int} gameWidth  game screen width
 * @param       {int} gameHeight game screen height
 * @constructor
 */

function Obs(c,gameWidth,gameHeight){
  this.x1=gameWidth;
  this.x2=this.x1;
  this.height = 320;
  this.width =52;
  this.y1=-Math.floor(Math.random()*200);
  this.y2=(this.y1+this.height)+100;
  this.gameWidth=gameWidth;
  this.gameHeight = gameHeight;

//this draw the piller on top position
  this.drawUpObs = function(){
    var img = document.getElementById('pipeUp');
    c.beginPath();
    c.drawImage(img,this.x1,this.y1,this.width,this.height);

  }

  //this draw the piller on buttom position
  this.drawDownObs = function(){
    var img = document.getElementById('pipeDown');
    c.beginPath();
    c.drawImage(img,this.x2,this.y2,this.width,this.height);
  }

  //increase the x position of the piller every frame by 1 px left <-1px
  this.update = function(){
    this.x1-=1;
    this.x2-=1;
    this.drawUpObs();
    this.drawDownObs();
  }
}
