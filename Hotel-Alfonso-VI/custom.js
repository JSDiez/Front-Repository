/*
 * Smooth scrolling for nav sections.
 */
Mirai.query('#engine a').click(function(evt){
  evt.preventDefault();
  var link = Mirai.query(this).attr('href');
  var pos = Mirai.query(link).offset().top;
  Mirai.query('html,body').animate({scrollTop:pos-50},700);
});

Mirai.query('#hotel-menu').affix({
		offset: {
		top: Mirai.query("#header").height() + Mirai.query("#engine").height()
		}
});