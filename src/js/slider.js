export const initSlider = () => {

    $('.cards-carousel').each(function () {

        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        adaptiveHeight: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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
