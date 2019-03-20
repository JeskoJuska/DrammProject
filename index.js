for(var i =0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  });
}






// problems with alert and font

// document.addEventListener("DOMContentLoaded", function(event){
//  alert("Hello, everything is good!");
// });

// window.onload = function(){
//   alert("Hello, everything is good!");
// };

// alert("Hello, everything is good!");

// document.addEventListener('DOMContentLoaded', function() {
//     alert("Ready!");
// }, false);

// function scripts(){
//   alert("Hello, everything is good!");
// }
