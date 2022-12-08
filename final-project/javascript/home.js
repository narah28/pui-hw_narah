// for navigating pages
function movePage() {
    window.location.href = "./tunnelvision.html";
  }

function movePage2() {
    window.location.href = "./comingsoon.html";
}


// for the flashlight effect
$(document).ready(function() {
    $(this).mousemove(function(e) {
      $("#light").css({
        "top": e.pageY - 50,
        "left": e.pageX - 50
      })
    }).mousedown(function(e) {
      switch (e.which) {
          case 1:
              $("#light").toggleClass("light-off");
              break;
          default:
              console.log('You have a strange Mouse!');
      }
    })
  })

  // for the text animation effect
  $(function () {
    $('.woohoo').textillate();
  })
  $('.woohoo').textillate({ in: {effect:'rollIn'}});
