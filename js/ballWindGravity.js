var ballWindGravity = (function(){

		var gravity = vec2.fromValues(0, 0.1),
				wind = vec2.fromValues(0.01, 0),

				draw = function(c){
					matter.applyForce(gravity);
					// matter.applyForce(wind);
					
					matter.show(c);
					matter.bounce();
					matter.move();
				};

		return {
			update: draw
		}
})()
