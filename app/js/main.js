$(function(){

  $('.team__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.75 40.5L20.25 27L33.75 13.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 40.5L33.75 27L20.25 13.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    draggable: false,
    fade: true,
    dots: true
  });

  $('.portfolio__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.75 40.5L20.25 27L33.75 13.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 40.5L33.75 27L20.25 13.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    draggable: false,
    fade: true
  });

  $('.portfolio-item__thumb').slick({
    asNavFor: '.portfolio-item__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.portfolio-item__big').slick({
    asNavFor: '.portfolio-item__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.top__square-input').ionRangeSlider({
    type: "single",
    onStart: function (data){
      $('.top__square-num').text(data.from);
    },
    onChange: function (data) {
      $('.top__square-num').text(data.from);
    },
  });

});