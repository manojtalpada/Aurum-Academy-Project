// Header Scroll Fixed animation

jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() > 50) {
    jQuery("#header").addClass('affix');
  } else {
    jQuery("#header").removeClass('affix');
  }
});


// MAIN SLIDER JQUERY

jQuery('#testimonial-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		items:3,
	    autoplay:true,
    	autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    mouseDrag: true,
	    animateIn: 'fadeIn',
	    animateOut: 'fadeOut',
		
		responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
		
	})





jQuery(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        jQuery(".collapse.show").each(function(){
        	jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        jQuery(".collapse").on('show.bs.collapse', function(){
        	jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });