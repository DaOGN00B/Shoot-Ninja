function fruitP(){
  vel.add(gravity)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
  
  
  
  if (pos.y > 1100 || pos.y <-500){
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
      s += 20;
    }
  }
 
   if (shot == true) {
   pineapple(imgPDeath)
     if(!soundHit.isPlaying()){
    soundHit.play();
  }
  } else {
    pineapple(imgP)
  }
  
 
  
  
  if (pos.x <= -100 || pos.x >= 1300 || pos.y <= -10 || pos.y >= 900) {
    (shot = false)
  }
  
  function pineapple(d){
  push();
    imageMode(CENTER);
    image(d, pos.x, pos.y, -200, -200)
  pop();
    }
  
    
  }