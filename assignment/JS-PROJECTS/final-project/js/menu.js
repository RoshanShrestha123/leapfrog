function Menu(canvas,c){
  this.c = c;
  this.canvas = canvas;
  this.x = 0;
  this.y = 0;
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.bgImage = document.getElementById('menuBg');
  this.mouseObj = new Mouse(this.c);



  this.showMenu = function(){
    this.c.beginPath();
    this.c.drawImage(this.bgImage,this.x,this.y,this.width,this.height);
    this.playBtn();
  //  this.optionBtn();
    this.mouseObj.draw();
  }

  this.playBtn = function(){
    this.c.beginPath();
    this.c.fillStyle='rgba(255,255,255,1)';
    this.c.rect(10,300,300,50);
    this.c.fill();
    this.playText();
  }
  this.playText = function(){
    this.c.beginPath();
    this.c.fillStyle='rgba(0,0,0,1)';
    this.c.font = '50px gameFont';
    this.c.fillText("Play",80,340);
    this.c.fill();
  }
  this.optionBtn = function(){
    this.c.beginPath();
    this.c.fillStyle='rgba(255,255,255,1)';
    this.c.rect(10,380,300,50);
    this.c.fill();
  }
}
