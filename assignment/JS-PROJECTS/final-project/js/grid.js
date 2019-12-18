function Grid(c,width,height,manageRoomObj){
  // console.log("room", manageRoomObj.roomArr[0].borderObj);
  this.width = width+200;
  this.height = height+200;
  this.size = 30;
  this.color='rgba(189, 189, 189,0.3)';
  this.nodeArr = [];
  this.rows = this.width/this.size;
  this.cols = this.height/this.size;
  this.manageRoomObj = manageRoomObj;
  this.openSet = [];
  this.closeSet = [];


  this.initGrid = function(){
    for(var i =0; i<this.rows;i++){
      for(var j =0; j<this.cols ; j++){
        this.nodeObj = new Node(c,i+6,j-20,this.size,this.color);
        this.nodeObj.initCell();
        this.nodeArr.push(this.nodeObj);
      }
    }
  }

  this.checkGridCollision = function(i,j,x,y,width,height){
    for (var i = 0; i < this.nodeArr.length; i++) {
      for (var j = 0; j < this.manageRoomObj.roomArr.length; j++) {
        this.hori = this.manageRoomObj.roomArr[j].borderObj.horizontalBorder;
        this.verti = this.manageRoomObj.roomArr[j].borderObj.verticalBorder;
        if(this.manageRoomObj.roomArr[j].borderObj.sides.top==1){

        //  console.log(this.hori);
          if(this.nodeArr[i].x<this.hori.x+this.hori.width && this.nodeArr[i].x+this.nodeArr[i].width> this.hori.x&&
            this.nodeArr[i].y<(this.hori.y-this.hori.height)+this.hori.height && this.nodeArr[i].y+this.nodeArr[i].height>(this.hori.y-this.hori.height)){

              this.nodeArr[i].color = 'red';
              this.nodeArr[i].tag='walls';

            }
        }
        if(this.manageRoomObj.roomArr[j].borderObj.sides.bottom==1){

        //  console.log(this.hori);
          if(this.nodeArr[i].x<this.hori.x+this.hori.width && this.nodeArr[i].x+this.nodeArr[i].width> this.hori.x&&
            this.nodeArr[i].y<(this.hori.y+this.manageRoomObj.roomArr[j].room.height)+this.hori.height && this.nodeArr[i].y+this.nodeArr[i].height>(this.hori.y+this.manageRoomObj.roomArr[j].room.height)){

              this.nodeArr[i].color = 'red';
              this.nodeArr[i].tag='walls';

            }
        }

      }
    }
  }

  this.renderGrid = function(){

    for (var i = 0; i < this.nodeArr.length; i++) {
      this.nodeArr[i].drawCell();
    }
  }
  this.updateGridPos = function(moveX,moveY){
    this.moveX = moveX;
    this.moveY = moveY;
    for (var i = 0; i < this.nodeArr.length; i++) {
      this.nodeArr[i].updateCellPos(this.moveX,this.moveY);
    }
  }
  this.getEnemyPosition = function(x,y){
    //console.log(x,y);
  }

  this.updateSet = function(){

  }

  this.startNode = function(){
    
  }


}
