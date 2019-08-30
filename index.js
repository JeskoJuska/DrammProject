for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    
    playSound('Key' + buttonInnerHTML.toUpperCase());

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {

  playSound(event.code);

  buttonAnimation(event.key);

});

function playSound(currentKey) {
  var audio;

  switch (currentKey) {
    case "KeyW":
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "KeyA":
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "KeyS":
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "KeyD":
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "KeyJ":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "KeyK":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "KeyL":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    default:
      console.log(currentKey);

  }

}


function buttonAnimation(currentKey) {
  var activButton = document.querySelector('.' + currentKey);

  activButton.classList.add("pressed");

  setTimeout(function() {
    activButton.classList.remove("pressed");
  }, 100);

}
