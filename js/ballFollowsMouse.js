var ballFollowsMouse = (function(){

		var loc = vec2.fromValues(400, 200),
			vel = vec2.fromValues(8, 5),
			mou = vec2.create(),
			acc = vec2.create(),

			bounce = function(m){
				//vec2.add(loc, loc, vel);
				if(!m.length){
					m[0] = m[1] = window.innerWidth/2
				}

				// console.log(m, loc, vel, acc)
				vec2.set(mou, m[0], m[1]);
				vec2.sub(acc, mou, loc);
				vec2.normalize(acc, acc);
				vec2.scale(acc, acc, 0.5);
				//
				vec2.add(vel, vel, acc);
				vec2.limit(vel, vel, 8);
				vec2.add(loc, loc, vel);
			},

			display = function(c){
				c.clearRect(0, 0, window.innerWidth, window.innerHeight);
				c.beginPath();
				c.arc(loc[0], loc[1], 8, 0, 2 * Math.PI, false);
				c.fillStyle = 'green';
				c.fill();
				c.lineWidth = 3;
				c.strokeStyle = '#003300';
				c.stroke();
			},

			update = function(c, m){
				display(c);
				bounce(m);
			},

			once = function(){};

		return {
			update: update,
			init: once
		}
})()
