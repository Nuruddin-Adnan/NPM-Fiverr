{
   var swiper = new Swiper(".productSwiper", {
     freeMode: true,
     autoplay: true,
     slidesPerView: 6,
     loop: true,
     speed: 1500,
     breakpoints: {
       // when window width is >= 320px
       320: {
       slidesPerView: 3,
       spaceBetween: 50,
       },
       // when window width is >= 992px
       992: {
       slidesPerView: 4,
       spaceBetween: 50
       },
       // when window width is >= 1400px
       1400: {
       slidesPerView: 6,
       spaceBetween: 60
       }
     }
   });
 }