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

document.addEventListener('keydown', event => {
    // Get the pressed key
    const key = event.key.toUpperCase();
    console.log(key);
    console.log(drumPad);
    // Find the drum pad with the matching id
    const drumPad = document.getElementById(key);
    // If a matching drum pad is found, trigger its audio clip
    if (drumPad) {
      const audio = drumPad.querySelector('.clip');
      audio.currentTime = 0;
      audio.play();
    }
  });
  
  