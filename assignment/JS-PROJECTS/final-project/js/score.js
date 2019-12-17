function Score(){
  this.score = 0;

  this.increaseScore = function(score){
    this.score+=score;
  }
  this.decreaseScore = function(score){
    this.score-=score;
  }
  this.displayScore = function(){
    console.log(this.score);
  }
}
