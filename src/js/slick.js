// import $ from 'jquery';
$('.reviews__slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  //   focusOnSelect: true,
  centerMode: true,
  //   centerPadding: '0px',
  variableWidth: true,
  dots: false,
  mobileFirst: true,
  //   adaptiveHeight: true,
  asNavFor: '.reviews__description',

  responsive: [
    {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //   },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
$('.reviews__description').slick({
  asNavFor: '.reviews__slider',
  dots: true,
  arrows: false,
  infinite: true,
});
// $('.reviews__slider').on('beforeChange', (e, slick, currSlide, nextSlide) => {
//   if (currSlide === nextSlide) {
//     return;
//   }
//   $('[data-reviews]').addClass('big');
//   $(`[data-slide]`).each((_, slideEl) => {
//     const $slideEl = $(slideEl);
//     console.log($slideEl);
//     const currentSlide = $slideEl.attr('data-slide');
//     $slideEl.toggleClass('big', +currentSlide === nextSlide);
//     $('[data-reviews]').removeClass('big');
//   });
//   //   currSlide.addClass('big');
// });
