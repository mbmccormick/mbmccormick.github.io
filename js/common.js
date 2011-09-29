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
        
        $(".last").html(location.href);
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
        
        $(".last").html(location.href);
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
            $(".main").fadeIn();
        });
        
        $("html, body").animate({ scrollTop:0 }, 0);
        
        $(".last").html(location.href);
    });
}

var isFirstExecution = true;

$(document).ready(function() {
    if (!!(window.history && history.pushState)) {
        $('article h2 a, article a.continue, .pagination .next a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            history.pushState('', '', this.href);
            
            slideLeft();
            
            return false; 
        });
        
        $('.pagination .prev a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            history.pushState('', '', this.href);
            
            slideRight();
            
            return false; 
        });
        
        $('nav ul li a').live("click", function(e) {
            if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
                return true;
            
            history.pushState('', '', this.href);
            
            transition();
            
            return false; 
        });

        $(window).bind('popstate', function() {
            if (isFirstExecution) {
                isFirstExecution = false;
                return true;
            }
            
            if (location.href.split("/").length <= $(".last").text().split("/").length) {
                slideRight();
            }
            else {
                slideLeft();               
            }
        });
    }    
});
