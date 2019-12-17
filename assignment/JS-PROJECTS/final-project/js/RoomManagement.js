function ManageRoom(c,canvas){
  this.c =c;
  this.canvas =canvas;

  this.roomArr = [];

/**
 * here you can create the room ,
 * for the paramerter of the object
 * (context,x,y,width,height,borderTOP,borderRIGHT,borderBOTTOM,borderLEFT)
 * for border, 0 = No border/wall, 1 = 100% border/wall, 2 = border/wall with door
 * color of the room and name of the room
 */


//main entrance room
  this.entrance1 = new Room(this.c,770,100,359,168,0,1,0,1,'#949494',"entrance1");//top left room
  this.img = document.getElementById('entrance1');
  this.entrance1.setBgImage(this.img);
  this.roomArr.push(this.entrance1);

  this.entrance = new Room(this.c,770,-94,168,194,1,0,0,0,'#949494',"entrance2");//top left room
  this.img = document.getElementById('entrance2');
  this.entrance.setBgImage(this.img);
  this.roomArr.push(this.entrance);



  this.bathroom1 = new Room(this.c,968,-94,362,169,0,1,1,1,'#949494',"bathroom1");//top left room
  this.img = document.getElementById('bathroom1');
  this.bathroom1.setBgImage(this.img);
  this.roomArr.push(this.bathroom1);

  this.bathroom2 = new Room(this.c,1163,-285,167,191,1,1,0,1,'#949494',"bathroom2");//top left room
  this.img = document.getElementById('bathroom2');
  this.bathroom2.setBgImage(this.img);
  this.roomArr.push(this.bathroom2);


  this.livingroom = new Room(this.c,380,-124,361,387,0,0,1,1,'#949494',"livingroom1");
  this.img = document.getElementById('livingroom');
  this.livingroom.setBgImage(this.img);
  this.roomArr.push(this.livingroom);

  this.livingroom = new Room(this.c,380,-487,753,363,0,0,0,1,'#949494',"livingroom2");
  this.img = document.getElementById('livingroom2');
  this.livingroom.setBgImage(this.img);
  this.roomArr.push(this.livingroom);


  this.path1 = new Room(this.c,1133,-487,225,173,0,0,0,0,'#949494',"path1");
  this.img = document.getElementById('path1');
  this.path1.setBgImage(this.img);
  this.roomArr.push(this.path1);

  this.path2 = new Room(this.c,1358,-680,170,193,0,0,0,0,'#949494',"path2");
  this.img = document.getElementById('path2');
  this.path2.setBgImage(this.img);
  this.roomArr.push(this.path2);

  this.path3 = new Room(this.c,1358,-487,170,173,0,0,0,0,'#949494',"path3");
  this.img = document.getElementById('path3');
  this.path3.setBgImage(this.img);
  this.roomArr.push(this.path3);

  this.path4 = new Room(this.c,1358,-314,170,173,0,0,0,0,'#949494',"path4");
  this.img = document.getElementById('path4');
  this.path4.setBgImage(this.img);
  this.roomArr.push(this.path4);

  this.livingroom = new Room(this.c,380,-878,553,361,1,1,0,1,'#949494',"meetingHall");
  this.img = document.getElementById('meetingHall');
  this.livingroom.setBgImage(this.img);
  this.roomArr.push(this.livingroom);





}
