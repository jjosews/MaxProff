$(function(){

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