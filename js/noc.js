var nature = (function () {
	var conf = {
			screen_width: window.innerWidth,
			screen_height: window.innerHeight,
			play: true,
			mouse: []
		},
		ctx, robot;

	var _createCanvas = function(){
		var canvas = document.createElement('canvas');
	    canvas.width = conf.screen_width;
	    canvas.height = conf.screen_height;
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		// ctx.translate(0.5, 0.5);
	};

	var _render = function () {
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		robot.update(ctx, conf.mouse);
		if(conf.play)
	    	requestAnimationFrame(_render);
	};

	var _addControls = function(){
		var pause = document.getElementById('pause');
		var resume = document.getElementById('resume');

		document.addEventListener('mousemove', function(e){
			conf.mouse = [e.pageX, e.pageY];
		})

		pause.addEventListener('click', function(event) {
			conf.play = false;
		});

		resume.addEventListener('click', function(event) {
			conf.play = true;
			_render();
		});
	};

	var _addObjectToNature = function(obj){
		robot = obj;
	}

	var _once = function(){
		robot.init();
	}

	var init = function (obj) {
		_addObjectToNature(obj)
		_addControls();
		_createCanvas();
		_render();
		_once();
	};

	return {
		beginWith: init
	}
})();
