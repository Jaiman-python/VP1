//Create variables here
var dog_img, happyDog_img, dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png");
  }

function setup() {
  createCanvas(500, 500);
  dog = createSprite(300,250,5,5);
  dog.addImage(dog_img);

  
}


function draw() {  

  drawSprites();
  //add styles here

}



