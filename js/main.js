$(function(){
    $('.karusel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});