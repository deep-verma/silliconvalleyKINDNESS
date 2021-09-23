var bg1,bg1I,bg2,bg2I,bg3,bg3I,bg4,bg4I;
var pb,nb;
var bg1T;
var GS

function preload(){
    bg1I = loadImage("images/bg1.jpg");
    bg2I = loadImage("images/bg2.jpg");
    bg3I = loadImage("images/bg3.jpg");
    bg4I = loadImage("images/bg4.jpg");
    helloI = loadImage("images/hello.png");
    lquizI = loadImage("images/quizpg.png");
    bg1TI = loadImage("images/bg1T.jpg");
    bg2TI = loadImage("images/bg2T.jpg");
    bg3TI = loadImage("images/bg3T.jpg");
    bg4TI = loadImage("images/bg4T.jpg");
    start1I = loadImage("images/start1.jpg");
}

function setup(){
    createCanvas(800,800);
    background(helloI);
    text("click 1 to start the story", 300,400);
    
   /* bg1.addImage(bg1I);
    bg2.addImage(bg2I);
    bg3.addImage(bg3I);
    bg4.addImage(bg4I);*/    

    pb = createImg('images/prevbutton.png');
    pb.size(100,100);
    pb.position(20,500);
    
/*
    nb = createImg('images/nextbutton.png');
    nb.size(100,100);
    nb.position(700,500);

    //nb.mouseClicked(nbmouse1);
*/
    pb.mouseClicked(pbmouse1);

  
    pg1 = createImg('images/1.png');
    pg1.size(50,50);
    pg1.position(750,20);

    pg2 = createImg('images/2.png');
    pg2.size(50,50);
    pg2.position(750,80);

    pg3 = createImg('images/3.png');
    pg3.size(50,50);
    pg3.position(750,140);

    pg4 = createImg('images/4.png');
    pg4.size(50,50);
    pg4.position(750,200);

    pglquiz = createImg('images/lquiz.jpg');
    pglquiz.size(50,50);
    pglquiz.position(750,260);

   /* start = createImg('images/start.jpg');
    start.size(50,50);
    start.position(750,320);*/

    pg1.mouseClicked(page1);
    pg2.mouseClicked(page2);
    pg3.mouseClicked(page3);
    pg4.mouseClicked(page4);
    pglquiz.mouseClicked(pagelquiz);
   // start.mouseClicked(index);
    /*pg1.hide();
    pg2.hide();
    pg3.hide();
    pg4.hide();
    pglquiz.hide();*/
    
}

function draw(){
 
    /*if(){
        bg1T = createImg('images/bg1T.jpg');
        bg1T.size(700,150);
        bg1T.position(30,200);
    }
   */
    
  drawSprites();
}

function pbmouse1(){
    background( helloI);
    textSize(20);
    text("click start to choose the story", 300,400); 
    bg4T.destroy();
    bg2T.destroy();
    bg3T.destroy();
    bg1I.destroy();
    }

/*function nbmouse1(){
    //image(bg2I,6,6,800,800);
    background(bg2I);
    
    console.log("nextplease");
}

*/
   function page1(){
    background( bg1I);
    textSize(20);
    text("click 2 to read further",300,400);
    bg1T = createSprite(350,200,500,50);
    bg1T.addImage(bg1TI);
    bg1T.scale = 1.25;
    bg4T.destroy();
    bg2T.destroy();
    bg3T.destroy();
   }
   function page2(){
    background( bg2I);
    textSize(20);
    text("click 3 to read further",300,400)
    bg1T.destroy();
    bg2T = createSprite(350,200,500,50);
    bg2T.addImage(bg2TI);
    bg2T.scale = 1.25;
    bg3T.destroy();
    bg4T.destroy();

   }
   function page3(){
    background( bg3I);
    text("click 4 to read further",300,400)
    bg2T.destroy();
    bg3T = createSprite(350,200,500,50);
    bg3T.addImage(bg3TI);
    bg3T.scale = 1.25;
    bg1T.destroy();
    bg4T.destroy();
   }
   function page4(){
    background( bg4I);
    text("click quiz to test what you learned",500,400);
    
    bg4T = createSprite(350,200,500,50);
    bg4T.addImage(bg4TI);
    bg4T.scale = 1.25;
    bg1T.destroy();
    bg2T.destroy();
    bg3T.destroy();
   }
   function pagelquiz(){
       background("red");
       bg4T.destroy();
       bg1T.destroy();
       bg2T.destroy();
       bg3T.destroy();
       textSize(40);
       fill("black");
       text("what is the moral of the story?",50,50);
       text("did the lion let go the mouse?", 50, 100);
       text("did the mouse help the lion?", 50, 200);
       text("what was the mouse doing when lion was sleeping?", 20, 300);
       link = createA("https://studio.code.org/projects/gamelab/0tvFseTDeyznbslwJcL1iqPH4PXIi3qCC9btKDtz8DY", "GAME TIME", "_blank");
       link.position(1,350);
       //text("https://studio.code.org/projects/gamelab/0tvFseTDeyznbslwJcL1iqPH4PXIi3qCC9btKDtz8DY",1,350);
   }
   /*function index(){
    background("red");
    text("click the story to read",50,50);
    start1 = createImg('images/start1.jpg');
    start1.size(100,50);
    start1.position(100,100);
    start1.mouseClicked(page1);
    
    
   }*/
