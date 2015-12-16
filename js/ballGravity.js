var ballGravity = (function(){
    var matter = [],
    draw = function(c){

        var wind = vec2.fromValues(0.01, 0);

        matter.forEach(function(v,i,a){
            var gravity = vec2.fromValues(0, 0.6 * v.mass);  
            v.applyForce(gravity).applyForce(wind);
            v.show(c).bound().move();
        });
      
    },

    init = function(c){
        var o;
        for(var i = 0; i < 2; i++){
            o = new Matter(random(5, 20), [100, 100], [0, 0], [0, 0]);
            matter.push(o);
        }        
    };

    return {
        update: draw,
        init: init
    };

})();
