
// Create a nature object that would take different objects and render them in general
var nature = (function () {
	// intial settings, mouse holds the current mouse location, robot is the alias for an external object, play is the animation state.
	var conf = {
			screen_width: window.innerWidth,
			screen_height: window.innerHeight,
			play: true,
			mouse: []
		},
		ctx, robot;

	//create a canvas element and sets the context to the ctx defined along with conf.
	var _createCanvas = function(){
		var canvas = document.createElement('canvas');
	    canvas.width = conf.screen_width;
	    canvas.height = conf.screen_height;
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		// translate to 0.5 to disable anitaliasing
		// if (window.devicePixelRatio > 1) {
		//     var canvasWidth = canvas.width;
		//     var canvasHeight = canvas.height;
		// 
		//     canvas.width = canvasWidth * window.devicePixelRatio;
		//     canvas.height = canvasHeight * window.devicePixelRatio;
		//     canvas.style.width = canvasWidth;
		//     canvas.style.height = canvasHeight;
		// 
		//     ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		// }
	};

	var _render = function () {
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		robot.update(ctx, conf.mouse);
		if(conf.play)
	    	requestAnimationFrame(_render);
	};

	// add the pause resume button to the system
	var _addControls = function(){
		var pause = document.getElementById('pause');
		var resume = document.getElementById('resume');

		document.addEventListener('mousemove', function(e){
			conf.mouse = [e.pageX, e.pageY];
		});

		pause.addEventListener('click', function(event) {
			conf.play = false;
		});

		resume.addEventListener('click', function(event) {
			conf.play = true;
			_render();
		});
	};

	// copy a local reference
	var _addObjectToNature = function(obj){
		robot = obj;
	};

	//a method that executes the objects' init method once
	var _once = function(){
		robot.init();
	};

	// the first method that is called
	// addobject copies the reference to the object we are passing.
	// once execute the init method in the object just once, gets useful when a events need initiliasation like mousedown, mouseup.. once..
	var init = function (obj) {
		_addObjectToNature(obj);
		_addControls();
		_createCanvas();
		_once();
		_render();
	};

	// expose the only public method
	return {
		beginWith: init
	};
})();
