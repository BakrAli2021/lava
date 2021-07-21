$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        dots: false,
        items: 2,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }

    });
});