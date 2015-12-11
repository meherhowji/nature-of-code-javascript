var ballFriction = (function(){
		var matter = [],
		draw = function(c){
			matter.forEach(function(v){
				// Friction = −1*µ*N*v
				var gravity = vec2.fromValues(0, 0.98 * v.mass),
					wind = vec2.fromValues(0.2, 0),
					cx = -1 * 0.1,
					n = 1,
					frictionMag = cx * n,
					friction = vec2.clone(v.velocity);

				vec2.normalize(friction, friction);
				vec2.multXY(friction, frictionMag);


				v.applyForce(friction).applyForce(wind).applyForce(gravity);
				v.show(c).bound().move();
			});
		},

		init = function(){
				for(var i = 0; i < 1; i++){
					var o = new Matter(randomF(10, 15), [100, 100], [0, 0], [0, 0]);
					matter.push(o);
				}
		};

		return {
			update: draw,
			init: init
		};
})();
