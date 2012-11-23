function Enemy(size,startX,startY, endX,endY,speed) {
    if (size === undefined) { size = 50; }
   
    this.x = startX;
    this.y = startY;
    this.width = size;
    this.height = size;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
    this.speed = speed;
    
    this.endX = endX;
    this.endY = endY;
    this.startX = startX;
    this.startY = startY;
}

Enemy.prototype.move = function (player) {

    if (this.x > this.endX - this.width)
        this.speed = -3;
    if (this.x < this.startX)
        this.speed = 3;

    if (this.y > this.endY - this.height)
        this.speed = -3;
    if (this.y < this.startY)
        this.speed = 3;

    this.x += this.speed;
    if (window.utils.intersects(this, player)) {
        player.x = player.width;
        player.y = player.height;
    }

 //   this.y += this.speed;

}

Enemy.prototype.draw = function (context) {


    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scaleX, this.scaleY);

    var img = document.getElementById("zombie");
    img.height = this.height;
    img.width = this.width;

    context.drawImage(img, this.x, this.y);

    context.restore();
};
