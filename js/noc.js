var nature = (function () {
	var conf = {
			screen_width: window.innerWidth,
			screen_height: window.innerHeight,
			play: true,
			mouse: {}
		},
		ctx, matter;

	var _createCanvas = function(){
		var canvas = document.createElement('canvas');
	    canvas.width = conf.screen_width;
	    canvas.height = conf.screen_height;
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		ctx.translate(0.5, 0.5);
	};

	var _render = function () {
		matter.update(ctx);
		if(conf.play)
	    	requestAnimationFrame(_render);
	};

	var _addControls = function(){
		var pause = document.getElementById('pause');
		var resume = document.getElementById('resume');

		document.addEventListener('mousemove', function(e){
			conf.mouse = {
				x: e.pageX,
				y: e.pageY
			}
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
		matter = obj;
	}

	var init = function (obj) {
		_addObjectToNature(obj)
		_addControls();
		_createCanvas();
		_render();
	};

	return {
		beginWith: init
	}
})();
