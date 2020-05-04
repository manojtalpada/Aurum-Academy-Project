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
	
	
	
jQuery(document).ready(function() {

  jQuery(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + ' .collapse.in').length;
    
    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  })

  openAllPanels = function(aId) {
    console.log("setAllPanelOpen");
    jQuery(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    console.log("setAllPanelclose");
    jQuery(aId + ' .panel-collapse.in').collapse('hide');
  }
     
});	



jQuery(document).ready(function() {
    jQuery(".file-tree").filetree();
});


jQuery("#card-flip").flip({
          trigger: 'manual'
        });
jQuery("#flip-btn").click(function(){
     	 jQuery("#card-flip").flip(true);
});

jQuery("#unflip-btn").click(function(){
          jQuery("#card-flip").flip(false);
});

