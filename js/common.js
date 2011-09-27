function slideLeft() {
    $(".right").show();
    $(".right").animate({ marginLeft: "310px"});
    $(".right").addClass("main");
    $(".right").removeClass("right");

    $("html, body").animate({ scrollTop:0 }, 0);
}

function slideRight() {
    $(".left").show();
    $(".left").animate({ marginLeft: "310px"});
    $(".left").addClass("main");
    $(".left").removeClass("left");

    $("html, body").animate({ scrollTop:0 }, 0);
}

var isFirstExecution = true;

$(document).ready(function() {
    if (!!(window.history && history.pushState)) {
        $('article h2 a, article a.continue, .pagination .next a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            $(".main").after("<section class='right'></section>");
                
            $(".right").load(this.href + " .main>*", function() {
                $(".main").remove();
                slideLeft();
                
                if ($(".main h1").text().length > 0)
                    document.title = "Matt McCormick - " + $(".main h1").text();
                else
                    document.title = "Matt McCormick";
            });
                 
            history.pushState('', '', this.href);
            
            return false; 
        });
        
        $('.pagination .prev a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            $(".main").after("<section class='left'></section>");
            
            $(".left").load(location.pathname + " .main>*", function() {
                $(".main").remove();
                slideRight();
                
                if ($(".main h1").text().length > 0)
                    document.title = "Matt McCormick - " + $(".main h1").text();
                else
                    document.title = "Matt McCormick";
            });
            
            history.pushState('', '', this.href);
                        
            return false; 
        });

        $(window).bind('popstate', function() {
            if (isFirstExecution) {
                isFirstExecution = false;
                return true;
            }
            
            if (location.href.split("/").length > document.referrer.split("/").length) {
                $(".main").after("<section class='left'></section>").hide();
                
                $(".left").load(location.pathname + " .main>*", function() {
                    $(".main").remove();
                    slideRight();
                    
                    if ($(".main h1").text().length > 0)
                        document.title = "Matt McCormick - " + $(".main h1").text();
                    else
                        document.title = "Matt McCormick";
                });
            }
            else {
                $(".main").after("<section class='right'></section>").hide();
                
                $(".right").load(location.pathname + " .main>*", function() {
                    $(".main").remove();
                    slideLeft();
                    
                    if ($(".main h1").text().length > 0)
                        document.title = "Matt McCormick - " + $(".main h1").text();
                    else
                        document.title = "Matt McCormick";
                });                
            }
        });
    }    
});
