function Player (size, color) {
  if (size === undefined) { size = 50; }
  if (color === undefined) { color = "#ff0000"; }
  this.x = 0;
  this.y = 0;
  this.width = size;
  this.height = size;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = utils.parseColor(color);
  this.lineWidth = 1;
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
  context.translate(this.x, this.y);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;

  var img = document.getElementById("player");
  context.drawImage(img, this.x, this.y);

  context.restore();
};
