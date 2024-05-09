function fruitW(){
  vel.add(gravity)
  pos.add(vel)
  pos.add(vel)
  pos.add(vel)
    pos.add(vel)
  pos.add(vel)
    pos.add(vel)

  
  
  
  if (pos.y > 1100 || pos.y <-100){
    pos.y = 1000
    vel.y*=-1
  }
  
  if (pos.x > 1450 || pos.x < -250){
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
   watermelon(imgWDeath)
     if(!soundHit.isPlaying()){
    soundHit.play();
  }
  } else {
    watermelon(imgW)
  }
  
 
  
  
  if (pos.x <= -50 || pos.x >= 1450 || pos.y <= -50 || pos.y >= 850) {
    (shot = false)
  }
  
  function watermelon(e){
  push();
    imageMode(CENTER);
    image(e, pos.x, pos.y, 200, 200)
  pop();
    }
  
    
  }