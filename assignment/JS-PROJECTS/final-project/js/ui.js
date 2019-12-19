function Ui(c,canvas){
  this.c = c;
  this.canvas = canvas;
  this.totalScore = 0;
  this.totalAmmo = 25;
  this.bulletInAmmo = 25;
  this.currentBullet = 25;
  this.counter =0;
  this.allShown=false;
  this.playerShowMessageCounter = 0;


  this.displayScore = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='100px gameFont';
    this.c.fontStyle
    this.c.fillText(this.totalScore,1000,70);
    this.c.fill();
  }
  this.updateScore = function(score){
    this.totalScore=score;
  }

  this.displayCurrentBullet = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='100px gameFont';
    this.c.fillText(this.currentBullet,20,70);
    this.c.fill();
  }
  this.displayTotalAmmo = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='40px gameFont';
    this.c.fillText('/'+this.currentBullet,150,40);
    this.c.fill();
  }
  this.displayAuto = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='40px gameFont';
    this.c.fillText('AUTO',150,70);
    this.c.fill();
  }
  this.updateBullet = function(currentBullet){
    this.currentBullet = currentBullet;
  }

  this.renderUi = function(player,enemy){
    this.player = player;
    this.enemy= enemy;

    this.mesgCounter++;
    this.displayScore();
    this.displayCurrentBullet();
    this.displayTotalAmmo();
    this.displayAuto();

    if(this.player.showMessage == true){
      this.playerShowMessageCounter++;
      if(this.playerShowMessageCounter>100){
          this.message("Press E to Supress enemy",10,this.canvas.height-50);
          this.player.showMessage=false;

      }else if (this.playerShowMessageCounter>2000) {
        this.playerShowMessageCounter=0;
      }

    }
    if(this.allShown!=true){
      if(this.counter>100 && this.counter<700){
        this.message("Move your mouse to rotate player",10,this.canvas.height-20);
      }else if (this.counter>700 && this.counter<1400) {
        this.message("A/W/S/D or up/down/left/right to move player",10,this.canvas.height-20);
      }
      else if (this.counter>1400 && this.counter<2100) {
        this.message("mouse left click to Shoot",10,this.canvas.height-20);
      }
      else if(this.counter>2100){
        this.allShown=true;
      }

      this.counter++;
    }



  }
  this.message = function(mesg,x,y){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='20px gameFont';
    this.c.fillText(mesg,x,y);

    this.c.fill();
  }
  this.enemyMesg = function(){

  }
}
