var ballFriction = (function(){
		var matter = [],
		draw = function(c){
			matter.forEach(function(v){
				var gravity = vec2.fromValues(0, 0.6 * v.mass),
					wind = vec2.fromValues(0.0, 0),
					cx = -1 * 1,
					n = 1,
					frictionMag = cx * n,
					friction = vec2.clone(v.velocity);

				vec2.normalize(friction, friction);
				vec2.multXY(friction, frictionMag)


				v.applyForce(friction).applyForce(wind).applyForce(gravity);
				v.show(c).bound().move();
			})
		},

		init = function(){
				for(var i = 0; i < 1; i++){
					var o = new Matter(random(5, 15), [100, 100], [0, 0], [0, 0]);
					matter.push(o);
				};
		};

		return {
			update: draw,
			init: init
		}
})()
