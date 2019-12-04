var slider_container  =  document.getElementsByClassName("carousel-container");
var slider_wrapper =  document.getElementsByClassName("carousel-images-wapper");
slider_container[0].style.position = "relative";
slider_container[0].style.overflow = "hidden";
var container_width  =  slider_container[0].offsetWidth;
slider_wrapper[0].style.fontSize  =  0;
slider_wrapper[0].style.position = "absolute";
var adder =  slider_wrapper[0].offsetLeft;



//SLIDER MAIN CLASS

function Slider(time_interval){

  this.timeInterval =time_interval;
  //generating the button
//Left button
  var leftButton  =  document.createElement('div');
  slider_container[0].appendChild(leftButton);
  leftButton.style.width = 50+"px";
  leftButton.style.height = 50+"px";
  leftButton.style.position  = "absolute";
  leftButton.style.backgroundImage = "url('images/left.png')";
  leftButton.style.backgroundRepeat = "no-repeat";


  //Right Button
  var rightButton  =  document.createElement('div');
  slider_container[0].appendChild(rightButton);
  rightButton.style.width = 50+"px";
  rightButton.style.height = 50+"px";
  rightButton.style.position  = "absolute";
  rightButton.style.backgroundImage = "url('images/right.png')";
  rightButton.style.backgroundRepeat = "no-repeat";

  //indicator slider_wrapper
  var indicatorWrapper = document.createElement('div');
  slider_container[0].appendChild(indicatorWrapper);
  indicatorWrapper.style.width = 70+"%";
  indicatorWrapper.style.height = 5+"%";
  indicatorWrapper.style.position  = "absolute";

  indicatorWrapper.style.bottom = 10+"px";
  indicatorWrapper.style.left = 35+"%";

  var count = 1;


  var that  =  this;
this.running = false;


  this.countImage  =  function(){
    this.totalImage  =  slider_wrapper[0].getElementsByTagName('img').length;
    return this.totalImage;
  }


  this.setWidth =  function(numberOfImg,containerSize){
    console.log("total img: ",numberOfImg);
    console.log("container size", containerSize);
    slider_wrapper[0].style.width =  numberOfImg*containerSize+"px";
    slider_wrapper[0].style.background = "red";
    console.log("inner wrapper size: ",slider_wrapper[0].offsetWidth);
  }


  //move slider to the left
this.slideLeft  =  function(){
  var i  = 0;
  adder = slider_wrapper[0].offsetLeft;
  var id  =  setInterval(function(){

    if(count<= 1){   // go back
      adder+= 10;

      slider_wrapper[0].style.left =  -(adder)+"px";

      console.log(adder);
      if(adder>= 3000){
        count = that.totalImage;
        clearInterval(id);
      }
    }
    else{ //forwARD
      slider_wrapper[0].style.left =  (i+adder)+"px";
      console.log(adder);
      i+= 3;
      if(i>container_width){
        i = 0;
        count--;

        adder = slider_wrapper[0].offsetLeft;
        clearInterval(id);
      }
    }
  },1);
}

//move the slider to the right
  this.slideRight  =  function(){

    var i  = 0;
    adder = slider_wrapper[0].offsetLeft;
    var id  =  setInterval(function(){

        if(count>= that.totalImage){   // go back
          console.log(that.totalImage);
          this.running = true;

          adder+= 10;
          slider_wrapper[0].style.left =  (adder)+"px";
          console.log(adder);
        if(adder>= 0){
          this.running = false;

          count = 1;
          clearInterval(id);
        }
      }
      else{ //forwARD
        console.log(that.totalImage);
        this.running = true;

        slider_wrapper[0].style.left =  -(i-adder)+"px";
        i+= 3;
        if(i>container_width){
          this.running = false;

          i = 0;
          count++;
          adder = slider_wrapper[0].offsetLeft;
          clearInterval(id);
        }
      }
    },1);

  }

  //indicator button here
  this.indicatorButton  =  function(){
    for (var i = 0; i < this.totalImage; i++) {
      var indicatorButton = document.createElement('div');
      indicatorButton.setAttribute('class','indibtn')
      indicatorButton.style.width = 10+"px";
      indicatorButton.style.height = 10+"px";
      indicatorButton.style.position  = "absolute";
      indicatorButton.style.background="#c7c7c7";
      indicatorButton.style.borderRadius=5+"px";
      indicatorWrapper.appendChild(indicatorButton);
      indicatorButton.style.margin="0 auto";
      indicatorButton.style.left=i*30+"px";

    }
    console.log(indicatorButton);

  }

  this.ui = function(){
    leftButton.style.top = 40+"%";
    rightButton.style.top = 40+"%";
    rightButton.style.right = 0;
    leftButton.style.left = 0;
    leftButton.addEventListener('click',function(){

    adder = slider_wrapper[0].offsetLeft;
    sliderObj.slideLeft();
    });
    rightButton.addEventListener('click',function(){

        if(that.running == false){

          adder = slider_wrapper[0].offsetLeft;

          that.slideRight();
        }
    });
    leftButton.style.cursor = "pointer";
    rightButton.style.cursor = "pointer";
    this.indicatorButton();

  }
  this.animate = function(){
  this.animation= setInterval(function(){
      console.log("screen in focus");
      that.slideRight();
    },that.timeInterval);
  }
  this.stopAnimate = function(){
    console.log("outside the screen");
  //  clearInterval(animation);
  }
  window.addEventListener('focus',that.animate());
  window.addEventListener('blur',that.stopAnimate());










}
var sliderObj  =  new Slider(2000);
sliderObj.setWidth(sliderObj.countImage(),container_width);
sliderObj.ui();
