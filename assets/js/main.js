var filters = {};

var update_filters = function(filter, value, units) {
  if(value == 0) {
    delete filters[filter];
  }
  else {
    filters[filter] = value + units;
  }
}

var update_output = function() {
  var filter_values = [];
  $.each(filters, function(k, v) {
    filter_values.push(k + '(' + v + ')');
  });
  var style = filter_values.join(' ');
  $('.output span').text(style);
  $('#e1 img').css('-webkit-filter', style);
}

var update = function(filter, value, units) {
  update_filters(filter, value, units);
  update_output();
}

$('input[name="blur"]').change(function() {
  update('blur', this.value, 'px');
});

$('input[name="brightness"]').change(function() {
  update('brightness', this.value, '%');
});

$('input[name="contrast"]').change(function() {
  update('contrast', this.value, '%');
});

$('input[name="grayscale"]').change(function() {
  update('grayscale', this.value, '%');
});  

$('input[name="hue-rotate"]').change(function() {
  update('hue-rotate', this.value, 'deg');
});

$('input[name="invert"]').change(function() {
  update('invert', this.value, '%');
});

$('input[name="opacity"]').change(function() {
  update('opacity', this.value, '%');
});

$('input[name="saturate"]').change(function() {
  update('saturate', this.value, '%');
});

$('input[name="sepia"]').change(function() {
  update('sepia', this.value, '%');
});

$('#reset').click(function() {
  filters = {}
  update_output();
  $('.output span').text('none');
  
  $('input[name="blur"]')[0].value = 0;
  $('input[name="brightness"]')[0].value = 100;
  $('input[name="contrast"]')[0].value = 100;
  $('input[name="grayscale"]')[0].value = 0;
  $('input[name="hue-rotate"]')[0].value = 0;
  $('input[name="invert"]')[0].value = 0;
  $('input[name="opacity"]')[0].value = 100;
  $('input[name="saturate"]')[0].value = 100;
  $('input[name="sepia"]')[0].value = 0;
});

$('#glowing-sun').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('glowing-sun').removeClass('grungy hemingway lomo pinhole sin-city vintage');
});

$('#grungy').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('grungy').removeClass('glowing-sun hemingway lomo pinhole sin-city vintage');
});

$('#hemingway').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('hemingway').removeClass('glowing-sun grungy lomo pinhole sin-city vintage');
});

$('#lomo').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('lomo').removeClass('glowing-sun grungy hemingway pinhole sin-city vintage');
});

$('#pinhole').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('pinhole').removeClass('glowing-sun grungy hemingway lomo sin-city vintage');
});

$('#sin-city').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('sin-city').removeClass('glowing-sun grungy hemingway lomo pinhole vintage');
});

$('#vintage').click(function() {
  $(this).toggleClass("down").siblings().removeClass('down');
  $('#e2 img').toggleClass('vintage').removeClass('glowing-sun grungy hemingway lomo pinhole sin-city');
});
