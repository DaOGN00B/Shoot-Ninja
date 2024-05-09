function fruitA(){
  vel.add(gravity)
  pos.add(vel)
  pos.add(vel)
  
  
  if (pos.y > 1100){
    pos.y = 1000
    vel.y*=-1
  }
  
  if (pos.x > 1450 || pos.x < -250){
    vel.x*=-1
  }
    
  if (dist(pos.x, pos.y, x, y) < 150) {
    // x = random(1,200);
    if (h >=151) {
      shot = true;
      s += 3;
    }
  }
 
   if (shot == true) {
   apple(imgADeath);
     if(!soundHit.isPlaying()){
    soundHit.play();
  }
  } else {
    apple(imgA)
  }
  
 
  
  
  if (pos.x <= -200 || pos.x >= 1400 || pos.y <= -250 || pos.y >= 1000) {
    (shot = false)
  }
  
  function apple(a){
  push();
    imageMode(CENTER);
    image(a, pos.x, pos.y, 400, 400)
  pop();
    }
    
  }