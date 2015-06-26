 $('document').ready(function () {
     var open = false,
         screen = $('.full-screen');
     $('.btn-menu').on('click', function () {
         if (!open) {
             screen.css({
                 "display": "table"
             });
             screen.show(10, function () {
                 $(this).css({
                     "opacity": 1,
                     "visibility": "visible"
                 });
             });
             open = true;
         } else {
             screen.css({
                 "opacity": 0,
                 "visibility": "hidden"
             });
             setTimeout(function() {
                screen.css('display', 'none');
            }, 300);
             open = false;
         }

         $(this).toggleClass('active');
     });
     $('.full-screen li').on('mouseover', function () {
         var bgColor = $(this).data('bg');
         screen.css('background', bgColor);
     });
 });