const swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 640px
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
});
const swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#swiper-button-next1",
      prevEl: "#swiper-button-prev1",
    },
    breakpoints: {
      // when window width is <= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
});
// const swiper3 = new Swiper(".mySwiper3", {


//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: "#mySwiper3-button-prev",
//       prevEl: "#mySwiper3-button-next",
//     },
// });

const mobileMenu = document.getElementById('mobile-menu');
const burgerBtn = document.getElementsByClassName('burger-btn')[0];
const body = document.getElementsByTagName('body')[0];

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('d-none');
  body.classList.add('overflow-hidden');
});
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
  body.classList.remove('overflow-hidden');
})
