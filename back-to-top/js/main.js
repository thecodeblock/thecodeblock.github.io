jQuery(document).ready(function($){
    // duration of animation while going back to top
    var back_duration = 600,
        // scroll position after which 'back to top' button will be visible
        back_offset = 800,
        // store 'back to top' element in variable for easy access
        back_button = $('.tcb-top');
    // animate back to top
    back_button.on('click', function(e){
        e.preventDefault();
        // running jQuery animate function of 
        $('body,html').animate({
			scrollTop: 0 ,
		 	}, back_duration
		);
    })
    // making button direction aware
    var lastScrollTop = 0, delta = 5;
    $(window).on('scroll', function(){
        var scrollTop = $(this).scrollTop();
        if( Math.abs(scrollTop - lastScrollTop) <= delta) return false;
        // show button after offset value
        ( scrollTop > back_offset ) ? back_button.addClass('tcb-top-visible') : back_button.removeClass('tcb-top-visible');
        // check if scrolling down
        if(scrollTop > lastScrollTop){
            back_button.removeClass('tcb-top-fadeIn');
        } else {
            // scrolling up? if yes make it fadeIn
            (back_button.hasClass('tcb-top-visible')) ? back_button.addClass('tcb-top-fadeIn') : back_button.removeClass('tcb-top-fadeIn');
        }
        lastScrollTop = scrollTop;
    });
});