// var layeranimation = gsap.timeline();
$(document).ready(function () {
  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }

  if ($(".category_slider").length) {
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
            slidesToShow: 3,
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
  if ($(".products_section_slider").length) {
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
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }
  if ($(".products_section_slider2").length) {
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
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".category_slider_listing").length) {
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
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".product_details_pictures").length) {
    $(".big_slider").slick({
      asNavFor: ".small_slider",
    });
    $(".small_slider").slick({
      asNavFor: ".big_slider",
      slidesToShow: 5,
      slidesToScroll: 1,
      focusOnSelect: true,
    });
  }

  if ($(".your_cart_modal").length) {
    $(".your_cart_modal").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }

  if($(".custonm_navbar").length){
    $(".custonm_navbar .login_sign .backet_icon").on('click', function(e){
      e.preventDefault();
      $(".your_cart_modal").addClass("active_your_cart_modal")
      $(".active_overlay").addClass("active_active_overlay")
    })
  }

  if($(".your_cart_modal").length){
    $(".your_cart_modal .head button").on('click', function(e){
      e.preventDefault();
      $(".your_cart_modal").removeClass("active_your_cart_modal")
      $(".active_overlay").removeClass("active_active_overlay")
    })
  }

  if($(".increase_decrease").length){
    var quntityNumber = 0;
    console.log(quntityNumber);
    $(".increase_decrease .button_minus").on('click', function(e){
      e.preventDefault();
      quntityNumber = $(this).parent().find("input").attr('value');
      if(quntityNumber <= 0){
        quntityNumber = 0;
      }else{
        quntityNumber--;
      }
      $(this).parent().find("input").attr('value', quntityNumber)
    })
    $(".increase_decrease .button_blus").on('click', function(e){
      e.preventDefault();
      quntityNumber = $(this).parent().find("input").attr('value');
      quntityNumber++;
      $(this).parent().find("input").attr('value', quntityNumber)
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
