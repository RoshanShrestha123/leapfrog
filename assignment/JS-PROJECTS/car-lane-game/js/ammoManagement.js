function Ammo(parentElement,x,y){
  this.parentElement = parentElement;
  var ammo = document.createElement('div');
  this.parentElement.appendChild(ammo);
  this.element = ammo;
  this.element.style.position= "absolute";
  this.element.style.textAlign = "center";
  this.element.innerHTML = "Ammo";
//  this.element.style.background = "rgb(0,0,0)";
  this.element.style.color = "#fff";
  this.element.style.fontSize="20px";
  this.element.style.left =x+"px";
  this.element.style.top=y+"px";
  this.element.style.lineHeight="50px";
  this.element.style.width="100px";
  //this.element.style.background="red";

  this.drawAmmo= function(ammo){
    this.element.innerHTML = "Ammo "+ammo;
  }

  this.refill = function(parentElement,x,y){
    this.parentElement = parentElement;
    var ammoRefill = document.createElement('div');
    this.parentElement.appendChild(ammoRefill);
    this.element = ammoRefill;
    this.element.style.Position= "absolute";
    this.element.style.color = "blue";
    this.element.style.left =x+"px";
    this.element.style.top=y+"px";
    this.element.style.lineHeight="50px";
    this.element.style.width="100px";
    this.element.style.background="red";
  }


}
