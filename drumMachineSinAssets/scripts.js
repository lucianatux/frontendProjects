// Get all the drum pad elements
const drumPads = document.querySelectorAll(".drum-pad");

// Add a click event listener to each drum pad
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    // Get the audio element within the drum pad
    const audio = pad.querySelector(".clip");
    // Get the clip name
    const clipName = audio.getAttribute("src").split("/").pop().split(".")[0];
    // Set the clip name as the inner text of the display element
    const display = document.getElementById("display");
    display.innerText = clipName;
    // Play the audio clip
    audio.currentTime = 0;
    audio.play();
  });
});


function playSound(key) {
  var audio = document.getElementById(key);
  var display = document.getElementById('display');
  var clipName = audio.getAttribute('data-name');
  if (audio) {
    audio.currentTime = 0; // Reiniciar la reproducción del audio si ya está sonando
    audio.play();
    display.innerText = clipName;
  }
}


// Detect when a key is pressed
document.addEventListener("keydown", function (event) {
  // Get the key that was pressed
  const key = event.key.toUpperCase();
  // If the key corresponds to a drum pad, play the associated clip
  switch (key) {
    case "Q":
    case "W":
    case "E":
    case "A":
    case "S":
    case "D":
    case "Z":
    case "X":
    case "C":
      playSound(key);
      break;
    default:
      // Do nothing if another key is pressed
      break;
  }
});

// Add an input event listener to the volume slider
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", () => {
  // Set the volume of each audio clip to the current value of the volume slider
  const audioClips = document.querySelectorAll("audio");
  audioClips.forEach((audio) => {
    audio.volume = volumeSlider.value;
  });
});

