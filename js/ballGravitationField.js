// All the points getting attracted to single pixel
// making the motion look a bit unrealistic
// TODO:
// Fix the field

var ballGravitationField = (function(){
    var earth, moon = [],
    
    update = function(c){
        
        moon.forEach(function(v){
          var gravity = earth.attract(v);
          v.applyForce(gravity);
          v.show(c).bound().move(); 
        });
          
        earth.show(c);
    },

    init = function(){
        for(var i = 0; i < 150; i++){
            var o = new Matter(randomF(1, 3), [random(50, 1080), random(50, 1080)], [0, 0], [0, 0]);
            moon.push(o);
        }
        
        earth = new Attractor(10, [window.innerWidth/2 - 10, window.innerHeight/2 - 10]);
    };

    return {
        update: update,
        init: init
    };

})();