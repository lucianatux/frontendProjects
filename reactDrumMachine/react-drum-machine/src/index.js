import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
import React, { useState } from "react";

function DrumPad(props) {
  const [clipName, setClipName] = useState("Sound");

  function playSound() {
    const audio = document.getElementById(props.keyTrigger);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setClipName(props.clipId);
      props.displayClipName(props.clipId);
    }
  }

  return (
    <div className="drum-pad" id={props.clipId} onClick={playSound}>
      <audio
        className="clip"
        id={props.keyTrigger}
        src={props.clipSrc}
        type="audio/mpeg"
      />
      {props.keyTrigger}
    </div>
  );
}

function ControlsWrap(props) {
  return (
    <div id="controls-wrap">
      <div id="volume-wrap">
        <i className="fa fa-volume-up" />
        <input
          id="volumeSlider"
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={props.volume}
          onChange={props.adjustVolume}
        />
      </div>
      <p id="display">{props.display}</p>
    </div>
  );
}

function DrumMachine(props) {
  const [volume, setVolume] = useState(0.59);
  const [display, setDisplay] = useState("Sound");

  function adjustVolume(event) {
    const value = event.target.value;
    setVolume(value);
    const audioClips = document.querySelectorAll("audio");
    audioClips.forEach((audio) => {
      audio.volume = value;
    });
  }

  function displayClipName(name) {
    setDisplay(name);
  }

  const drumPadsData = [
    {
      clipId: "Heater-1",
      keyTrigger: "Q",
      clipSrc: "./assets/Heater-1.mp3",
    },
    {
      clipId: "Heater-2",
      keyTrigger: "W",
      clipSrc: "./assets/Heater-2.mp3",
    },
    {
      clipId: "Heater-3",
      keyTrigger: "E",
      clipSrc: "./assets/Heater-3.mp3",
    },
    {
      clipId: "Heater-4",
      keyTrigger: "A",
      clipSrc: "./assets/Heater-4.mp3",
    },
    {
      clipId: "Clap",
      keyTrigger: "S",
      clipSrc: "./assets/Clap.mp3",
    },
  ];

  const drumPads = drumPadsData.map((pad) => (
    <DrumPad
      key={pad.clipId}
      clipId={pad.clipId}
      keyTrigger={pad.keyTrigger}
      clipSrc={pad.clipSrc}
      displayClipName={displayClipName}
    />
  ));

  return (
    <div id="drum-machine" className="container">
      <div id="pad-wrap">{drumPads}</div>
      <ControlsWrap
        volume={volume}
        adjustVolume={adjustVolume}
        display={display}
      />
    </div>
  );
}

export default DrumMachine;
*/