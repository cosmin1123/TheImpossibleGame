﻿var wall = document.getElementById("wall");
var walls = new Array;
var index = 0;

function wall_vertical(context, fromX, fromY, toY, scale) {
    
    context.save();
    while (fromY <= toY) {
    	  context.drawImage(wall, scalePercentageX * fromX, 		             
   	  scalePercentageY * fromY, scalePercentageX * scale,
   	  scalePercentageY * scale);
        walls[index++] = new Wall(fromX, fromY, scale);
        fromY += scale;
    }
    context.restore();
};
function wall_horizontal(context, fromX,fromY, toX,scale) {

    context.save();
    while (fromX <= toX) {
        context.drawImage(wall, scalePercentageX * fromX, 		             
   	  scalePercentageY * fromY, scalePercentageX * scale,
   	  scalePercentageY * scale);
        walls[index++] = new Wall(fromX, fromY, scale);
        fromX += scale;
    }
    context.restore();
};
