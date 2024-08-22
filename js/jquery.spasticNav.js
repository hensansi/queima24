var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($) {

	$.fn.spasticNav = function(options) {
	
		options = $.extend({
			overlap : 8,
			speed : 500,
			reset : 1500,
			color : '000000',
			easing : 'easeOutExpo'
		}, options);
	
		return this.each(function() {
		
		 	var nav = $(this),
		 		currentPageItem = $('#selected', nav),
		 		blob,
		 		reset;
		 		
		 	$('<li id="blob"></li>').css({
		 		width : currentPageItem.outerWidth(),
		 		height : currentPageItem.outerHeight() + options.overlap,
		 		left : currentPageItem.position().left,
		 		top : currentPageItem.position().top - options.overlap / 2,
		 		backgroundColor : options.color
		 	}).appendTo(this);
		 	
		 	blob = $('#blob', nav);
		 	
			$('li:not(#blob)', nav).hover(function() {
				// mouse over
				clearTimeout(reset);
				blob.animate(
					{
						left : $(this).position().left,
						width : $(this).width()
					},
					{
						duration : options.speed,
						easing : options.easing,
						queue : false
					}
				);
			}, function() {
				// mouse out	
				reset = setTimeout(function() {
					blob.animate({
						width : currentPageItem.outerWidth(),
						left : currentPageItem.position().left
					}, options.speed)
				}, options.reset);
	
			});
		
		}); // end each
	
	};

})(jQuery);

}
/*
     FILE ARCHIVED ON 17:31:15 May 15, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:16:35 Aug 22, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.466
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 8.06
  LoadShardBlock: 226.101 (3)
  PetaboxLoader3.datanode: 53.619 (4)
  PetaboxLoader3.resolve: 336.457 (3)
  load_resource: 166.723
*/