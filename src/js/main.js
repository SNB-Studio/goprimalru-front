

function letsdance(){
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
        if ( $('.header').hasClass('cart-header') ){
            $('.maincontent').css('margin-top', '0');
            } else {
                $('.maincontent').css('margin-top', $('.header').innerHeight() + 'px');
            };
    } else{
        $('.maincontent').css('margin-top', $('.header').innerHeight() + 'px');
    };
};

function index_arrow_align(){
    var container = $('#item-photo');
    var elemheight = $('#index-arrowicon');
    var sum = container.innerHeight() - elemheight.innerHeight();

    if (window.matchMedia('screen and (min-width: 768px)').matches) {
        $(elemheight).css('margin-top', (sum / 2) + 'px');
    }
    else {
        $(elemheight).css('margin-top', '0');
    };
};

function setHeight(){
    var height = ($('h1 span#getheight').height() / 2) + 70;
    if (window.matchMedia('screen and (min-width: 1024px)').matches) {
        $('.intro-about').css('top', '-' + height + 'px');
    }
    else{
        $('.intro-about').css('top', '');
    }
}

$(window).on('load', function() {
    fitty('.fit');
    setTimeout(setHeight, 100);
    letsdance();
    index_arrow_align();
});

$(window).on('resize', function() {
    fitty('.fit');
    letsdance();
    index_arrow_align();
    setHeight();
});

var SwiperIndex = new Swiper('.slider-index', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        260: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
    },
    loop: true
});

var OmegaRevs = new Swiper('.omega-reviews', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        260: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    loop: false
});


var gridslider = new Swiper('.grid-slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        260: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 40,
        },
    },
});

function sliderarrows(sp, sn, sl){
    $(sp).on('click', function(){
        sl.slidePrev();
    });
    $(sn).on('click', function(){
        sl.slideNext();
    });
};

$(document).ready(function() {
    $('#mobile-nav-button, #overlay-close').on('click', function(){
        $('.header-content').toggleClass('overlay-active');
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > ($('.header').innerHeight() / 2)) {
            $('.header-inner').addClass('everybodymove');
        }
        else {
            $('.header-inner').removeClass('everybodymove');
        };
    });

    $(window).bind('scroll', function() {
        if (window.matchMedia('screen and (min-width: 480px)').matches) {
            if ($(window).scrollTop() > $('.header').innerHeight()) {
                $('.cart-fixed').addClass('fixed');
            }
            else {
                $('.cart-fixed').removeClass('fixed');
            }
        };
    });

    if (window.matchMedia('screen and (max-width: 1024px)').matches) {
        $('.withsub').on('click', function(){
            $('.submenu').slideToggle(200);
        });
    }
    else {
        $('.withsub').hover(function(){
            $('.submenu').slideToggle(200);
        });
    };

    $('.cb-button, .simple-buy, .modal-close').on('click', function(){
        $('.callback').toggleClass('open');
    });
    $('#cb-send').on('click', function(){
        $('.modal-inprogress').hide('fast');
        $('.modal-sent').show('slow');
    });

    $('.spoiler').on('click', function(){
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('open');
    });

    $('.sorting-buttons').on( 'click', 'button', function() {
        var filter = $(this).attr('data-filter');
        
        $('.omega-reviews .swiper-slide').css('display', 'none');
        $('.omega-reviews .swiper-slide' + filter).css('display', '');
        $('.sorting-buttons button' ).removeClass( 'swiper-active');
        $(this).addClass('swiper-active');
        
        OmegaRevs.updateSize();
        OmegaRevs.updateSlides();
        OmegaRevs.updateProgress();
        OmegaRevs.updateSlidesClasses();
        OmegaRevs.slideTo(0);
        
        return false;
    });


    if (window.matchMedia('screen and (min-width: 940px)').matches) {
        $('.component-selector').mouseenter(function() {
            $('#components-head').fadeOut('slow');
            $('.components-info').children().hide();
            $('.components-info').fadeIn('slow');
            $('.' + $(this).attr('data-selector')).fadeToggle('slow');
        });
    } else{
        $('.component-selector').on('click', function() {
            $('#components-head').fadeOut('fast');
            if ($('.components-info').hasClass('is-active')) {
                $('.components-info').children().hide();
                $('.' + $(this).attr('data-selector')).fadeToggle('slow');
            } else{
                $('.components-info').fadeToggle('slow');
                $('.components-info').children().hide();
                $('.' + $(this).attr('data-selector')).fadeToggle('slow');
                $('.components-info').toggleClass('is-active');
            };
        });
    };
});