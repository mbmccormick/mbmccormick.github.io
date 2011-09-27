function supports_history_api() {
	return !!(window.history && history.pushState);
}

$(document).ready(function() {
	if (supports_history_api()) {
		$('article h2 a, .pagination a').live("click", function(e) {
			if ((e.which == 1 && !e.metaKey && !e.shiftKey) == false)
				return true;
				
			history.pushState({ path: this.path }, '', this.href);
			
			$(".main").hide();
			$(".loading").show();
			
			$(".main").load(this.href + " .main>*", function() {
				$("html, body").animate({ scrollTop:0 }, 0);
			});
			
			$(".loading").hide();
			$(".main").show();
			
			return false; 
		});

		$(window).bind('popstate', function() {
			$(".main").hide();
			$(".loading").fadeIn();
			
			$(".main").load(location.pathname + " .main>*", function() {
				$("html, body").animate({ scrollTop:0 }, 0);
			});
			
			$(".loading").hide();
			$(".main").show();
		});
	}	
});
