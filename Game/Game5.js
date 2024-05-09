function game5(){

  image(imgGame,0,0,)
  textSize(75);
  
  fill(255)
  textSize(75);
  textAlign(CENTER, CENTER);
  
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, 40);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, 40);
  }
  
  	textAlign(LEFT)
  fill(0)
  	text("Score:" + " "+ s, 10, 40 );
  
  //Watermelon
   fruitW();
  
  //controls
  if (x > 0 && x < 1200 && y > 0 && y < 800){
  controls();
  }
    

  
  if (timerValue == 0) {
    screen = 6
  }
    
}