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

  if ($(".custonm_navbar").length) {
    $(".custonm_navbar .login_sign .backet_icon").on("click", function (e) {
      e.preventDefault();
      $(".your_cart_modal").addClass("active_your_cart_modal");
      $(".active_overlay").addClass("active_active_overlay");
    });
  }

  if ($(".your_cart_modal").length) {
    $(".your_cart_modal .head button").on("click", function (e) {
      e.preventDefault();
      $(".your_cart_modal").removeClass("active_your_cart_modal");
      $(".active_overlay").removeClass("active_active_overlay");
    });
  }

  if ($(".increase_decrease").length) {
    var quntityNumber = 0;
    console.log(quntityNumber);
    $(".increase_decrease .button_minus").on("click", function (e) {
      e.preventDefault();
      quntityNumber = $(this).parent().find("input").attr("value");
      if (quntityNumber <= 0) {
        quntityNumber = 0;
      } else {
        quntityNumber--;
      }
      $(this).parent().find("input").attr("value", quntityNumber);
    });
    $(".increase_decrease .button_blus").on("click", function (e) {
      e.preventDefault();
      quntityNumber = $(this).parent().find("input").attr("value");
      quntityNumber++;
      $(this).parent().find("input").attr("value", quntityNumber);
    });
  }

  // if($(".accordion_price").length){
  //   $(".accordion_price input").on('change', function(e){
  //     console.log(e.target.value)
  //   })
  // }

  if ($(".product_list_and_filter").length) {
    $(".right_side .filter_icon").on("click", function (e) {
      $(".left_side").addClass("active_left_side");
      $(".active_overlay").addClass("active_active_overlay");
    });
    $(".left_side .close").on("click", function (e) {
      $(".left_side").removeClass("active_left_side");
      $(".active_overlay").removeClass("active_active_overlay");
    });
  }

  // (function() {

  //   let cart = $('#cart'),
  //   soda = $('#soda'),
  //   meat = $('#meat'),
  //   image = $('#image'),
  //   mustard = $('#mustard'),
  //   path = [{x:-250, y:0}, {x:-100, y:-90}, {x:0, y:0}],
  //   path2 = [{x:250, y:0}, {x:150, y:-80}, {x:60, y:0}],
  //   path3 = [{x:-170, y:0}, {x:-80, y:-70}, {x:70, y:0}];

  //   var setupSequence = function() {
  //     let tl = new TimelineMax({repeat: -1, timeScale: 1.8});

  //     tl.set(mustard, {x:-250})
  //     .set(meat, {x:250})
  //     .set(soda, {x:-170})
  //     .to(cart, 2.1, {
  //       x:750,
  //       ease: SlowMo.ease.config(0.5, 0.5, false),
  //     })
  //     .to(mustard, 1, {
  //       bezier: {curviness: 0.3, values:path},
  //       opacity: 1,
  //       scale:1,
  //       ease: Back.easeOut.config(1.4)
  //     }, 0.5)
  //     .to(mustard, .2, {
  //       scale: 0,
  //     }, 0.8)
  //     .to(meat, 1, {
  //       bezier: {curviness: 0.3, values:path2},
  //       opacity: 1,
  //       scale:1,
  //       ease: Back.easeOut.config(1.4)
  //     }, 0.8)
  //     .to(meat, .2, {
  //       scale: 0
  //     }, 1.2)
  //     .to(soda, .7, {
  //       bezier: {curviness: 0.3, values:path3},
  //       opacity: 1,
  //       scale:1,
  //       ease: Back.easeOut.config(1.4)
  //     }, 1.2)
  //     .to(soda, .1, {
  //       scale: 0,
  //     },1.5);
  //   }

  //   setupSequence();

  // })();

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // layeranimation.play();
  setTimeout(() => {
    // animateFromLeft();
    $(".splach_loading").addClass("splashscreen_none");
  }, 2000);
  var currentDir = $("a").css("direction");
  console.log(currentDir);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "right-front" : "left-front",
    },
    theme: "light",
  });
});
