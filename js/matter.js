function Matter(mass, pos, vel, acc){
    this.mass = mass;
    this.position = vec2.fromValues(pos[0], pos[1]);
    this.velocity = vec2.fromValues(vel[0], vel[1]);
    this.acceleration = vec2.fromValues(acc[0], acc[1]);
    this.colors = ["#16A085", "#2ECC71", "#27AE60", "#3498DB", "#2980B9", "#9B59B6", "#8E44AD", "#34495E", "#2C3E50", "#22313f", "#F1C40F", "#F39C12", "#E67E22", "#D35400", "#E74C3C", "#C0392B", "#ECF0F1", "#BDC3C7", "#BDC3C7", "#95A5A6", "#7F8C8D"];
    this.randColor = Math.floor(Math.random() * 20);

    this.move = function(){
        vec2.add(this.velocity, this.velocity, this.acceleration);
        vec2.add(this.position, this.position, this.velocity);

        vec2.limit(this.velocity, this.velocity, 10);
        vec2.multXY(this.acceleration, 0);

        return this;
    };

    this.getColor = function(){
        return this.colors[this.randColor];
    };

    this.show = function(c){
        c.beginPath();
        c.arc(this.position[0], this.position[1], this.mass, 0, 2 * Math.PI, false);
        c.fillStyle = this.getColor();
        c.fill();
        c.lineWidth = 2;
        c.strokeStyle = 'rgba(0,0,0,0.2)';
        c.stroke();

        return this;
    };

    this.applyForce = function(force){
        var fo = vec2.clone(force);
        vec2.divXY(fo, this.mass);
        vec2.add(this.acceleration, this.acceleration, fo);

        return this;
    };

    this.bound = function(){
        var awayX = this.position[0] + (this.mass) >= window.innerWidth;
        var awayY = this.position[1] + (this.mass) >= window.innerHeight;
        var homeX = this.position[0] <= 0;
        var homeY = this.position[1] <= 0;

        if(awayX || homeX){
            if(awayX)
                this.position[0] = window.innerWidth - this.mass;
            if(homeX)
                this.position[0] = 0;
            vec2.multX(this.velocity, -1);
        }

        if(awayY || awayX){
            if(awayY)
                this.position[1] = window.innerHeight - this.mass;
            if(homeY)
                this.position[1] = 0;
          vec2.multY(this.velocity, -1);
        }

        return this;
    };
}
