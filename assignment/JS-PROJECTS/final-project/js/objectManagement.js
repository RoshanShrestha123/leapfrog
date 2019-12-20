/**
 * object for collision
 * @method      ObjectManagement
 * @param       {context}         c
 * @constructor
 */

function ObjectManagement(c){
  this.objArr = [];

  this.obj1 = new ObjectCollision(c);
  this.obj1.initObject(1000,300,32,32);
  this.objArr.push(this.obj1);

  this.obj1 = new ObjectCollision(c);
  this.obj1.initObject(500,-50,32,32);
  this.objArr.push(this.obj1);



}
