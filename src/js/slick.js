// import $ from 'jquery';
$('.reviews__slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
$('.reviews__slider').on('beforeChange', (e, slick, currSlide, nextSlide) => {
  if (currSlide === nextSlide) {
    return;
  }
  $('[data-reviews]').addClass('big');
  $(`[data-slide]`).each((_, slideEl) => {
    const $slideEl = $(slideEl);
    console.log($slideEl);
    const currentSlide = $slideEl.attr('data-slide');
    $slideEl.toggleClass('big', +currentSlide === nextSlide);
    $('[data-reviews]').removeClass('big');
  });
  //   currSlide.addClass('big');
});
