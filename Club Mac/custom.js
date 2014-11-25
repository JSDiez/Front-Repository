var mainmenu = function() {
/* Push the body and the nav over by 285px over */
  jQuery('.ico-menu-movil').click(function() {
	jQuery('#menu_web').css('display', 'block');
	jQuery('#menu_web').animate({
	  right: "-0px"
	}, 200);

	jQuery('.ico-menu-movil').animate({
	  right: "-200px"
	}, 200);
    
    jQuery('.ico-close-movil').animate({
	  top: "43px"
	}, 200);
  });

  /* Then push them back */
  jQuery('.ico-close-movil').click(function() {
	jQuery('#menu_web').css('display', 'none');
	jQuery('#menu_web').animate({
	  right: "-320px"
	}, 200);
	
	jQuery('.ico-menu-movil').animate({
	  right: "0"
	}, 200);
    
    jQuery('.ico-close-movil').animate({
	  top: "-10px"
	}, 200);
  });
};




//Know how many photos have the galleries
function addNumOfPhotos () {
  jQuery('#main').find('.photo_gallery').each(function(){
	var NumPhotos = jQuery(this).find('.ngg-gallery-thumbnail-box').length;
	jQuery(this).find('.n-photos').text(NumPhotos);
    jQuery(this).find('.ngg-gallery-thumbnail-box:first-child').addClass('first-child');
    if(NumPhotos <= 1){
    	jQuery(this).find('.n_photos').css('display', 'none');
    }
  })
}





/* FULL SCREEN */
var wHeight = jQuery( window ).height();
var wWhidth = jQuery( window ).width();
jQuery("#recption").backstretch("/files/reception-image01.jpg");
jQuery("#tecnology").backstretch("/files/tecnology-image.jpg");
jQuery("#shopping").backstretch("/files/shop-image.jpg");
jQuery("#water").backstretch("/files/water-image-v2.jpg");
jQuery("#sport").backstretch("/files/sports-image.jpg");
jQuery("#entertainment").backstretch("/files/entertainment-image.jpg");
jQuery("#beauty").backstretch("/files/beauty-image.jpg");

// Show the content
jQuery('#view-experience').click(function(e) {
  	e.preventDefault();
  
	jQuery('#full-screen').fadeTo("slow" , 1);
	jQuery('#container').fadeOut('slow');
	jQuery('body, #full-screen section').css({
      overflow: 'hidden',
      width: '100%',
      height: wHeight
    });
	jQuery('#full-screen').css("z-index", '100');
});

// Back to web
jQuery('#back-to-web a').click(function() {  
	jQuery('#full-screen').fadeTo("slow" , 0);
	jQuery('#container').fadeIn('slow');
	jQuery('body').css({
      overflow: 'auto',
      height: 'auto'
    });
	jQuery('#full-screen').css("z-index", '-1');
});

// Navigation the content
jQuery('#nav-slide a').click(function() {
	var target = jQuery(this).attr('href');
	jQuery('#nav-slide a').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.item').fadeOut('slow');
  	jQuery(target).fadeIn("slow").addClass('active');
});

jQuery('.info-dots li').bind({
  mouseenter: function(){
	jQuery(this).addClass('active').css('z-index', '100000');
	jQuery('.backstretch img, #nav-slide').fadeTo("speed" , 0.5);
  },
  mouseleave: function(){
	jQuery('.backstretch img, #nav-slide').fadeTo("speed" , 1);
	jQuery(this).removeClass('active').css('z-index', 'auto');
  }
});




// Fix engine position in scroll
Mirai.query( document ).ready(function() {
  Mirai.query('.affix-top').affix({
      offset: {
          top: Mirai.query("#header").height() + Mirai.query("#header-content").height() + 100
      }
  })
  
  if(jQuery('.ngg-galleryoverview').length > 0) {
    addNumOfPhotos ();
  };

  mainmenu();
})