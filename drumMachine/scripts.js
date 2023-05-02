// Get all the drum pad elements
const drumPads = document.querySelectorAll(".drum-pad");

// Add a click event listener to each drum pad
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    // Get the audio element within the drum pad
    const audio = pad.querySelector(".clip");
    // Play the audio clip
    audio.play();
  });
});

function playSound(key) {
  var audio = document.getElementById(key);
  audio.currentTime = 0; // Reiniciar la reproducción del audio si ya está sonando
  audio.play();
}

// Detectar cuando se presiona una tecla
document.addEventListener("keydown", function (event) {
  switch (event.key.toUpperCase()) {
    case "Q":
      playSound("Q");
      break;
    case "W":
      playSound("W");
      break;
    case "E":
      playSound("E");
      break;
    case "A":
      playSound("A");
      break;
    case "S":
      playSound("S");
      break;
    case "D":
      playSound("D");
      break;
    case "Z":
      playSound("Z");
      break;
    case "X":
      playSound("X");
      break;
    case "C":
      playSound("C");
      break;
    default:
      // No hacer nada si se presiona otra tecla
      break;
  }
});
