$(document).ready(function() {
	$('.post h2 a').click(function() {
		history.pushState({ path: this.path }, '', this.href);
		$.get(this.href, function(data) {
			$('.listing').slideTo(data)      
		});
		return false; 
	});

	$(window).bind('popstate', function() {
		$('.listing').slideTo(location.pathname);
	});
});

slideTo:function(a) {
	$(this).html(a);
}