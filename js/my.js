
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
    move('.skills__right1', 89);
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
            elem.innerHTML = width * 1  + '%';
          }
        }
      }

});

