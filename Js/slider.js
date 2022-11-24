$(document).ready(function () {
  //Banner slider
  $(".banner-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow:
      '<img class="banner-btnNext" src="../../Assets/icon/btn-slide.png" >',
    prevArrow:
      '<img class="banner-btnPrev" src="../../Assets/icon/btn-slide.png" >',
  });

  // Food and Restaurant sLider
  $(".foodSlide-wrapper").slick({
    nextArrow:
      '<img class="foodSlide-btnNext" src="../../Assets/icon/btn-slide2.png" >',
    prevArrow:
      '<img class="foodSlide-btnPrev" src="../../Assets/icon/btn-slide2.png" >',
  });

  // what other say slider
  $(".other-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:
      '<img class="otherSlide-btnNext" src="../../Assets/icon/btn-slide2.png" >',
    prevArrow:
      '<img class="otherSlide-btnPrev" src="../../Assets/icon/btn-slide2.png" >',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // accommodation sider
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='../../Assets/img/icon/btn-slide.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='../../Assets/img/icon/btn-slide.png'>",
  });
});
