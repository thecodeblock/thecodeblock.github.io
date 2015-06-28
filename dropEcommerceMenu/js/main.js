 $('document').ready(function () {
     var dropOpen = false;
     $('.drop-controls a').on('click',function(){
         var clickedOn = $(this).attr('href');
         if(dropOpen){
             if($(clickedOn).hasClass('open')){
                $(clickedOn).removeClass('open');
                $(this).parent('li').removeClass('active'); 
                 dropOpen = false;
             } else {
                 $('.drop-panel').removeClass('open');
                 $(clickedOn).addClass('open');
                 $('.drop-controls li').removeClass('active');
                 $(this).parent('li').addClass('active');
                 dropOpen = true;
             }
         } else {
             $(clickedOn).addClass('open');
             $(this).parent('li').addClass('active');
             dropOpen = true;
         }
         return false;
     });
 });