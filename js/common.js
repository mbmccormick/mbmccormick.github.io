function supports_history_api() {
	return !!(window.history && history.pushState);
}

$(document).ready(function() {
	if (supports_history_api()) {
		$('article h2 a, .pagination a').live("click", function(e) {
			if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
				return true;
				
			var tmp = $(".main").after("<section class='right'></section>").hide();
			
			history.pushState({ path: this.path }, '', this.href);
			
			$(tmp).load(this.href + " .main>*", function() {
				$("html, body").animate({ scrollTop:0 }, 0);
			});
			
			$(".main").animate({ marginLeft: "-330px"}).hide().remove();
			
			$(tmp).show().animate({ marginLeft: "310px"}).removeClass("right").addClass("main");
						
			return false; 
		});

		$(window).bind('popstate', function() {
			$(".main").load(location.pathname + " .main>*", function() {
				$("html, body").animate({ scrollTop:0 }, 0);
			});
		});
	}	
});
