{
  var swiper = new Swiper(".ProductSwiper", {
    freeMode: true,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: true,
      },
      // when window width is >= 992px
      576: {
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
      },
      768: {
      slidesPerView: 4,
      spaceBetween: 50,
      centeredSlides: true,
      },
      992: {
      slidesPerView: 5,
      spaceBetween: 50
      },
      1200: {
      slidesPerView: 6,
      spaceBetween: 50
      },
      // when window width is >= 1400px
      1400: {
      slidesPerView: 8,
      spaceBetween: 50
      }
    }
  });
}
