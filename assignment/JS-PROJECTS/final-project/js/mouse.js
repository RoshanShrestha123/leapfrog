function Mouse(c){
  var that = this;
  this.c = c;
  this.x = null;
  this.y = null;
  this.width=50;
  this.height=50;
  this.img = document.getElementById('crossair');

  this.draw = function(){

    this.c.drawImage(this.img,this.x-this.width/2,this.y-this.height/2,this.width,this.height);
  }
  document.addEventListener('mousemove',function(event){
    that.x= event.pageX;
    that.y = event.pageY;
    
  });
}
