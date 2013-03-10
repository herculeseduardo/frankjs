(function(Frank, undefined){

	var WIDTH = 800;
	var HEIGHT = 500;
	var canvasElement = $("<canvas width='" + WIDTH + "' height='" + HEIGHT + "'></canvas>");
	var canvas = canvasElement.get(0).getContext("2d");
	
	Frank.t2;
	var MAX = 340;
	var MIN = 0;
	var speed = 10;
	Frank.x = 400;
    Frank.y = 410;
    Frank.w = 10;
    Frank.h = 1;
    Frank.color = 'red';
    
    Frank.rect = function(x,y,w,h){
    	var background_canvas = document.querySelector("canvas");
        var context = background_canvas.getContext("2d");
        var gradient = context.createLinearGradient(0, 300, 0, 0); 
        gradient.addColorStop(0, "#F08080");
        gradient.addColorStop(1, "#FF0000");
        context.fillStyle = gradient;
        canvas.fillRect(x, y, w, h);
    }
	Frank.append = function(){
		canvasElement.appendTo('body');
	}

	Frank.draw = function(vals){
	    Frank.color = vals.color || Frank.color;
	    Frank.x = vals.x || Frank.x;
	    //DrawBar.y = vals.y || DrawBar.y;
	    Frank.w = vals.w || Frank.w;
		Frank.t2 = setInterval(function(){
			if(vals.temp > Frank.h){
				Frank.h = Frank.h + 1;
				if((Frank.h * (- 1)) == vals.temp * (- 1) || Frank.h >= MAX){clearInterval(Frank.t2);}
			}else if(vals.temp < Frank.h){
				Frank.h = Frank.h - 1;
				if(Frank.h == vals.temp || Frank.h < MIN){clearInterval(Frank.t2);}
			}
			canvas.clearRect(0, 0, WIDTH, HEIGHT);
			Frank.rect(Frank.x, Frank.y, Frank.w, Frank.h * -1);
			//canvas.drawImage(img, Frank.x - 20, 50);
		}, vals.speed || 10);
	}


})(window.Frank = window.Frank || {});


(function( $ ){
    
    $.fn.animeVert = function(options) {
    	Frank.append();
    	clearInterval(Frank.t2);
        var defaults = {
          'x' : Frank.x,
          'y' : Frank.y,
          'w' : Frank.w,
          'temp' : Frank.h,
          'color' : Frank.color
        };
        var settings = $.extend( {}, defaults, options );
    	return this.each(function() {
			Frank.draw(settings);
        });
    }

})( jQuery );
