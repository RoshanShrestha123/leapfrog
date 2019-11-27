
var mainContainer= document.getElementsByClassName("carousel-container");
var innerContainer= document.getElementsByClassName("carousel-images-wapper");
var totalNumberOfImg=innerContainer[0].getElementsByTagName('img').length;
var mainContainerWidth = mainContainer[0].offsetWidth;
var time =3000;

// some style to the DOM
innerContainer[0].style.background="red";
mainContainer[0].style.position="relative";
mainContainer[0].style.overflow="hidden";
innerContainer[0].style.position="absolute";
innerContainer[0].style.fontSize=0;
innerContainer[0].style.width=(mainContainerWidth*totalNumberOfImg)+"px";



// changes the image every 1 sec
var index=0;
var speed=0;
var id = null;
function changeImage(){
  // console.log("index",index);
id=requestAnimationFrame(changeImage);
     innerContainer[0].style.left=(-speed)+(innerContainer[0].offsetLeft)+"px";
     speed+=2;
     console.log("index: ",index);

     if(innerContainer[0].offsetLeft<= (-index*mainContainerWidth)){
       speed=0;
      console.log("getout at ",-index*mainContainerWidth);
      cancelAnimationFrame(id);


     }
}


setInterval(function(){



if(index>=totalNumberOfImg-1){
  innerContainer[0].style.left="0px";
  index=0;
}
index++;
changeImage();
  speed=0;



},time);

function moveLeft(){

  index--;
  if(index>totalNumberOfImg){
    index=0;
  }
  id=requestAnimationFrame(changeImage);
       innerContainer[0].style.left=(-speed)-(innerContainer[0].offsetLeft)+"px";
       speed+=2;
       console.log("index: ",index);

       if(innerContainer[0].offsetLeft>= (-index*mainContainerWidth)){
         speed=0;
        console.log("getout at ",-innerContainer[0].offsetLeft);
        cancelAnimationFrame(id);


       }
}
function moveRight(){

  index++;
  if(index>totalNumberOfImg){
    index=0;
  }
  id=requestAnimationFrame(changeImage);
       innerContainer[0].style.left=(-speed)+(innerContainer[0].offsetLeft)+"px";
       speed+=2;
       console.log("index: ",index);

       if(innerContainer[0].offsetLeft<= (-index*mainContainerWidth)){
         speed=0;
        console.log("getout at ",-index*mainContainerWidth);
        cancelAnimationFrame(id);


       }



}
