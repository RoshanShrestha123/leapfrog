function EndScreen(canvas,c){
  var that = this;
  this.c = c;
  this.canvas = canvas;
  this.x = 0;
  this.y = 0;
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.bgImage = document.getElementById('menuBg');
  this.exitEndScreen = false;
  this.maxScore  =1000;
  this.highScore = 0;

  this.showEndScreen = function(score){
    this.score =score;
    if(this.score>=this.highScore){
      this.highScore=this.score;
      localStorage.setItem('highScore',this.highScore);
    }else{
      localStorage.setItem('highScore',this.highScore);
    }
  //  this.calculateGrade();
    this.showEndScreenRect();
    this.totalScore(score);
    this.yourBest();
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='70px gameFont';
    this.c.fillText("Mission Finished",400,200);
    this.c.fill();

  }
  this.showEndScreenRect = function(){
    this.c.beginPath();
    this.c.fillStyle='black';
    this.c.rect(this.x,this.y,this.width,this.height);
    this.c.fill();

  }
  this.totalScore = function(score){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='50px gameFont';
    this.c.fillText("total score",100,300);
    this.c.font='40px gameFont';
    this.c.fillText(score,100,350);
    this.c.fill();
    this.showGrade(this.finalGrade);
  }
  this.showGrade = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='50px gameFont';
    this.c.fillText("grade",100,500);
    this.c.font='40px gameFont';
    this.c.fillText(this.grade,100,550);
    this.c.fill();
    this.calculateGrade();
  }
  this.calculateGrade = function(){
    if(this.score <=0){
      this.grade ='D';
    }
    else if (this.score>0 && this.score<1000) {
      this.grade ='C';
    }
    else if (this.score>=1000 && this.score<2000) {
      this.grade ='B';
    }
    else if (this.score>=2000) {
      this.grade ='A';
    }
  //  this.showGrade();
  }
  this.yourBest = function(){
    this.c.beginPath();
    this.c.fillStyle='white';
    this.c.font='50px gameFont';
    this.c.fillText("your best",700,300);
    this.c.font='40px gameFont';
    this.c.fillText(localStorage.getItem('highScore'),700,350);
    this.c.fill();
  }
  document.addEventListener('keydown',function(event){
    if(event.keyCode==82 && that.exitEndScreen==false){
      that.exitEndScreen=true;
    }
  });

}
