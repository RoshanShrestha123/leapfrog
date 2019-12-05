function Controller(canvas){
  var that = this;
  canvas.height = 1000;
  canvas.width = 1000;
  this.x=100;
  this.y= 100;
  this.angle =0;
  this.circleArr = [];
  this.totalRow=10;
  var c = canvas.getContext('2d');
  var circleObj;

 this.init = function(){
   for (var i = 0; i < 15; i++) {
     circleObj = new Circle(c,this.x,this.y,this.angle,i);
     this.circleArr.push(circleObj);
     this.x+=20;
     this.angle +=13;
   }


 }
 this.initCollection = function(){
   // this.init();
   //upper section
this.y=100;
   for (var i = 0; i < this.totalRow; i++) {

     this.init();
     this.y+=15;
     this.angle=0;
     this.x=100;

   }
   //lower section

 this.y=100;
   for (var j = 0; j < this.totalRow; j++) {
     this.init();
     this.y+=15;

     this.angle=180;
     this.x=100;


   }

 }

 this.singleRowAnimation = function(y){
   for (var i = 0; i < this.circleArr.length; i++) {
     this.circleArr[i].update();


   }
 }
  setInterval(function(){
    c.clearRect(0,0,canvas.width,canvas.height);
    that.singleRowAnimation();
  },14);

}
var canvas = document.getElementById('canvas');
var controllerObj = new Controller(canvas);
controllerObj.initCollection();
