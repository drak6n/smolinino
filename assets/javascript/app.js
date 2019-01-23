var elements = document.querySelectorAll('.swiper-media__item');

 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

console.log(elements);
console.log([...elements]);

var elements = document.querySelectorAll('.swiper-news__item');

console.log(elements);
console.log([...elements]);

 var swiper = new Swiper('.swiper-news__list-wrapper', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

 var elements = document.querySelectorAll('.swiper-partner__item');

console.log(elements);
console.log([...elements]);

 var swiper = new Swiper('.swiper-partner__list-wrapper', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
       nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
 console.log(elements);
console.log([...elements]);