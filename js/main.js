$(document).ready(function() {

// Back2Top
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
// END_Back2Top

// Mobile_Menu
$(".header__mobile-menu").click(function(){
  $('.nbm-navbar').toggleClass('test');
  $('.dark-fn').toggleClass('show');
  $(".menu-close").toggleClass('show');
});

$(".menu-close").click(function(){
  $('.dark-fn').toggleClass('show');
  $('.nbm-navbar').removeClass('test');
  $(this).removeClass('show');
});

$(".dark-fn").click(function(){
  $('.nbm-navbar').removeClass('test');
  $(this).removeClass('show');
  $('.menu-close').removeClass('show');
});
// END_Mobile_Menu

// SVG-color
$('.header__mobile-menu').mouseover(function() {

  $('.header__mobile-menu img').each(function () {
      var $e = $(this);
      var imgURL = $e.prop('src');
      $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        $svg.find('.cls-1').css('fill', '#fff');
        $svg.find('.cls-2').css('fill', '#fff');
        $svg.find('.cls-3').css('fill', '#fff');
        $svg.find('.cls-4').css('fill', '#fff');
        $svg.find('.cls-5').css('fill', '#fff');
        $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });
});

$('.header__mobile-menu').mouseout(function() {

  $('.header__mobile-menu img').each(function () {
      var $e = $(this);
      var imgURL = $e.prop('src');
      $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        $svg.find('.cls-1').css('fill', '#1390fd');
        $svg.find('.cls-2').css('fill', '#1390fd');
        $svg.find('.cls-3').css('fill', '#1390fd');
        $svg.find('.cls-4').css('fill', '#1390fd');
        $svg.find('.cls-5').css('fill', '#1390fd');
        $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });
});

// -----------------------------------------
$('.fbc-social__items img').mouseover(function() {

  $(this).each(function () {
      var $e = $(this);
      var imgURL = $e.prop('src');
      $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        $svg.find('.cls-1').css('fill', '#1892fd');
        $svg.find('.cls-2').css('fill', '#1892fd');
        $svg.find('.cls-3').css('fill', '#1892fd');
        $svg.find('.cls-4').css('fill', '#1892fd');
        $svg.find('.cls-5').css('fill', '#1892fd');
        $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });
});

$('.fbc-social__items img').mouseout(function() {

  $(this).each(function () {
      var $e = $(this);
      var imgURL = $e.prop('src');
      $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        $svg.find('.cls-1').css('fill', '#fff');
        $svg.find('.cls-2').css('fill', '#fff');
        $svg.find('.cls-3').css('fill', '#fff');
        $svg.find('.cls-4').css('fill', '#fff');
        $svg.find('.cls-5').css('fill', '#fff');
        $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });
});
// END_SVG-color

// Top-Carousel
$('.top-carousel-items').owlCarousel({
  loop:true,
  items:1,
  margin:10,
  pagination:true,
  autoplay:false,
  dots:false,
  autoHeight:false,
  nav:true,
  navText: ["<img src='img/left.svg'>","<img src='img/right.svg'>"],
  navClass: ['owl-prev','owl-next']
})
// END_Top-Carousel

// Products-Carousel
$('.products-body__items').owlCarousel({
  loop:true,
  margin:10,
  pagination:true,
  autoplay:false,
  dots:true,
  autoHeight:false,
  nav:true,
  navText: ["<img src='img/product-left.svg'>","<img src='img/product-right.svg'>"],
  navClass: ['owl-prev','owl-next'],
  responsive:{
    0:{
        items:1
    },
    645:{
        items:2
    },
    945:{
        items:3
    },
    1230:{
        items:4
    }
}
})
// END_Products-Carousel

// News-Carousel
if (window.matchMedia("(max-width: 1230px)").matches) {
  $('.news-body__items').addClass('owl-carousel');

  $('.news-body__items').owlCarousel({
    loop:true,
    margin:10,
    pagination:true,
    autoplay:false,
    dots:true,
    autoHeight:false,
    nav:true,
    navText: ["<img src='img/product-left.svg'>","<img src='img/product-right.svg'>"],
    navClass: ['owl-prev','owl-next'],
    responsive:{
      0:{
          items:1
      },
      645:{
          items:2
      },
      945:{
          items:3
      }
  }
  })

} else {
  $('.news-body__items').removeClass('owl-carousel');

}
// END_News-Carousel

// Partners-Carousel
if (window.matchMedia("(max-width: 1230px)").matches) {
  $('.partners-body__items').addClass('owl-carousel');

  $('.partners-body__items').owlCarousel({
    loop:true,
    margin:10,
    pagination:true,
    autoplay:false,
    dots:true,
    autoHeight:false,
    nav:true,
    // navText: ["<img src='img/product-left.svg'>","<img src='img/product-right.svg'>"],
    navClass: ['owl-prev','owl-next'],
    responsive:{
      0:{
          items:1
      }
  }
  })

} else {
  $('.partners-body__items').removeClass('owl-carousel');

}
// END_Partners-Carousel

// MODAL1-TEXTAREA
$('.modal1__form .m1f__comment').on('change keyup keydown paste cut', 'textarea', function () {
        $(this).height(0).height(this.scrollHeight);
    }).find('textarea').change();
// END_MODAL1-TEXTAREA


// MEDIA
if (window.matchMedia("(max-width: 910px)").matches) {
  $(".header__buttons").clone().appendTo('.navbar-body');
  $(".header .header__buttons .hb-form").detach();
  $(".navbar-body .header__buttons .hb-branch").detach();

} else {

}
// END_MEDIA

// Back
$('.back').click(function(){
  $('body,html').animate({
      scrollTop: 0
  }, 1500);
  return false;
})
// END_Back

// Vnut-menu
$('ul').on('click', 'li span', function() {
    $(this).parent('li').find('> ul').toggleClass('active');;
    $(this).parent('li').toggleClass('active');
    $(this).parent('li').siblings().find('> ul').slideUp('.active', 1000);
    $(this).parent('li').siblings().removeClass('active');
  return false;
  });
$('ul').on('click', 'li a', function() {
    $(this).parent('li').toggleClass('active');
    $(this).parent('li').siblings().removeClass('active');
}); 
// END_Vnut-menu

});