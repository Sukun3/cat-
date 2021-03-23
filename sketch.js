var canvas;
var cat,mouse;
var Cat,Mouse,k;
function preload() {
    //load the images here
    Cat=loadAnimation("images/cat1.png");
    Cat5=loadAnimation("images/cat2.png","images/cat3.png");
    C=loadAnimation("images/cat4.png");
    Mouse=loadAnimation("images/mouse1.png");
    M=loadAnimation("images/mouse2.png","images/mouse3.png");
    Mouse2=loadAnimation("images/mouse4.png");
    k=loadImage("images/garden.png");
}

function setup(){
    //createCanvas(1000,800);
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("CatStanding",Cat);
    cat.scale=0.2

    mouse=createSprite(200,600);
    mouse.addAnimation("MouseStanding",Mouse);
    mouse.scale=0.2

}

function draw() {


    background(k);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastImage",C);
        cat.x=300;
        cat.scale=0.2
        cat.changeAnimation("catlastImage");

        mouse.addAnimation("mouselastImage",Mouse2);
        mouse.scale=0.2
        mouse.changeAnimation("mouselastImage");
    }

        


    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",Cat5);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",M);
        mouse.frameDelay=25;
        mouse.changeAnimation("mouseTeasing");

    }


  //For moving and changing animation write code here


}
