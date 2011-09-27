$(document).ready(function() {
	alert("ready");
	
	$('article h2 a').click(function() {
		alert("click");
		
		history.pushState({ path: this.path }, '', this.href);
		$(".main").load(this.href + " .main>*", "");
		return false; 
	});

	$(window).bind('popstate', function() {
		$(".main").load(location.pathname + " .main>*", "");
	});
});
