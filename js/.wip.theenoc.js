(function(){
	var camera, scene, renderer, material, radius = 1, segments = 32, circleGeometry, circle;

	init();
	animate();

	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		document.body.appendChild( renderer.domElement );

		material = new THREE.MeshBasicMaterial({
			color: 0x0000ff
		});

		circleGeometry = new THREE.CircleGeometry( radius, segments );
		circle = new THREE.Mesh( circleGeometry, material );
		scene.add( circle );

		camera.position.z = 100;
	}

	function animate() {
		requestAnimationFrame( animate );
		render();
	}

	function render() {
		circle.position.x += 0.1;
		circle.position.y += 0.1;
		renderer.render( scene, camera );
	}
})();
