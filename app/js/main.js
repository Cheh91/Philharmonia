$(function () {

    $('.top__slider').slick({
        // infinite: true,
        speed: 1000,
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>'
    });


    $('.our__instagram-item').slick({
        // infinite: true,
        speed: 1000,
        arrows: false,
        variableWidth: true,
        slidesToShow: 6,
        autoplay: true,
        // infinite: false,
        // dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>'
    });



    $('.footer__partners').slick({
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        autoplay: true
    });
    

    $(".top__menu").on("click", "a", function(event) {
        event.preventDefault();

        let id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $(".top__menu-link").on("click", function(e){
        e.preventDefault();

        $(this).hasClass('active');

        $(".top__menu-link").removeClass("active");
        $(this).addClass("active");
    });


    $(function() {
        $('.footer__btn-up').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1500);
        })
    })

});







