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
    $("nav ul").each(function() {
        var list = $(this), select=$(document.createElement("select")).insertBefore($(this).hide());
        $(">li a", this).each(function() {
            var target = $(this).attr("target"),
                option = $(document.createElement("option"))
                    .appendTo(select)
                    .val(this.href)
                    .html($(this).html())
                    .click(function() {
                        if (target === "_blank") {
                            window.open($(this).val());
                        }
                        else {
                            window.location.href=$(this).val();
                        }
                    });
        });
    });    
    
    if (!!(window.history && history.pushState) == false) {
        return;
    }

    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i)) {
        return;
    }

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
        
    $('aside a.logo, nav ul li a').live("click", function(e) {
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
            
        slideRight();
    });
});
