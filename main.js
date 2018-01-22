$(document).ready(function(){ 

$(window).on('resize', function() {
  'use strict';
  var element	= document.querySelector('#banner'),
      elHeight = 0,
      elTop = 0,
      dHeight	= 0,
      wHeight	= 0,
      wScrollCurrent = 0,
      wScrollBefore	= 0,
      wScrollDiff	= 0; 
      window.addEventListener('scroll', function () {
        // Hide the displayed menu. If you want to scroll, you're obviously not interested in the options.
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggle').addClass('collapsed').blur();
        if($(window).width() <= 768) {
          elHeight = element.offsetHeight;
          dHeight = document.body.offsetHeight;
          wHeight = window.innerHeight;
          wScrollCurrent = window.pageYOffset;
          wScrollDiff = wScrollBefore - wScrollCurrent;
          elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

          // scrolled to the very top; element sticks to the top
          if(wScrollCurrent <= 0) {
              element.style.top = '0px';
          } // scrolled up; element slides in
            else if(wScrollDiff > 0) {
              element.style.top = (elTop > 0? 0 : elTop) + 'px'; 
          } // scrolled down
            else if(wScrollDiff < 0) {
              // scrolled to the very bottom; element slides in
              if(wScrollCurrent + wHeight >= dHeight - elHeight) {  
                element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
              } // scrolled down; element slides out
                else { element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px'; }
            }
          wScrollBefore = wScrollCurrent;
        } //
          else element.style.top = '0px';
      });
}).resize();
	//Back to top button function 
	$(".button-back-to-top").click(function(){
		$("body,html").animate({
			scrollTop:"0px"
		}, 680);
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500 ) {
			$(".button-back-to-top").slideDown(680);
		} else {
			$(".button-back-to-top").slideUp(680);
		}
	});
	//Hide or show the footer while scrolling ocurrs
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200 ) {
			$(".container-footer").slideDown(680);
		} else {
			$(".container-footer").slideUp(680);
		}
	});

	// Highlight the top nav as scrolling occurs
	$("body").scrollspy({target: ".navbar-fixed-top"})

	//Hides the nav bar while scrolling
	$(".navbar-fixed-top").scrollDown()
});
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {$('body').on('click', 'a.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide',);});
