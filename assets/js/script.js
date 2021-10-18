


$(document).ready(function () {
    $(".nav-item").hover(function(){
       $(this).addClass("show");
       $(this).find(".dropdown-menu").addClass("show");
    },function(){
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    })

});

$('.home-slider').owlCarousel({
    loop: true,
    margin: 0,
    innerWidth: 100,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


$('.product-slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

