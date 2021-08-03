$(function(){
  
       var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        var swiper = new Swiper(".mySwiper2", {
            cssMode: true,
            mousewheel: true,
            keyboard: true,
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        $(document).ready(function(){
            $('.typed').typed({
                strings:["HAEMI \<br\>PORTFOLIO"],
                typeSpeed: 70,
                backDelay:200,
                loop:false
            })
        });

});

