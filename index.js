// Detect button click
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
      const key = this.innerHTML;
      playSound(key);
      buttonAnimation(key);
    });
  });
  
  // Detect keyboard press
  document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
  });
  
  function playSound(key) {
    switch (key) {
      case "w":
        new Audio("tom-1.mp3").play();
        break;
      case "a":
        new Audio("tom-2.mp3").play();
        break;
      case "s":
        new Audio("tom-3.mp3").play();
        break;
      case "d":
        new Audio("tom-4.mp3").play();
        break;
      case "j":
        new Audio("snare.mp3").play();
        break;
      case "k":
        new Audio("crash.mp3").play();
        break;
      case "l":
        new Audio("kick-bass.mp3").play();
        break;
      default:
        console.log(key);
    }
  }
  
  function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(() => {
        activeButton.classList.remove("pressed");
      }, 100);
    }
  }
  
