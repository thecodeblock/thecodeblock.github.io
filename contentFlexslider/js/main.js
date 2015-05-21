$('document').ready(function () {
// The carousel being synced must be initialized first
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        itemWidth: 150,
        asNavFor: '#slider',
        prevText:'<',
        nextText:'>',
        animationLoop:false,
        controlsContainer: "#slider-control",
      });
// Now the slider will be connected to carousel 
      $('#slider').flexslider({
        controlNav: false,
        sync: "#carousel",
        animationLoop :false,
        directionNav: false
      });
});