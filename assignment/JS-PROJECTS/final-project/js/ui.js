function Ui(c){
  this.c = c;
  this.totalScore = 0;
  this.totalAmmo = 25;
  this.bulletInAmmo = 25;
  this.currentBullet = 25;


  this.displayScore = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='100px gameFont';
    this.c.fontStyle
    this.c.fillText(10000,1000,70);
    this.c.fill();
  }
  this.updateScore = function(score){
    this.totalScore=score;
  }

  this.displayCurrentBullet = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='100px gameFont';
    this.c.fontStyle
    this.c.fillText(this.currentBullet,20,70);
    this.c.fill();
  }
  this.displayTotalAmmo = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='40px gameFont';
    this.c.fontStyle
    this.c.fillText('/'+this.currentBullet,150,40);
    this.c.fill();
  }
  this.displayAuto = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='40px gameFont';
    this.c.fontStyle
    this.c.fillText('AUTO',150,70);
    this.c.fill();
  }
  this.updateBullet = function(currentBullet){
    this.currentBullet = currentBullet;
  }

  this.renderUi = function(){
    this.displayScore();
    this.displayCurrentBullet();
    this.displayTotalAmmo();
    this.displayAuto();
  }
}
