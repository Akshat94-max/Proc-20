var Cat,CatImg,CatImg2,CatImg3,CatImg4;
var Mouse,MouseImg,MouseImg;
var  backgroundImg;


function preload() {

 backgroundImg = loadImage("images/garden.png");
MouseImg = loadImage("images/jerryOne.png")
CatImg = loadImage("images/tomOne.png")


}

function setup(){
    

    createCanvas(800,400);
  
    
    background=createSprite(200,400,800,400);
    background.addImage(backgroundImg);

Mouse = createSprite(150,340,50,50);
Mouse.addImage(MouseImg);
cat = createSprite(100,340,20,50);
cat.addImage(CatImg);


}

function draw() {



    //background(255);






    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here;

if(keycode===leftArrow){
    cat.velocityx = -5;
  



}







}
 