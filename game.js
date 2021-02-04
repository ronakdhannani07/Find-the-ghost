class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
  
      if(gameState === 0){
       // background("backgroundImage2");
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      p1 = createSprite(200,200,20,20); 
      p1.addImage(pI1);
      p1.scale = 0.5;
     
      p2 = createSprite(300,200,20,20); 
      p2.addImage(pI2);
      p2.scale = 0.5;
     
      p3 = createSprite(400,200,20,20); 
      p3.addImage(pI3);
      p3.scale = 0.5;
     
      p4 = createSprite(500,200,20,20); 
      p4.addImage(pI4);
      p4.scale = 0.5;
     
      p5 = createSprite(300,400,20,20); 
      p5.addImage(pI5);
      p5.scale = 0.5;
     
      p6 = createSprite(500,400,20,20); 
      p6.addImage(pI6);
      p6.scale = 0.5;
  
      players = [p1,p2,p3,p4,p5,p6];
      
    }
  
    play(){
     // background("#4B4B4B")
      form.hide();
      
      Player.getPlayerInfo();
      //player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        //background(rgb(198,135,103));
        //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          //x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
         // console.log(index, player.index)
  
         
          //if (index === player.index){
           // stroke(10);
           // fill("red");
           // ellipse(x,y,60,60);
           // cars[index - 1].shapeColor = "red";
           // camera.position.x = displayWidth/2;
           // camera.position.y = cars[index-1].y;
          //}
         
         
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      //if(player.distance > 3860){
      //  gameState = 2;
       // player.rank +=1;
       // Player.updateCarsAtEnd(player.rank);
     // }
     
      drawSprites();
    }
  
    end(){
      //console.log(player.rank);
    }
  }
  