(function(a){
    a.fn.textyleF=function(b){
        var g=this;
        d=g.contents();
        var f={
            duration: 1000,
            delay: 150,
            easing: "ease",
            callback: null
        };
        var c=a.extend(f,b);
        d.each(function(){
            var h=a(this);
            if(this.nodeType === 3){
                e(h)
            }
        });
        function e(h){
            h.replaceWith(h.text().replace(/(\S)/g,"<span>$1</span>"))
        }
        return this.each(function(h){
            var j=g.children("span");
            g.css("opacity",1);
            j.css("display","inline-block");
            j.each(function(k){
                a(this).delay(c.delay*k).queue(function(i){
                    a(this).css({
                        transform:"rotateY(0deg) rotateX(0deg)",
                        opacity: 1,
                        transitionDuration:c.duration+"ms",
                        transitionTimingFunction:c.easing
                    });
                    if(typeof c.callback === "function"){
                        a(this).on("transitionend",function(){
                            c.callback.call(this)
                        })
                    }
                })
            })
        })
    }
}(jQuery));