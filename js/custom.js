$(document).ready(function () {
    var swiper = new Swiper(".mian_slide", {
        direction: "vertical",
        mousewheel: true,
        speed: 800,
        slidesPerView: "1.4",
        centeredSlides: true,
        loop: false,
        spaceBetween: 60,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },


    });
    var header = $("#hedaer");
    var stand = $(".swiper-slide-active .img_box");
    var pop = $("#pop");
    var popbg = pop.children(".pop_bg");
    var poptop = stand.offset().top;
    var popleft = stand.offset().left;
    var popwidth = stand.width();
    var popheight = stand.height();
    var poptxt = pop.children(".pop_txt");

    var isdone = true;

    $(".swiper-slide").on("click", function (e) {
        e.preventDefault(); //이벤트의 기본 동작을 막아줌 (링크이동)
        if(isdone == false) return;
        isdone = false;
        if ($(this).hasClass("swiper-slide-active") == true) {
            header.addClass("on");
            var current = $(this).children(".img_box");
            var txt = $(this).children(".main_txt").html();
            pop.css('display', 'block');
            popbg.css({ top: poptop, left: popleft, width: popwidth, height: popheight, background: current.css("background") });
            setTimeout(() => {
                pop.addClass("on");
                poptxt.append(txt);
            }, 100);
            setTimeout(() => {
                isdone= true;
            }, 1000);
        }
    });

    $(".close").on("click", function (e) {
        if(isdone == false) return;
        isdone = false;
        e.preventDefault(); //이벤트의 기본 동작을 막아줌 (링크이동)

        header.removeClass("on");
        pop.removeClass("on");
        poptxt.empty();

        setTimeout(() => {
            pop.css('display', 'none');
            isdone = true;
        }, 1000);
    });

    /*
    var pop1 = $('.img_box.ms1');
    var elment = $("#header")
    var pop1topposition = pop1.offset().top;
    var pop1leftposition = pop1.offset().left;
    var pop1width =pop1.width();
    console.log(pop1width);
    */

});