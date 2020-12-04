export const initSlider = () => {

    $('.cards-carousel').each(function () {

        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            // centerPadding: '33px',
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        adaptiveHeight: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        adaptiveHeight: false,
                        dots: false
                    }
                }
            ]
        });
    })


}
