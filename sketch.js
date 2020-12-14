//Create variables here
var dog, doghappy;
var database;
var foodS, foodstock ;
var dogimg;
var x;






function preload()
{
dogimg = loadImage("images/dogimg.png");
doghappy = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(450,430,20,20);
  dog.addImage(dogimg); 
  dog.scale = 0.2;
  
  database = firebase.database();
   
  foodstock = database.ref('food');
  foodstock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(doghappy);
    }
  
    drawSprites();
 
  strokeWeight()
  stroke("red");
   
   textSize(30)
  fill("red")
  text("Food Remaining:" + foodS, 50,80); 


  
}



function readStock(data){
  foodS = data.val()
}

function writeStock(x) {
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food: x 
  })
}


