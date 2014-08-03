jQuery(document).ready(function($) {
 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 102}, 5000);
	});
});

if ($(window).width() > 768){
	$(window).bind("scroll", function() {
	    if ($(this).scrollTop() > 400) {
	        $("#top").fadeIn();
	    } else {
	        $("#top").stop().fadeOut();
	    }
	});
}