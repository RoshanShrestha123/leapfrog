


//BOX class
function Box(parentElement){
  var that = this;
  this.x=10;
  this.y=10;
  this.size = 64;
  this.width =this.size;
  this.height = this.size;
  this.element = null;
  this.parentElement = parentElement;
  this.speed = 5;
  this.imageSlider=0;
  this.imageSliderVertical=0;
  this.isSmash= false;

  this.directionArr=[-1,1];
  this.boxDirectionX =this.directionArr[Math.floor(Math.random()*this.directionArr.length)];
  this.boxDirectionY =this.directionArr[Math.floor(Math.random()*this.directionArr.length)];
  this.imageSliderTimer=1;

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
    // box.style.background="blue";
    box.style.backgroundImage="url(images/spider01.png)";


    box.style.backgroundPosition = this.imageSlider+"px"+ 0+"px";
    box.style.cursor="pointer";
    this.element=box;
    this.parentElement.appendChild(box);
    this.element.addEventListener("click",this.smashAnt);



  }



  this.setSpeed=function(x){
    this.speed=Math.floor(Math.random()*2)+1;
    // this.speed = x;
  }


  this.animateAnt = function(){
if(this.isSmash==false){
  this.imageSliderTimer=1;
  this.imageSlider+=64;
  this.element.style.backgroundPosition = -this.imageSlider+"px "+ -this.imageSliderVertical+"px";
}
else{
    this.element.style.backgroundPosition = -128+"px "+ -250+"px";
}

  }

  this.smashAnt = function(){
    // this.element.style.backgroundPosition = this.imageSlider+"px 64px";

//  that.element.style.backgroundPosition = 0+"px "+ -64+"px";
    that.isSmash = true;
    console.log("is smashed", that.isSmash);
   //that.parentElement.removeChild(that.element);


  }

  //SETTING POSITION OF EACH BOX
  this.setPosition = function(x,y){
    this.x = x;
    this.y = y;
  }
  this.update = function(){
    if(this.isSmash==false){
      this.x+=this.speed*this.boxDirectionX;
      this.y+=this.speed*this.boxDirectionY;

      this.element.style.left=this.x +"px";
      this.element.style.top=this.y +"px";
    }




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

          this.boxDirectionX*= -1;
        }
        else{

          this.boxDirectionY*= -1;
        }
      }
      else{
      }
    }
    }
  }
}

//GAME HEADER CLASS
function Title(){

}


//GAME CLASS
function Game(parentElement,boxCount){
  var boxes = [];
  var xPosition;
  var yPosition;
  var overlap= false;
  var that = this;

  this.createGameScreen = function(){

    this.gameHeight= 600;
    this.gameWidth = 900;
    parentElement.style.height=this.gameHeight + "px";
    parentElement.style.width=this.gameWidth + "px";
    // parentElement.style.background="green";
    parentElement.style.position="relative";
    parentElement.style.backgroundImage="url('images/background.jpg')";
    parentElement.style.backgroundSize="cover";



  }

  //return the unique Position
  this.generateRandomPosition = function(boxObj,j){

    xPosition = Math.floor(Math.random()*(this.gameWidth-boxObj.width));
    yPosition = Math.floor(Math.random()*(this.gameHeight-boxObj.height));
    //check if box overlap each other
    if(j!=0){

      for (var i = 0; i < boxes.length; i++) {
        if(i!=j){
          if(xPosition+boxObj.width>= boxes[i].x &&
            yPosition+boxObj.height>=boxes[i].y &&
          xPosition<= boxes[i].x+ boxes[i].width &&
          yPosition<=boxes[i].y+boxes[i].height){

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
      boxObj.setSpeed(1);
      boxObj.setPosition(xPosition,yPosition);
      boxObj.draw();
      boxes.push(boxObj)
    }


  //looping here
    setInterval(function(){

      for (var i = 0; i < boxes.length; i++) {
      //  console.log(boxes[i].isSmash);
        //collide on right wall
        if(boxes[i].x+boxes[i].width>=that.gameWidth){
          boxes[i].boxDirectionX=-1;
          boxes[i].imageSliderVertical=64;
        }

        //collide pn left wall
        else if (boxes[i].x<=0 ) {
          boxes[i].boxDirectionX=1;
          boxes[i].imageSliderVertical=192;
        }

        //collide on bottom
        if(boxes[i].y+boxes[i].height>=that.gameHeight){
          boxes[i].boxDirectionY=-1;
          boxes[i].imageSliderVertical=0;
        }

        //collide above
        else if (boxes[i].y<=0) {
          boxes[i].boxDirectionY=1;
          boxes[i].imageSliderVertical=120;
        }



            boxes[i].checkCollision(boxes[i],boxes,i);
            boxes[i].update();
            boxes[i].imageSliderTimer++;
            if(boxes[i].imageSliderTimer>=15 ){
              boxes[i].animateAnt();




       }

      // boxes[i].draw();
      }
    },10);
  }
}


var gameScreen = document.getElementById('gameScreen');
var gameObj = new Game(gameScreen,10);
gameObj.startGame();
