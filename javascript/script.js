$(function (){
  $('.background-video')
    .mouseover(function(e) {
      var video = $(this).get(0);
      video.play();
    })
    .mouseout(function(e) {
      var x = e.clientX;
      var y = e.clientY;
      var elementMouseIsOver = document.elementFromPoint(x, y);
      if (elementMouseIsOver.className === "section-link" ||
          elementMouseIsOver.className === "text-center") {
        return;
      };

      var video = $(this).get(0);
      video.pause();
    });
});