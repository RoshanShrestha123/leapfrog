function ManageRoom(c,canvas){
  this.c =c;
  this.canvas =canvas;

  this.roomArr = [];
  this.loadCount = 0;

/**
 * here you can create the room ,
 * for the paramerter of the object
 * (context,x,y,width,height,borderTOP,borderRIGHT,borderBOTTOM,borderLEFT)
 * for border, 0 = No border/wall, 1 = 100% border/wall, 2 = border/wall with door
 * color of the room and name of the room
 */


 //outside of the room
 this.outsideBottom = new Room(this.c,350,270,1193,300,0,1,1,0,'#949494',"outsideBottom");
 this.img = document.getElementById('outsideBottom');
 this.outsideBottom.setBgImage(this.img);
 this.roomArr.push(this.outsideBottom);

 this.outsideBottom = new Room(this.c,50,270,300,350,0,1,1,1,'#949494',"outsideBottom");
 this.img = document.getElementById('outsideBottomLeft');
 this.outsideBottom.setBgImage(this.img);
 this.roomArr.push(this.outsideBottom);

 this.bathroom = new Room(this.c,1145,100,184,168,0,1,1,0,'#949494',"bathroom");
 this.img = document.getElementById('bathroom3');
 this.bathroom.setBgImage(this.img);
 this.roomArr.push(this.bathroom);

 this.livingroom = new Room(this.c,380,-124,361,387,0,0,1,1,'#949494',"livingroom1");
 this.img = document.getElementById('livingroom');
 this.livingroom.setBgImage(this.img);
 this.roomArr.push(this.livingroom);

 this.livingroom = new Room(this.c,380,-487,753,393,0,0,0,1,'#949494',"livingroom2");
 this.img = document.getElementById('livingroom2');
 this.livingroom.setBgImage(this.img);
 this.roomArr.push(this.livingroom);
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

  this.bathroom4 = new Room(this.c,1163,-878,167,361,1,0,1,1,'#949494',"bathroom2");//top left room
  this.img = document.getElementById('bathroom4');
  this.bathroom4.setBgImage(this.img);
  this.roomArr.push(this.bathroom4);
  this.bathroom5 = new Room(this.c,1328,-878,197,161,1,0,0,0,'#949494',"bathroom2");//top left room
  this.img = document.getElementById('bathroom5');
  this.bathroom5.setBgImage(this.img);
  this.roomArr.push(this.bathroom5);

  this.bedroomDown = new Room(this.c,1358,-94,555,365,0,1,1,0,'#949494',"bedroomDown");//top left room
  this.img = document.getElementById('bedroomDown');
  this.bedroomDown.setBgImage(this.img);
  this.roomArr.push(this.bedroomDown);

  this.storeRoom = new Room(this.c,1528,-285,360,170,1,1,1,0,'#949494',"storeRoom");//top left room
  this.img = document.getElementById('storeRoom');
  this.storeRoom.setBgImage(this.img);
  this.roomArr.push(this.storeRoom);

  this.pathUp = new Room(this.c,933,-878,200,391,1,0,0,0,'#949494',"bathroom2");//top left room
  this.img = document.getElementById('pathUp');
  this.pathUp.setBgImage(this.img);
  this.roomArr.push(this.pathUp);

  this.path1 = new Room(this.c,1133,-487,225,173,0,0,0,0,'#949494',"path1");
  this.img = document.getElementById('path1');
  this.path1.setBgImage(this.img);
  this.roomArr.push(this.path1);

  this.path2 = new Room(this.c,1358,-680,170,193,0,0,0,1,'#949494',"path2");
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

  this.livingroom = new Room(this.c,380,-878,553,361,1,1,1,1,'#949494',"meetingHall");
  this.img = document.getElementById('meetingHall');
  this.livingroom.setBgImage(this.img);
  this.roomArr.push(this.livingroom);





}
