$(function () {
     $(window).scroll(function (event) {
         var st = $(this).scrollTop();
         if (st > 250) {
             $(".tcb-header").addClass("small");
         } else {
             $(".tcb-header").removeClass("small");
         }
     });
    $('.tcb-menu-btn').on('click', function(){
        $('.tcb-menu-items').toggleClass('open');
    });
 });