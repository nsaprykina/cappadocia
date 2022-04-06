$(function() {
    $(".fairy-tail__slider").slick({
        prevArrow: '<button type="button" class="fairy-tail__slick-btn fairy-tail__slick-prev"><img src="img/arrow-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="fairy-tail__slick-btn fairy-tail__slick-next"><img src="img/arrow-next.svg" alt="next"></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
    });
    $(".our-trip__slider").slick({
        prevArrow: '<button type="button" class="our-trip__slick-btn our-trip__slick-prev"><img src="img/arrow-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="our-trip__slick-btn our-trip__slick-next"><img src="img/arrow-next.svg" alt="next"></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
    });
})