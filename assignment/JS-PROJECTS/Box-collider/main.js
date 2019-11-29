


//BOX class
function Box(parentElement){
  this.x=10;
  this.y=10;
  this.size = Math.floor(Math.random()*20)+10;
  this.width =this.size;
  this.height = this.size;
  this.element = null;
  this.parentElement = parentElement;
  this.speed = 5;
  this.directionArr=[-1,1];
  this.color = ['red','yellow','blue'];
  this.boxColor = this.color[Math.floor(Math.random()*this.color.length)];
  this.boxDirectionX =this.directionArr[Math.floor(Math.random()*this.directionArr.length)];
  this.boxDirectionY =this.directionArr[Math.floor(Math.random()*this.directionArr.length)];
  // console.log("directionX",this.boxDirectionX);
  // console.log("directionY",this.boxDirectionY);


  //CREATING BOX DIV INSIDE PARENT ELEMENT
  this.draw = function(){

    var box = document.createElement("div");
    box.style.left=this.x + "px";
    box.style.top = this.y + "px";
    box.style.width=this.width +"px";
    box.style.height= this.height+ "px";
    box.style.position="absolute";
    box.style.background=this.boxColor;
    // box.style.backgroundImage="url('tick.png')";

    box.style.backgroundSize="cover";
    this.element=box;
    this.parentElement.appendChild(box);

  }

  this.setSpeed=function(){
    this.speed=Math.floor(Math.random()*2)+1;
  }


  //SETTING POSITION OF EACH BOX
  this.setPosition = function(x,y){
    this.x = x;
    this.y = y;
  }
  this.update = function(){

    this.x+=this.speed*this.boxDirectionX;
    this.y+=this.speed*this.boxDirectionY;

    this.element.style.left=this.x +"px";
    this.element.style.top=this.y +"px";

  }
  this.checkCollision= function(currentBox,boxesArr,currentIndex){
    var currentBox = currentBox;
    for (var i = 0; i < boxesArr.length; i++) {
    if(currentIndex!=i){
      if(currentBox.x+currentBox.width>= boxesArr[i].x &&
        currentBox.y+currentBox.height>=boxesArr[i].y &&
      currentBox.x<= boxesArr[i].x+ boxesArr[i].width &&
      currentBox.y<=boxesArr[i].y+boxesArr[i].height){

        if(Math.abs(currentBox.x-boxesArr[i].x)>Math.abs(currentBox.y-boxesArr[i].y)){
          console.log("side ");
          this.boxDirectionX*= -1;
          this.boxColor = this.color[Math.floor(Math.random()*this.color.length)];
        }
        else{
          console.log("up,down");
          this.boxDirectionY*= -1;
        }




      }
      else{

      }
    }

    }


  }
}



//GAME CLASS
function Game(parentElement,boxCount){
  var boxes = [];
  var xPosition;
  var yPosition;
  var overlap= false;
  var that = this;
  this.createGameScreen = function(){

    this.gameHeight= 700;
    this.gameWidth = 700;
    parentElement.style.height=this.gameHeight + "px";
    parentElement.style.width=this.gameWidth + "px";
    parentElement.style.background="black";
    parentElement.style.position="relative";


  }

  //return the unique Position
  this.generateRandomPosition = function(boxObj,j){
console.log("j:",j);
    xPosition = Math.floor(Math.random()*(this.gameWidth-boxObj.width));
    yPosition = Math.floor(Math.random()*(this.gameHeight-boxObj.height));
    //check if box overlap each other
    if(j!=0){
      console.log("array length", boxes.length);
      for (var i = 0; i < boxes.length; i++) {
        if(i!=j){
          if(xPosition+boxObj.width>= boxes[i].x &&
            yPosition+boxObj.height>=boxes[i].y &&
          xPosition<= boxes[i].x+ boxes[i].width &&
          yPosition<=boxes[i].y+boxes[i].height){
            console.log("overlaped");
            xPosition = Math.floor(Math.random()*(this.gameWidth-boxObj.width));
            yPosition = Math.floor(Math.random()*(this.gameHeight-boxObj.height));
            i=-1;
          }
        }

      }

    }


  }

    //game start main function
  this.startGame = function(){
    this.createGameScreen();
    for (var i = 0; i < boxCount; i++) {
      var boxObj = new Box(parentElement);
      this.generateRandomPosition(boxObj,i);
      boxObj.setSpeed();
      boxObj.setPosition(xPosition,yPosition);
      boxObj.draw();
      boxes.push(boxObj)
    }


  //looping here
    setInterval(function(){
      for (var i = 0; i < boxes.length; i++) {
        if(boxes[i].x+boxes[i].width>=that.gameWidth){
          boxes[i].boxDirectionX=-1;
        }
        else if (boxes[i].x<=0 ) {
          boxes[i].boxDirectionX=1;
        }

        if(boxes[i].y+boxes[i].height>=that.gameHeight){
          boxes[i].boxDirectionY=-1;
        }
        else if (boxes[i].y<=0) {
          boxes[i].boxDirectionY=1;
        }
        boxes[i].checkCollision(boxes[i],boxes,i);
       boxes[i].update();
      // boxes[i].draw();
      }
    },10);
  }
}

var gameScreen = document.getElementById('gameScreen');
var gameObj = new Game(gameScreen,10);
gameObj.startGame();
