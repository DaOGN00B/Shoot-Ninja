function controls(){
  //left (a)  
  if (x > 11 && keyIsDown(keyCode = 65)) {
    x -= 10;
  }
  //right (d)
  if (x < 1189 && keyIsDown(keyCode = 68)) {
    x += 10;
  }
  //inverted up (s)
  if (y > 11 && keyIsDown(keyCode = 83)) {
    y -= 10;
  }
  //inverted down (w)
  if (y < 789 && keyIsDown(keyCode = 87)) {
    y += 11;
  }
  
   //Voice trigger
  let vol = mic.getLevel();
  h = map(vol, 0, .01, 0, 100);
  if (h <= 150){
  noFill();
  stroke(0)
    circle(x,y, 100);
  fill(0);
    rect(x-50,y-1, 100, 2);
    rect(x-1,y-50, 2, 100);
  } else if ( h >=151){
    push();
    fill (255,255,255, 100);
    circle(x,y, 100);
    noStroke();
    rect(x-25,y-1, 50, 2);
    rect(x-1,y-25, 2, 50);
    pop();
  }
    
}