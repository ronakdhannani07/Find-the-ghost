var p1,p2,p3,p4,p5,p6; 
var pI1,pI2,pI3,pI4,pI5,pI6;
var gameState = 0;
var database;
var players = [];
var rand;
var game,player,form;
var playerCount;
function preload(){
    pI1 = loadImage("capture.PNG");
    pI2 = loadImage("capture1.PNG");
    pI3 = loadImage("capture2.PNG");
    pI4 = loadImage("capture3.PNG");
    pI5 = loadImage("capture4.PNG");
    pI6 = loadImage("capture5.PNG");
}

function setup(){
    createCanvas(displayWidth,displayHeight);


    database = firebase.database();
  
    game = new Game();

    game.getState();




   
    
}

function draw(){
    
 if(gameState === 0){

    game.start();
 }

 

  
}  

function keyPressed(){
    if(keyCode === 119){
    

    }
}

