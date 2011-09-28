function slideLeft() {
    $(".main").animate({ left: "-330px"}, function() {
        $(".main").remove();
    });
    
    $(".right").show();
    $(".right").animate({ left: "310px"}, function() {
        $(".right").addClass("main");
        $(".right").removeClass("right");
        $("html").css("cursor", "auto");
    });
    
    $("html, body").animate({ scrollTop:0 }, 0);
    
    $(".last").html(location.href);
}

function slideRight() {
    $(".main").animate({ left: "950px"}, function() {
        $(".main").remove();
    });
    
    $(".left").show();
    $(".left").animate({ left: "310px"}, function(){
        $(".left").addClass("main");
        $(".left").removeClass("left");
        $("html").css("cursor", "auto");
    });

    $("html, body").animate({ scrollTop:0 }, 0);
    
    $(".last").html(location.href);
}

var isFirstExecution = true;

$(document).ready(function() {
    if (!!(window.history && history.pushState)) {
        $('article h2 a, article a.continue, .pagination .next a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            $("html").css("cursor", "progress");
            
            $(".main").after("<section class='right'></section>");
                
            $(".right").load(this.href + " .main>*", function() {
                if ($(".right h1").text().length > 0)
                    document.title = "Matt McCormick - " + $(".right h1").text();
                else
                    document.title = "Matt McCormick";
                
                slideLeft();
            });
                 
            history.pushState('', '', this.href);
            
            return false; 
        });
        
        $('.pagination .prev a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            $("html").css("cursor", "progress");
            
            $(".main").after("<section class='left'></section>");
            
            $(".left").load(location.pathname + " .main>*", function() {
                if ($(".left h1").text().length > 0)
                    document.title = "Matt McCormick - " + $(".left h1").text();
                else
                    document.title = "Matt McCormick";
                
                slideRight();
            });
            
            history.pushState('', '', this.href);
                        
            return false; 
        });

        $(window).bind('popstate', function() {
            if (isFirstExecution) {
                isFirstExecution = false;
                return true;
            }
            
            if (location.href.split("/").length <= $(".last").text().split("/").length) {
                $("html").css("cursor", "progress");
                
                $(".main").after("<section class='left'></section>");
                
                $(".left").load(location.pathname + " .main>*", function() {
                    if ($(".left h1").text().length > 0)
                        document.title = "Matt McCormick - " + $(".left h1").text();
                    else
                        document.title = "Matt McCormick";
                    
                    slideRight();
                });
            }
            else {
                $("html").css("cursor", "progress");
                
                $(".main").after("<section class='right'></section>");
                
                $(".right").load(location.pathname + " .main>*", function() {
                    if ($(".right h1").text().length > 0)
                        document.title = "Matt McCormick - " + $(".right h1").text();
                    else
                        document.title = "Matt McCormick";
                    
                    slideLeft();
                });                
            }
        });
    }    
});
