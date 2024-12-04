$('.toggle').click(function()
{
    $('.collapse-menu').toggleClass('show');
});

$('.portfolio-slider').owlCarousel({
	loop: true,
	// margin: 20,
    margin: 20,
	dots: false,
    nav:true,
	autoplay: true,
	autoPlaySpeed: 300,
    navText : ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		1000: {
			items: 3,
		}
	}
});

jQuery('.services-slider').owlCarousel({
    loop: true,
    margin: 30,
   
    nav: true,
    autoplay: true,
    autoPlaySpeed: 300,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

$('.testimonial-slider').owlCarousel({
	loop: true,
	margin: 20,
	dots: false,
    nav:false,
	autoplay: true,
	autoPlaySpeed: 300,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 1,
		},
		1000: {
			items: 1,
		}
	}
});