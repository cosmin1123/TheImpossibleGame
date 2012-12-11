function Player (id,scale,posX,posY) {
  this.img = document.getElementById(id);
  this.x = posX;
  this.y = posY;
  this.scale =scale;
}

Player.prototype.move = function () {
   
    if (vx < 4 && vx > -4)
        vx += ax;
    if (vy < 4 && vy > -4)
        vy += ay;
    player.x += vx;
    player.y += vy;

}

Player.prototype.draw = function (context) {

  context.save();
  context.drawImage(this.img, this.x, this.y,this.scale,this.scale);
  context.restore();
};
