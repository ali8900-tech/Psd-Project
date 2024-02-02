$(document).ready(function() {
    $(".logo-slider").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        slideSpeed: 3000,
        margin: 15,
        responsiveClass: true,
        nav: true,
        navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
             500: {
                items: 2,
            },
            600: {
                items: 3,
            },

            900: {
                items: 4,
            },

            1000: {
                items: 4,
            },

            1200: {
                items: 6,
            }
        }

    });
});