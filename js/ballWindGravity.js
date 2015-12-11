var ballWindGravity = (function(){

	var gravity = vec2.fromValues(0, 0.2),
			wind = vec2.fromValues(0.5, 0),
			mouseDown = 0,
			matter = new Matter(1, [0, 0], [0, 0], [0.1, 0.02]),

			draw = function(c){
				//forces
				if(mouseDown)
					matter.applyForce(wind);

				matter.applyForce(gravity);

				// rendering
				matter.show(c);
				matter.bound();
				matter.move();
			},

			events = function(){
				document.addEventListener('mousedown', function(){
					mouseDown = 1;
				});

				document.addEventListener('mouseup', function(){
					mouseDown = 0;
				});
			};

		return {
			update: draw,
			init: events
		};
})();
