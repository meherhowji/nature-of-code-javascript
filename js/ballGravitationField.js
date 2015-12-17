// All the points getting attracted to single pixel
// making the motion look a bit unrealistic
// TODO:
// Fix the field

var ballGravitationField = (function(){
    var moon = [],
    
    update = function(c){
        var gravity = [0,0];
        moon.forEach(function(v) {
          moon.forEach(function(k) {
            if ( v !== k) {
              gravity = k.attract(v);
              v.applyForce(gravity);
            }
          })
          v.show(c).bound().move(); 
        });
    },

    init = function(){
        for(var i = 0; i < 2; i++){
            var o = new Matter(randomF(1, 40), [random(400, window.innerWidth/2), random(400, window.innerHeight/2)], [0, 0], [0, 0]);
            moon.push(o);
        }
        
        // earth = new Attractor(10, [window.innerWidth/2 - 10, window.innerHeight/2 - 10]);
    };

    return {
        update: update,
        init: init
    };

})();