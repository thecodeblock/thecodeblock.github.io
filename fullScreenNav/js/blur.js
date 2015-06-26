 $('document').ready(function () {   
     $('.btn-menu').on('click',function(){
        $('html').toggleClass('hideScrollbar');
        $('header').toggleClass('close');
        $(this).toggleClass('active');
        $('.main').toggleClass('blurred');
     })
 });