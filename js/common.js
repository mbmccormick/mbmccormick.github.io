function slideLeft() {
    $("body").css("cursor", "progress");
            
    $(".main").after("<section class='right'></section>");
    
    $(".right").load(location.href + " .main>*", function() {
        if ($(".right h1").text().length > 0)
            document.title = "Matt McCormick - " + $(".right h1").text();
        else
            document.title = "Matt McCormick";
                        
        $("body").css("cursor", "auto");
        
        $(".main").animate({ left: "-330px"}, function() {
            $(".main").remove();
        });
        
        $(".right").show();
        $(".right").animate({ left: "310px"}, function() {
            $(".right").addClass("main");
            $(".right").removeClass("right");
        });
        
        $("html, body").animate({ scrollTop:0 }, 0);
    });
}

function slideRight() {
    $("body").css("cursor", "progress");
            
    $(".main").after("<section class='left'></section>");
    
    $(".left").load(location.pathname + " .main>*", function() {
        if ($(".left h1").text().length > 0)
            document.title = "Matt McCormick - " + $(".left h1").text();
        else
            document.title = "Matt McCormick";
        
        $("body").css("cursor", "auto");
        
        $(".main").animate({ left: "950px"}, function() {
            $(".main").remove();
        });
        
        $(".left").show();
        $(".left").animate({ left: "310px"}, function(){
            $(".left").addClass("main");
            $(".left").removeClass("left");
        });
    
        $("html, body").animate({ scrollTop:0 }, 0);
    });
}

function transition() {
    $("body").css("cursor", "progress");
            
    $(".main").after("<section class='right'></section>");
    
    $(".right").load(location.href + " .main>*", function() {
        if ($(".right h1").text().length > 0)
            document.title = "Matt McCormick - " + $(".right h1").text();
        else
            document.title = "Matt McCormick";
                        
        $("body").css("cursor", "auto");
        
        $(".main").fadeOut(function() {
            $(".main").remove();
            $(".right").addClass("main");
            $(".right").removeClass("right");
            $(".main").hide();
            $(".main").fadeIn();
        });
        
        $("html, body").animate({ scrollTop:0 }, 0);
    });
}

var isFirstExecution = true;

$(document).ready(function() {
    if (!!(window.history && history.pushState)) {
        $('article h2 a, article a.continue, .pagination .next a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
                        
            $(".back").html(location.href);            
            history.pushState('', '', this.href);
            $(".current").html(location.href);
            
            slideLeft();
            
            return false; 
        });
        
        $('.pagination .prev a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            $(".back").html(location.href);            
            history.pushState('', '', this.href);
            $(".current").html(location.href);
            
            slideRight();
            
            return false; 
        });
        
        $('aside a.logo, nav ul li a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            $(".back").html(location.href);            
            history.pushState('', '', this.href);
            $(".current").html(location.href);
            
            transition();
            
            return false; 
        });

        $(window).bind('popstate', function() {
            if (isFirstExecution) {
                isFirstExecution = false;
                return true;
            }
            
            var current = $(".current").text();
            
            $(".back").html($(".current").text());
            $(".current").html(location.href);
            $(".forward").html(current);
            
            if (location.href != $(".forward").text()) {
                $(".back").html("");
                slideRight();
            }
            else {
                $(".forward").html("");
                slideLeft();   
            }
        });
    }    
});
