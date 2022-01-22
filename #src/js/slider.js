class MenuHandler {
    constructor() {
        this.menuTrigger = $('#menu-trigger');
        this.toggleMenu();
    }

    toggleMenu() {
        this.menuTrigger.on('click', () => {
            this.menuTrigger.toggleClass('is-open');
            this.menu.toggleClass('is-open');
        });

    }

}

$(document).ready(function ($) {
    var menuHandler = new MenuHandler('.menu');

    $('.news__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        swipe: true,
        responsive: [
            {

                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
            {

                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    autoplay: true,
                    variableWidth: false,
                }
            }
        ]
    });

    $('.suppliers__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {

                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
            {

                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {

                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {

                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    centerMode: false,
                    slidesToShow: 5,
                    autoplay: true,
                    variableWidth: false,
                }
            }
        ]
    });
});
