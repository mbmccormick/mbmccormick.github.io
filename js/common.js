function render() {
    $(".gist").each(function() {
        $(this).load("http://apps.mbmccormick.com/gist-proxy/index.php?id=" + $(this).attr("id"));
    });
}

$(document).ready(function() {
    $("nav ul").each(function() {
        var list = $(this), select = $(document.createElement("select")).insertBefore($(this));
        
        $(document.createElement("option"))
            .appendTo(select)
            .html("Navigate...");
        
        $(">li a", this).each(function() {
            var target = $(this).attr("target"),
                option = $(document.createElement("option"))
                    .appendTo(select)
                    .val(this.href)
                    .html($(this).html());
        });
    });    
    
    $("nav select").change(function(){
        window.location = $(this).val();
    });
    
    render();
});
