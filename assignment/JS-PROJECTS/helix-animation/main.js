function Controller(canvas){
  var that = this;
  canvas.height = 1000;
  canvas.width = 1000;
  this.x=100;
  this.y= 100;
  this.angle =0;
  this.circleArr = [];
  var c = canvas.getContext('2d');
  var circleObj;

 this.init = function(){
   for (var i = 0; i < 15; i++) {
     circleObj = new Circle(c,this.x,this.angle);
     this.circleArr.push(circleObj);
     this.x+=20;
     this.angle +=13;
   }
 }
  setInterval(function(){
    c.clearRect(0,0,canvas.width,canvas.height);
    for (var i = 0; i < that.circleArr.length; i++) {
      that.circleArr[i].update();

    }
  },10);

}
var canvas = document.getElementById('canvas');
var controllerObj = new Controller(canvas);
controllerObj.init();
