for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
playSound('Key' + buttonInnerHTML.toUpperCase());

    // switch (buttonInnerHTML) {
    //   case "w":
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     break;
    //   case "a":
    //     var audio = new Audio('sounds/tom-2.mp3');
    //     break;
    //   case "s":
    //     var audio = new Audio('sounds/tom-3.mp3');
    //     break;
    //   case "d":
    //     var audio = new Audio('sounds/tom-4.mp3');
    //     break;
    //   case "j":
    //     var audio = new Audio('sounds/kick-bass.mp3');
    //     break;
    //   case "k":
    //     var audio = new Audio('sounds/snare.mp3');
    //     break;
    //   case "l":
    //     var audio = new Audio('sounds/crash.mp3');
    //     break;
    //   default:
    //     console.log(buttonInnerHTML);
    //
    // }

  buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {

playSound(event.code);

  // switch (event.code) {
  //   case "KeyW":
  //     var audio = new Audio('sounds/tom-1.mp3');
  //     break;
  //   case "KeyA":
  //     var audio = new Audio('sounds/tom-2.mp3');
  //     break;
  //   case "KeyS":
  //     var audio = new Audio('sounds/tom-3.mp3');
  //     break;
  //   case "KeyD":
  //     var audio = new Audio('sounds/tom-4.mp3');
  //     break;
  //   case "KeyJ":
  //     var audio = new Audio('sounds/kick-bass.mp3');
  //     break;
  //   case "KeyK":
  //     var audio = new Audio('sounds/snare.mp3');
  //     break;
  //   case "KeyL":
  //     var audio = new Audio('sounds/crash.mp3');
  //     break;
  //   default:
  //     console.log(buttonInnerHTML);
  //
  // }

  buttonAnimation(event.key);
});

function playSound(currentKey){
var audio;

  switch (currentKey) {
    case "KeyW":
       audio = new Audio('sounds/tom-1.mp3');
      break;
    case "KeyA":
       audio = new Audio('sounds/tom-2.mp3');
      break;
    case "KeyS":
       audio = new Audio('sounds/tom-3.mp3');
      break;
    case "KeyD":
       audio = new Audio('sounds/tom-4.mp3');
      break;
    case "KeyJ":
       audio = new Audio('sounds/kick-bass.mp3');
      break;
    case "KeyK":
       audio = new Audio('sounds/snare.mp3');
      break;
    case "KeyL":
       audio = new Audio('sounds/crash.mp3');
      break;
    default:
      console.log(buttonInnerHTML);

  }
    audio.play();
}


function buttonAnimation(currentKey) {
  var activButton = document.querySelector('.' + currentKey);

  activButton.classList.add("pressed");

  setTimeout(function(){
    activButton.classList.remove("pressed");
  }, 100);

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
