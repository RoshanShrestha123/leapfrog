var slider_container = document.getElementsByClassName("carousel-container");
var slider_wrapper= document.getElementsByClassName("carousel-images-wapper");
slider_container[0].style.position="relative";
slider_container[0].style.overflow="hidden";
var container_width = slider_container[0].offsetWidth;
slider_wrapper[0].style.fontSize = 0;
slider_wrapper[0].style.position="absolute";
var adder= slider_wrapper[0].offsetLeft;



//SLIDER MAIN CLASS

function Slider(){




  //generating the button
//Left button
  var leftButton = document.createElement('div');
  leftButton.setAttribute('class','btn');
  slider_container[0].appendChild(leftButton);
  leftButton.style.width=50+"px";
  leftButton.style.height=50+"px";
  leftButton.style.position ="absolute";
  leftButton.style.backgroundImage="url('images/left.png')";
  leftButton.style.backgroundRepeat="no-repeat";


  //Right Button
  var rightButton = document.createElement('div');
  rightButton.setAttribute('class','btn');
  slider_container[0].appendChild(rightButton);
  rightButton.style.width=50+"px";
  rightButton.style.height=50+"px";
  rightButton.style.position ="absolute";
  rightButton.style.backgroundImage="url('images/right.png')";
  rightButton.style.backgroundRepeat="no-repeat";





  var count=1;

  var that = this;
this.running=false;


  this.countImage = function(){
    this.totalImage = slider_wrapper[0].getElementsByTagName('img').length;
    return this.totalImage;
  }
  this.setWidth= function(numberOfImg,containerSize){
    console.log("total img: ",numberOfImg);
    console.log("container size", containerSize);
    slider_wrapper[0].style.width= numberOfImg*containerSize+"px";
    slider_wrapper[0].style.background="red";
    console.log("inner wrapper size: ",slider_wrapper[0].offsetWidth);
  }

  //move slider to the left
this.slideLeft = function(){
  var i =0;
  adder=slider_wrapper[0].offsetLeft;
  var id = setInterval(function(){
    if(count<=1){   // go back
      adder+=10;

      slider_wrapper[0].style.left= -(adder)+"px";

      console.log(adder);
      if(adder>=3000){
        count=6;
        clearInterval(id);
      }
    }
    else{ //forwARD
      slider_wrapper[0].style.left= (i+adder)+"px";
      console.log(adder);
      i+=3;
      if(i>container_width){
        i=0;
        count--;
        adder=slider_wrapper[0].offsetLeft;
        clearInterval(id);
      }
    }
  },1);
}

//move the slider to the right
  this.slideRight = function(){

    var i =0;
    adder=slider_wrapper[0].offsetLeft;
    var id = setInterval(function(){

        if(count>=6){   // go back
          this.running=true;
          console.log("is running?:",this.running);
          adder+=10;
          slider_wrapper[0].style.left= (adder)+"px";
          console.log(adder);
        if(adder>=0){
          this.running=false;
          console.log("is running?:",this.running);
          count=1;
          clearInterval(id);
        }
      }
      else{ //forwARD
        this.running=true;
        console.log("is running?:",this.running);
        slider_wrapper[0].style.left= -(i-adder)+"px";
        i+=3;
        if(i>container_width){
          this.running=false;
          console.log("is running?:",this.running);
          i=0;
          count++;
          adder=slider_wrapper[0].offsetLeft;
          clearInterval(id);
        }
      }
    },1);

  }

  this.ui=function(){
    leftButton.style.top=40+"%";
    rightButton.style.top=40+"%";
    rightButton.style.right=0;
    leftButton.style.left=0;
    leftButton.addEventListener('click',function(){
    console.log("left click");
    adder=slider_wrapper[0].offsetLeft;
    sliderObj.slideLeft();
    });
    rightButton.addEventListener('click',function(){
        console.log(that.running);
        if(that.running==false){
          console.log("right click");
          adder=slider_wrapper[0].offsetLeft;
          console.log("adder when clicked: ",adder);
          that.slideRight();
        }
    });
    leftButton.style.cursor="pointer";
    rightButton.style.cursor="pointer";
  }


}
var sliderObj = new Slider();
sliderObj.setWidth(sliderObj.countImage(),container_width);
sliderObj.ui();
