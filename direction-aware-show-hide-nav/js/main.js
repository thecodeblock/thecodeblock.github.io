$(document).ready(function(){
    
    $('.menu-btn').on('click', function(){
        $('.main-menu').toggleClass('open');
    });
    
    var headerHeight = $('header').outerHeight();
    $('header').css('top', '-' + headerHeight +'px');
    
    var lastScrollTop = 0, delta = headerHeight/2;
    $(window).on('scroll', function(){
        var scrollTop = $(this).scrollTop();
        if( Math.abs(scrollTop - lastScrollTop) <= delta) return false;
        if(scrollTop > lastScrollTop){
            $('header').removeClass('open');
            $('.main-menu').removeClass('open');
        } else {
            $('header').addClass('open');
        }
        lastScrollTop = scrollTop;
    });
    
});