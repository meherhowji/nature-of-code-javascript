var matter = (function() {
  
    var loc = vec2.fromValues(window.innerWidth/2, window.innerHeight/2),
        vel = vec2.fromValues(0, 0),
        acc = vec2.fromValues(0, 0),
        
        show = function(c) {
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);
            c.beginPath();
            c.arc(loc[0], loc[1], 8, 0, 2 * Math.PI, false);
            c.fillStyle = 'green';
            c.fill();
            c.lineWidth = 3;
            c.strokeStyle = '#003300';
            c.stroke();
        },
        
        applyForce = function(f){
            vec2.add(acc, acc, f);
        },
        
        move = function(){
            vec2.add(vel, vel, acc);
            vec2.add(loc, loc, vel);
            
            vec2.limit(vel, vel, 15);
            vec2.multXY(acc, 0);
        },
        
        bounce = function() {
            if(loc[0] >= window.innerWidth || loc[0] <= 0){
              vec2.multX(vel, -1);
            }
            if(loc[1] >= window.innerHeight || loc[1] <= 0){
              vec2.multY(vel, -1);
            }
        };
         
    return {
      show: show,
      move: move,
      bounce: bounce,
      applyForce: applyForce
    }
    
})();