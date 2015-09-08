function Matter(mass, pos, vel, acc){
    this.mass = mass;
    this.position = vec2.fromValues(pos[0], pos[1]);
    this.velocity = vec2.fromValues(vel[0], vel[1]);
    this.acceleration = vec2.fromValues(acc[0], acc[1]);

    this.move = function(){
        vec2.add(this.velocity, this.velocity, this.acceleration);
        vec2.add(this.position, this.position, this.velocity);

        vec2.limit(this.velocity, this.velocity, 10);
        vec2.multXY(this.acceleration, 0);
    };

    this.show = function(c){
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.beginPath();
        c.arc(this.position[0], this.position[1], 6, 0, 2 * Math.PI, false);
        c.fillStyle = '#008800';
        c.fill();
        c.lineWidth = 2;
        c.strokeStyle = '#001100';
        c.stroke();
    };

    this.applyForce = function(force){
        var fo = vec2.clone(force);
        vec2.divXY(fo, this.mass);
        vec2.add(this.acceleration, this.acceleration, fo);
    };

    this.bound = function(){
        if(this.position[0] >= window.innerWidth - 10 || this.position[0] <= 0){
          vec2.multX(this.velocity, -1);
        }
        if(this.position[1] >= window.innerHeight - 10 || this.position[1] <= 0){
          vec2.multY(this.velocity, -1);
        }
    };
}
