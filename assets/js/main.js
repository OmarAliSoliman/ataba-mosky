// var layeranimation = gsap.timeline();
$(document).ready(function () {

  if($(".custom_select").length){
    $(".custom_select").niceSelect();
  }


  if($(".category_slider").length){
    $(".category_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 200,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      nextArrow: $(".custom_category_arrow .next"),
      prevArrow: $(".custom_category_arrow .prev"),
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }


  // products_section_slider
  if($(".products_section_slider").length){
    $(".products_section_slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 200,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      nextArrow: $(".custom_category_arrow1 .next"),
      prevArrow: $(".custom_category_arrow1 .prev"),
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }
  if($(".products_section_slider2").length){
    $(".products_section_slider2").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 200,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      nextArrow: $(".custom_category_arrow2 .next"),
      prevArrow: $(".custom_category_arrow2 .prev"),
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if($(".category_slider_listing").length){
    $(".category_slider_listing").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 200,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      // nextArrow: $(".custom_category_arrow .next"),
      // prevArrow: $(".custom_category_arrow .prev"),
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 7,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if($(".product_details_pictures").length){
    $(".big_slider").slick({
      asNavFor: ".small_slider",
    })
    $(".small_slider").slick({
      asNavFor: '.big_slider',
      slidesToShow: 5,
      slidesToScroll: 1,
      focusOnSelect: true,
    })
  }
  
  // if($(".accordion_price").length){
  //   $(".accordion_price input").on('change', function(e){
  //     console.log(e.target.value)
  //   })
  // }

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // layeranimation.play();
  // setTimeout(() => {
  //   animateFromLeft();
  // }, 2000);
});
