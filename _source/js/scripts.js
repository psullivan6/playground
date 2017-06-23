(function(window){
  console.log('Playground scripts');

  var $gridItem = $('.grid li');

  $gridItem.on('mouseover mousemove', function(event){
    var x = (event.pageX - $(this).offset().left) - ($(this).outerWidth() / 2);
    var y = (event.pageY - $(this).offset().top) - ($(this).outerHeight() / 2);

    var xDegrees = x / 30;
    var yDegrees = y / 30;

    $(this).css('transform', 'rotateY(' + xDegrees + 'deg) rotateX(' + -yDegrees + 'deg)')
  });

  $gridItem.on('mouseout', function(event){
    $(this).css('transform', '');
  });

})(window)