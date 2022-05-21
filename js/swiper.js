document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    simulateTouch:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:'true',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      hide:'true',
    },
  });
});
