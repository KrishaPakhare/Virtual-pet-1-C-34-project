//Create variables here
var dog , dog1 , happyDog , foodS , foodStock , database;
function preload()
{
	//load images here
  dog = loadImage("images/Dog.png")
  happyDog = loadImage("images/happyDog.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog1 = createSprite(250,250,10,10);

  foodStock = database.ref("Food")
  foodStock.on("value",readStock)

  
  
}


function draw() { 
  
  background(49,139,87);

  dog1.addImage(dog);
  dog1.scale = 0.20;

  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage(happyDog);
    
  }

  drawSprites();
  //add styles here
  textSize(20);
  stroke (4);
  fill ("white")
  text("Note : Press the UP_ARROW key to feed the dog!!",22,30)
  

}
function readStock(data){
  foodS=data.val();
  console.log(foodS)
}

function writeStock(x){

  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



