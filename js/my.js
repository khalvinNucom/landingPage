
$( document ).ready(function() {
    //typed-----------------------------------------------------------
    console.log( "ready!" );
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 1000,
        startDelay: 2000,
        fadeOut:true,
        loop: true,
      });
    //typed-----------------------------------------------------------
    move('.skills__right1', 81);
    move('.skills__right2', 80);
    move('.skills__right3', 75);
    move('.skills__right4', 75);
    move('.skills__right5', 80);

    //progressBar animation ---------------------------------------------------
    function move(className, perc) {
        var elem = document.querySelector(className+" .bar");   
        console.log(className);
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= perc) {
            clearInterval(id);
            
          } else {
            width++; 
            elem.style.width = width + '%'; 
            //elem.innerHTML = width * 1  + '%';
            $(className+' .barContainer').attr('data-content', width* 1  + '%');
          }
        }
      }



      var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(2.2) skew(-3deg)';

  $('.skills__icons').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

});

