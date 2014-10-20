/*
 * Smooth scrolling for nav sections.
 */
Mirai.query('#engine a').click(function(evt){
  evt.preventDefault();
  var link = Mirai.query(this).attr('href');
  var pos = Mirai.query(link).offset().top;
  Mirai.query('html,body').animate({scrollTop:pos-50},700);
});


Mirai.query('#engine_mashup').affix({
		offset: {
		top: Mirai.query("#header").height() + Mirai.query("#engine").height()
		}
});


function addNumOfPhotos () {
  jQuery('#main').find('.photo_title').each(function(){
	var NumPhotos = jQuery(this).find('.ngg-gallery-thumbnail-box').length;
	jQuery(this).find('.n_photos').text('/'+NumPhotos);
    jQuery(this).find('.ngg-gallery-thumbnail-box:first-child').addClass('first-child');
    if(NumPhotos <= 1){
    	jQuery(this).find('.n_photos').css('display', 'none');
    }
  })
}

jQuery(document).ready(function(){  
    if(jQuery('.ngg-galleryoverview').length > 0) {
      addNumOfPhotos ();
    };  
});