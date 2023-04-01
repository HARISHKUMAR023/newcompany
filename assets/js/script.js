// $(window).scroll(function(){
// 	var scrollValue = $(window).scrollTop();
// 	if(scrollValue > 50) {
// 		$('.navbar.nav-wrapper').addClass('nav-scroll');
// 		$('.nav-wrapper .navbar-nav li a').addClass('active');
// 	}
// 	else {
// 		$('.navbar.nav-wrapper').removeClass('nav-scroll');
// 		$('.nav-wrapper .navbar-nav li a').removeClass('active');
// 	}
// });


$(document).ready(function(){
  	$('.slider-list').slick({
      dots: false,
      arrows: false,
  	  infinite: false,
  	  speed: 900,
  	  fade: true,
  	  autoplay: true,
  	  cssEase: 'ease'	
  	});

   $('.arrow-left').click(function(e){
        e.preventDefault();
      $('.slider-list').slick('slickPrev');
    });

    $('.arrow-right').click(function(e){
        e.preventDefault();
      $('.slider-list').slick('slickNext');
    })

    // Enable or Disable the arrow for first and last slider
 	
    $(".slider-list").on("afterChange", function(){

    	var curr_slide = $(this).find("li.slick-current").index() + 1;
		var first_slide = 1;
		var total_slide =$(this).find("li").length;

    	if(curr_slide === total_slide) {
    		$(this).parents(".main-banner").find('.arrow-right').addClass('disable-arrow');
    	}
    	else if(curr_slide < total_slide) {
    		$(this).parents(".main-banner").find('.arrow-right').removeClass('disable-arrow');
    	}
    	if(curr_slide === 1) {
    		$(this).parents(".main-banner").find('.arrow-left').addClass('disable-arrow');
    	}
    	else {
    		$(this).parents(".main-banner").find('.arrow-left').removeClass('disable-arrow');
    	}

    });

    $('.pcb-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      fade: true,
      autoplay: true,
      cssEase: 'ease' 
    });

    

    if (window.matchMedia("(max-width: 767px)").matches) {
      $('.dropdown-list').hide();
      $('.dropdown-cta .main-cta').click(function(e){
        e.preventDefault();
        $('.dropdown-list').slideToggle().css('margin-left','25px');
      });

      $('.sub-dropdown-list').hide();
      $('.sub-list .sub-cta').click(function(e){
        e.preventDefault();
        $('.sub-dropdown-list').slideToggle().css('margin-left','25px');
        $('.sub-list .sub-cta i').toggleClass('rotate-caret');
      });
    } 

    $('.navbar-toggle').click(function(e){
        e.preventDefault();
        $(this).find('.icon-bar:first-child').toggleClass('top-caret');
        $(this).find('.icon-bar:nth-child(2)').toggleClass('middle-caret');
        $(this).find('.icon-bar:last-child').toggleClass('bottom-caret');
    });

    // $('.slider-list').on('swipe', function(event, slick, currentSlide){
    //     // $(this).find('.slick-active .display').removeClass('hidden');
    //     $(this).find('.slick-active').addClass('animated fadeInDown');
    // });


   
});