// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let smilingFace = document.querySelector("img[alt='Smiling face']");
  let voiceChoices = document.getElementById("voice-select");
  let message = document.getElementById("text-to-speak");
  let talkButton = document.querySelector("button");
  const voiceRef = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    voices = voiceRef.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', (e) => {
    debugger
    const utterThis = new SpeechSynthesisUtterance(message.value);
    const selectedOption = voiceChoices.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    voiceRef.speak(utterThis);
    
    utterThis.addEventListener('start', (e) => {
      smilingFace.src = "assets/images/smiling-open.png";
    });

    utterThis.addEventListener('end', (e) => {
      smilingFace.src = "assets/images/smiling.png";
    });
  });
}