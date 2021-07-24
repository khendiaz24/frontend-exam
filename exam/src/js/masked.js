/* JavaScript File                                                  */
/* masked.js                                                   */
/* Modified July 24, 2021                                           */


var event_masked = (function(document, window) {

	var evt = [

		function(document, window) {

			// appear({
      //   elements: function elements(){

      //     return document.getElementsByClassName('md');
      //   },
      //   appear: function appear(slideUp){
          
      //     var md = document.querySelector('.md');
      //     console.log(md.scrollTop);

      //   },
        
      //   bounds: 200,
      //   reappear: true
      // });

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

event_masked.init();



