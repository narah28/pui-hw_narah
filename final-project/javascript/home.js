function movePage() {
    window.location.href = "./tunnelvision.html";
  }


//   $(document).ready(function() {
//     $(this).mousemove(function(e) {
//       $("#textPart").css({
//         "top": e.pageY - 250,
//         "left": e.pageX - 250
//       })
//     }).mousedown(function(e) {
//       switch (e.which) {
//           case 1:
//               $("#textPart").toggleClass("light-off");
//               break;
//           case 2:
//               console.log('Middle Mouse button pressed.');
//               break;
//           case 3:
//               console.log('Right Mouse button pressed.');
//               break;
//           default:
//               console.log('You have a strange Mouse!');
//       }
//     })
//   })


  //this is a sample flashlight effect

// $(document).ready(function() {
//     $(this).mousemove(function(e) {
//       $("#instText").css({
//         "top": e.pageY - 250,
//         "left": e.pageX - 250
//       })
//     }).mousedown(function(e) {
//       switch (e.which) {
//           case 1:
//               $("#instText").toggleClass("light-off");
//               break;
//           case 2:
//               console.log('Middle Mouse button pressed.');
//               break;
//           case 3:
//               console.log('Right Mouse button pressed.');
//               break;
//           default:
//               console.log('You have a strange Mouse!');
//       }
//     })
//   })

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
          case 2:
              console.log('Middle Mouse button pressed.');
              break;
          case 3:
              console.log('Right Mouse button pressed.');
              break;
          default:
              console.log('You have a strange Mouse!');
      }
    })
  })