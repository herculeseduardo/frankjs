(function( $ , Frank){
    
    $.fn.animeVert = function(options) {
    	Frank.append();
    	clearInterval(Frank.t2);
        var defaults = {
          'x' : Frank.x,
          'y' : Frank.y,
          'w' : Frank.w,
          'temp' : Frank.h,
          'color' : Frank.color,
          'max' : Frank.MAX
        };
        var settings = $.extend( {}, defaults, options );
    	return this.each(function() {
			Frank.draw(settings);
        });
    }

})( jQuery, window.Frank = window.Frank || {}, undefined);