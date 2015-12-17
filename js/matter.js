function Matter(mass, pos, vel, acc){
    this.mass = mass;
    this.position = vec2.fromValues(pos[0], pos[1]);
    this.velocity = vec2.fromValues(vel[0], vel[1]);
    this.acceleration = vec2.fromValues(acc[0], acc[1]);
    // random colors
    // this.colors = ["#16A085", "#2ECC71", "#27AE60", "#3498DB", "#2980B9", "#9B59B6", "#8E44AD", "#34495E", "#2C3E50", "#22313f", "#F1C40F", "#F39C12", "#E67E22", "#D35400", "#E74C3C", "#C0392B", "#ECF0F1", "#BDC3C7", "#BDC3C7", "#95A5A6", "#7F8C8D"];
    // this.randColor = Math.floor(Math.random() * 2);
    this.colors = ["#FFFFFF"];
    //gravity variables
    this.G =  0.001;
    this.direction = vec2.create();
    this.attraction = vec2.create();
    

    this.move = function(){
        vec2.add(this.velocity, this.velocity, this.acceleration);
        vec2.add(this.position, this.position, this.velocity);

        vec2.limit(this.velocity, this.velocity, 10);
        vec2.multXY(this.acceleration, 0);

        return this;
    };

    this.getColor = function(){
        return this.colors[0];
    };

    this.show = function(c){
        c.beginPath();
        c.arc(this.position[0], this.position[1], this.mass/2, 0, 2 * Math.PI, false);
        c.fillStyle = "rgba(255,255,255,0.4)";
        c.fill();

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

        if(awayY || homeY){
            if(awayY)
                this.position[1] = window.innerHeight - this.mass;
            if(homeY)
                this.position[1] = 0;
          vec2.multY(this.velocity, -1);
        }

        return this;
    };
    
    this.attract = function(o){
        // direction of the force. |r|
        var dir = vec2.sub(this.direction, this.position, o.position);
        var distance = vec2.length(dir);
        if(distance > 10){
            distance = 10;
        }else if(distance < 0){
            distance = 0
        }
        // unit vector of the direction without magnitude
        vec2.normalize(dir, dir);
        // force calculation
        var force = (this.G * this.mass * o.mass) / (distance * distance);
        // gravity = gmm|r|*1/r*r
        var attr = vec2.multXY(dir, force);
        return attr;
    }
}