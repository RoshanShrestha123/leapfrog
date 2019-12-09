function ManageRoom(c){
  this.c =c;
  this.roomArr = [];


    this.room1 = new Room(this.c,0,0,200,200);
    this.roomArr.push(this.room1);

    this.room2 = new Room(this.c,0,202,200,400);
    this.roomArr.push(this.room2);

    this.room3 = new Room(this.c,201,0,400,300);
    this.roomArr.push(this.room3);





}
