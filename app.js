$(document).ready(function() {
	$('header .owl-carousel').owlCarousel({
		loop: true,
		// nav: true,
		dots: true,
		dotsEach: true,
		center: true,
		rtl: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
			},
			1200: {
				items: 1
			}
		}
	});
	$('header .owl-carousel .owl-mynav .owl-prev').click(function() {
		$('header .owl-carousel').trigger('prev.owl.carousel');
	});
	$('header .owl-carousel .owl-mynav .owl-next').click(function() {
		$('header .owl-carousel').trigger('next.owl.carousel');
	});

	$('main .main_comment .owl-carousel').owlCarousel({
		loop: true,
		// nav: true,
		// dots: true,
		// dotsEach: true,
		
		center: true,
		rtl: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
			},
			1200: {
				items: 1
			}
		}
	});

	$('main .main_comment .owl-carousel .owl-mynav .owl-prev').click(function() {
		$('main .main_comment .owl-carousel').trigger('prev.owl.carousel');
	});
	$('main .main_comment .owl-carousel .owl-mynav .owl-next').click(function() {
		$('main .main_comment .owl-carousel').trigger('next.owl.carousel');
	});
});