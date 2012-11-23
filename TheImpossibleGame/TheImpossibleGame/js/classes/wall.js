function Wall(size, posX, posY) {
    if (size === undefined) { size = 50; }

    this.x = posX;
    this.y = posY;
    this.width = size;
    this.height = size;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
}

Wall.prototype.draw = function (context) {


    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scaleX, this.scaleY);

    var img = document.getElementById("wall");
    img.height = this.height;
    img.width = this.width;

    context.drawImage(img, this.x, this.y);

    context.restore();
};

Wall.prototype.hitWall = function (player, ax, ay) {
    if(this.x + this.width/2 > player.x  && ax < 0){
        vx = 0;
        ax = 0;
        return 1;
    }
    if(player.x + player.width/2 < this.x && ax > 0 ){
        vx = 0;
        ax = 0;
        return 2;
    }
            //  rectA.y + rectA.height / 2 < rectB.y 
          //    rectB.y + rectB.height / 3 < rectA.y

}