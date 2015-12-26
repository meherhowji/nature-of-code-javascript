var perlinColor = {
    
    map: function(value, istart, istop, ostart, ostop) {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    },
    
    display: function(c) {  
        var r = 0;
        var g = 0;
        var b = 0;       
           
        for (var i = 0; i < window.innerWidth; i++) {
            for(var j = 0; j < window.innerHeight; j++) {
                r = noise(j/100);
                g = noise(j/100);
                b = noise(j/100);
                // r = Math.random();
                // g = Math.random();
                // b = Math.random();
                r = map(r, 0, 1, 0, 255)
                g = map(g, 0, 1, 0, 255)
                b = map(b, 0, 1, 0, 255)
                
                c.fillStyle = 'rgb('+ r +','+ g +','+ b +')';
                c.fillRect(i, j, 10, 10);
            }
        }
    },
    
    update: function(){
        return false;
    },
    
    init: function(c){
        this.display(c);
    }
}
