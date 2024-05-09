function fruitB(){
  vel.add(gravity)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  
  
  
  
  if (pos.y > 1100 || pos.y <-300){
    pos.y = 1000
    vel.y*=-1
  }
  
  if (pos.x > 1450 || pos.x < -150){
    vel.x*=-1
  }
    
  if (dist(pos.x, pos.y, x, y) < 100) {
    // x = random(1,200);
    if (h >=151) {
      shot = true;
      s += 5;
    }
  }
 
   if (shot == true) {
   banana(imgBDeath)
     if(!soundHit.isPlaying()){
    soundHit.play();
  }
  } else {
    banana(imgB)
  }
  
 
  
  
  if (pos.x <= -100 || pos.x >= 1300 || pos.y <= -10 || pos.y >= 900) {
    (shot = false)
  }
  
  function banana(b){
  push();
    imageMode(CENTER);
    image(b, pos.x, pos.y, 150, 150)
  pop();
    }
  
    
  }