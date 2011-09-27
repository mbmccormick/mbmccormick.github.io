function slideLeft() {
    $(".right").show();
    $(".right").animate({ marginLeft: "310px"});
    $(".right").addClass("main");
    $(".right").removeClass("right");
}

function slideRight() {
    $(".left").show();
    $(".left").animate({ marginLeft: "310px"});
    $(".left").addClass("main");
    $(".left").removeClass("left");
}

var isFirstExecution = true;

$(document).ready(function() {
    if (!!(window.history && history.pushState)) {
        $('article h2 a, .pagination .next a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            document.title = "Matt McCormick - " + $(".main h1").text();
            
            history.pushState('', '', this.href);
            
            $(".main").after("<section class='right'></section>").hide();
                
            $(".right").load(this.href + " .main>*", function() {
                $("html, body").animate({ scrollTop:0 }, 0);
                $(".main").remove();
                slideLeft();
            });
                        
            return false; 
        });
        
        $('.pagination .prev a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            document.title = "Matt McCormick - " + $(".main h1").text();
            
            history.pushState('', '', this.href);
            
            $(".main").after("<section class='left'></section>").hide();
            
            $(".left").load(location.pathname + " .main>*", function() {
                $("html, body").animate({ scrollTop:0 }, 0);
                $(".main").remove();
                slideRight();
            });
                        
            return false; 
        });

        $(window).bind('popstate', function() {
            if (isFirstExecution) {
                isFirstExecution = false;
                return true;
            }
            
            $(".main").after("<section class='left'></section>").hide();
            
            $(".left").load(location.pathname + " .main>*", function() {
                $("html, body").animate({ scrollTop:0 }, 0);
                $(".main").remove();
                slideRight();
            });
        });
    }    
});
