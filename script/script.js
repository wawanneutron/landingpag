// animasi ketika web di buka

$(window).on('load', function () {

    $('.display-4').addClass('muncul');

    setTimeout(function () {
        $('.tombol').addClass('muncul');
    }, 500);

});


$(window).scroll(function () {
    var windowScroll = $(this).scrollTop();

    // paralax efect
    $('.jumbotron h1').css({

        'transform': 'translate(0px,' + windowScroll / 6 + '% )'
    });

    $('.jumbotron a').css({

        'transform': 'translate(0px,' + windowScroll / 4 + '% )'
    });


    // animasi scroll
    if (windowScroll > $('.workingspace').offset().top - 500) {
        setTimeout(function () {

            $('.workingspace .img-working').addClass('muncul')
            $('.workingspace .content-working').addClass('muncul')
            $('.workingspace .content-small').addClass('muncul')
            $('.workingspace .tombol-working').addClass('muncul')

        }, 100)
    }


    if (windowScroll > $('.testimonial').offset().top - 600) {
        setTimeout(function () {

            $('.testimonial .testi').addClass('muncul')
            $('.testimonial .testi-photo').addClass('muncul')

        }, 100)
    }


    if (windowScroll > $('.social-icon').offset().top - 700) {

        $('.social-icon .social').each(function (i) {
            setTimeout(function () {
                $('.social-icon .social').eq(i).addClass('muncul');

            }, 300 * (i + 1));
        });

    }


});