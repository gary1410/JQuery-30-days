(function($){
	var sliderUL = $('div.slider').children('ul')
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width,
		imgsLen = imgs.length,
		current = 1,
		totalImgsWidth = imgsLen * imgWidth;


	$('#slider-nav').show().find('button').on('click', function(){
		var direction = $(this).data('dir');
				loc = imgWidth;
		//update current value
		// ( direction === 'next' ) ? ++current: --current:

		if ( direction === 'next') {
			current += 1;
		} else {
			current -= 1;
		};

		if ( current === 0 ){
			current = imgsLen;
			loc = totalImgsWidth - imgWidth;
			direction = 'next';
		} else if ( current - 1 === imgsLen) {
			current = 1;
			loc = 0
		}

		transition(sliderUL, loc, direction);
	});

	function  transition ( container, loc, direction ) {
		var unit;

		if ( direction && loc !== 0) {
			unit = ( direction === 'next' ) ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit + loc ) : loc
		});
	}

})(jQuery);