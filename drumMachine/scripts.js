// Get all the drum pad elements
const drumPads = document.querySelectorAll('.drum-pad');

// Add a click event listener to each drum pad
drumPads.forEach(pad => {
  pad.addEventListener('click', () => {
    // Get the audio element within the drum pad
    const audio = pad.querySelector('.clip');
    // Play the audio clip
    audio.play();
  });
});