function Player (id,width, height,posX,posY) {
  this.img = document.getElementById(id);
  this.x = posX;
  this.y = posY;
  this.width = width;
  this.height = height;
  this.startX = posX;
  this.startY = posY;
}

Player.prototype.move = function () {
   
    if (vx < 4 && vx > -4)
        vx += ax;
    if (vy < 4 && vy > -4)
        vy += ay;
        
    context.clearRect(this.x, this.y, this.width, this.height); 
 
    player.XBefore = player.x;
    player.YBefore = player.y;
    
    player.x += vx;
    player.y += vy;
    
 	 wall_collission();
 	     
    context.save();
    context.drawImage(this.img, this.x, this.y,this.width,this.height);
    context.restore();

}

wall_collission = function(){
	
	for( var i = 0; i < index; i++)	
		if(!(player.x + player.width < walls[i].x ||
			walls[i].x + walls[i].width < player.x ||
			player.y + player.height < walls[i].y ||
			walls[i].y + walls[i].height  < player.y)) {
 			 			player.x = player.XBefore;
            		player.y = player.YBefore;
       }
}
