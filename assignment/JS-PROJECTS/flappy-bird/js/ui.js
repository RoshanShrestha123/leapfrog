function UiControl(c,gameWidth,gameHeight){
  this.x;
  this.y;


  this.drawWelcomeMesg = function(){
    var welcomeImg = document.getElementById('welcome');
    c.beginPath();
    c.drawImage(welcomeImg,100,150);
  }
  this.drawGameOver = function(){
    var gameover = document.getElementById('gameover');
    c.beginPath();
    c.drawImage(gameover,100,150);
  }

}
