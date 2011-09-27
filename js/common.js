function supports_history_api() {
	return !!(window.history && history.pushState);
}

$(document).ready(function() {
	if (supports_history_api()) {
		$('article h2 a, .pagination a').bind("click", function(e) {
			if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
				return true;
				
			history.pushState({ path: this.path }, '', this.href);
			
			$(".main").after("<section class='right'></section>").hide();
			
			$(".right").load(this.href + " .main>*", function() {
				$("html, body").animate({ scrollTop:0 }, 0);
			});
			
			$(".main").animate({ marginLeft: "-330px"})
			$(".main").remove();
			
			$(".right").show();
			$(".right").animate({ marginLeft: "310px"});
			$(".right").addClass("main");
			$(".right").removeClass("right");
						
			return false; 
		});

		$(window).bind('popstate', function() {
			$(".main").after("<section class='left'></section>").hide();
			
			$(".left").load(location.pathname + " .main>*", function() {
				$("html, body").animate({ scrollTop:0 }, 0);
			});
			
			$(".main").animate({ marginLeft: "950px"})
			$(".main").remove();
			
			$(".left").show();
			$(".left").animate({ marginLeft: "310px"});
			$(".left").addClass("main");
			$(".left").removeClass("left");
		});
	}	
});
