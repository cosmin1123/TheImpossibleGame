function Player (size, color) {
  if (size === undefined) { size = 50; }
  if (color === undefined) { color = "#ff0000"; }
  this.x = 0;
  this.y = 0;
  this.size = size;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = utils.parseColor(color);
  this.lineWidth = 1;
}

Player.prototype.draw = function (context) {


  context.save();
  context.translate(this.x, this.y);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
    //x, y, radius, start_angle, end_angle, anti-clockwise

  context.rect(0, 0, this.size, this.size);
  context.closePath();
  context.fill();
  
  context.beginPath();
  context.arc(25, 20, 20, 0, 1 * Math.PI);
//  context.stroke();

  context.beginPath();
  context.arc(15, 10, 10, 0, 2 * Math.PI);
//  context.stroke();

  context.beginPath();
  context.arc(35, 10, 10, 0, 2 * Math.PI);
 // context.stroke();
    
 
  context.restore();
};
