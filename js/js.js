$(document).ready(function(){
    console.log( "ready!" );
	if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		$('.title').css("font-size", "38px");
	} else {
		$('.title').css("font-size", "48px");
	}
	$('#next').click(nextSlide);
});
document.addEventListener("wheel", function(e){
	if (e.deltaY < 0) {
		/*It's scrolling up*/
		prevSlide();
	}
	if (e.deltaY > 0) {
		/*It's scrolling down*/
		nextSlide();
	}
});

function nextSlide(){
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();
	
	if(nextSlide.length != 0){
		currentSlide.fadeOut(300).removeClass('active');
		nextSlide.fadeIn(300).addClass('active');
	}
}

function prevSlide(){
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.prev();
	
	if(nextSlide.length != 0){
		currentSlide.fadeOut(300).removeClass('active');
		nextSlide.fadeIn(300).addClass('active');
	}
}

document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
			prevSlide();
			break;
        case 39:
			nextSlide();
			break;
    }
};