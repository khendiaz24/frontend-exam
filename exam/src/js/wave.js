/* JavaScript File                                                  */
/* wave.js                                                   */
/* Modified July 24, 2021                                        */


var event_wave = (function(document, window) {

	var evt = [

		function(document, window) {

			var containers = document.querySelectorAll('.waves');

			containers.forEach(function(contain){

				var wave = contain.getAttribute('data-svg');

				lottie.loadAnimation({
					container: contain, 
					renderer: 'svg',
					loop: true,
					autoplay: true,
					path: '../dist/json/'+ wave +''
				});

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

event_wave.init();
