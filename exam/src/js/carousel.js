/* JavaScript File                                                  */
/* event-carousel.js                                                   */
/* Modified July 24, 2021                                           */


var event_carousel = (function(document, window) {

	var evt = [

		function(document, window) {

			var elem = document.querySelector('.carousel');
			var flkty = new Flickity( elem, {
				cellAlign: 'left',
				contain: true,
				prevNextButtons: false,
				pageDots: false
			});

		}

	],
	initAll = function() {

		initEvt(document, window);
	},
	initEvt = function(document, window) {

		evt.forEach(function(e) {
			
			e(document, window);
		});
	};
	
	return { init: initAll };

})(document, window);

event_carousel.init();
