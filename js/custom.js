$(function(){

    //banner text slide
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
        arrows: false,
        speed: 1500,
    });
    //work slide
    $('.work-img1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        speed:500,
        fade: true,
        arrows:true,
        prevArrow:'<i class="flaticon-left-chevron left"></i>',
        nextArrow:'<i class="flaticon-right-chevron right"></i>',
    });
    //lightbox venobox
    $('.venobox').venobox(); 

    //bg scrolling
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        // if(scrolling > 400){
        //     $('.back-to-top').fadeIn(500);
        // }
        // else{
        //     $('.back-to-top').fadeOut(500);
        // }
        if (scrolling > 50){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    });

    //paralax
    $('.parallax-window').parallax({imageSrc: '/path/to/banner.jpg'});

    //animation scroll js
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1500,);
                return false;
            }
        }
    });
});