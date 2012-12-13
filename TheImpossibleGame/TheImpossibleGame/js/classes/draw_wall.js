var wall = document.getElementById("wall");
function wall_vertical(context, fromX,fromY, toY,scale, player) {

    context.save();
    while (fromY <= toY) {
        context.drawImage(wall, fromX, fromY, scale, scale);
        //Collision detect
        if(!(player.x + player.width < fromX ||
             fromX + scale < player.x ||
             player.y + player.height < fromY ||
             fromY + scale  < player.y)) {
 			 player.x = player.XBefore
             player.y = player.YBefore;
             }
          
        fromY += scale;
    }
    context.restore();
};
function wall_horizontal(context, fromX,fromY, toX,scale, player) {

    context.save();
    while (fromX <= toX) {
        context.drawImage(wall, fromX, fromY, scale,scale); 
        
         //Collision detect
        if(!(player.x + player.width < fromX ||
             fromX + scale < player.x ||
             player.y + player.height < fromY ||
             fromY + scale  < player.y)) {
              player.x = player.XBefore
              player.y = player.YBefore;
             }
             
        fromX += scale;
    }
    context.restore();
};
