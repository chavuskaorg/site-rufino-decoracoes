  const testes_swiper = new Swiper('#parceiros .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    },
    speed: 4000,
    //freeMode: true,
    //freeModeMomentum: false,
    //grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      980: {
        slidesPerView: 2.2,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 60,
      }
    }
  });
