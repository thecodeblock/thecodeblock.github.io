 $('document').ready(function () {   
     $('.btn-menu').on('click',function(){
        $(this).toggleClass('active');
        $('header').toggleClass('close');
     })
 });