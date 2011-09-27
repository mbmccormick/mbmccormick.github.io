$(document).ready(function() {
	$('article h2 a').live("click", function() {
		history.pushState({ path: this.path }, '', this.href);
		$(".main").load(this.href + " .main>*", function() {
			$("html, body").animate({ scrollTop:0 }, 800);
		});
		return false; 
	});

	$(window).bind('popstate', function() {
		$(".main").load(location.pathname + " .main>*", function() {
			$("html, body").animate({ scrollTop:0 }, 800);
		});
	});
});
