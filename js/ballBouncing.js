var ballBouncing = {
	x: window.innerWidth/2,
	y: window.innerHeight/2,
	xSpeed: 3,
	ySpeed: 1.5,
	bounce: function(){
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if(this.x >= window.innerWidth || this.x <= 0){
			this.xSpeed *= -1;
		}
		if(this.y >= window.innerHeight || this.y <= 0){
			this.ySpeed *= -1;
		}
	},
	display: function(c){
		c.clearRect(0, 0, window.innerWidth, window.innerHeight);
		c.beginPath();
		c.arc(this.x, this.y, 8, 0, 2 * Math.PI, false);
		c.fillStyle = 'green';
		c.fill();
		c.lineWidth = 3;
		c.strokeStyle = '#003300';
		c.stroke();
	},
	update: function(c){
		this.display(c);
		this.bounce();
	}
};
