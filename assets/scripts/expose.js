// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornChoice = document.getElementById("horn-select");
  let volControl = document.querySelector("[type='range']");
  let playButton = document.querySelector("button");
  let hornSound = document.querySelector("audio");
  const confetti = new JSConfetti();

  hornChoice.addEventListener('input', (e) => {
    let selectedImage = document.querySelector("img[alt='No image selected']");

    if(e.target.value == "air-horn"){
      selectedImage.src = "assets/images/air-horn.svg";
      hornSound = new Audio("assets/audio/air-horn.mp3");
    }
    else if (e.target.value == "car-horn"){
      selectedImage.src = "assets/images/car-horn.svg";
      hornSound = new Audio("assets/audio/car-horn.mp3");
    }
    else if (e.target.value == "party-horn"){
      selectedImage.src = "assets/images/party-horn.svg";  
      hornSound = new Audio("assets/audio/party-horn.mp3");
    }
  });

  volControl.addEventListener('change', (e) => {
    let controlIcon = document.querySelector("img[alt='Volume level 2']");

    if(e.target.value == 0){
      controlIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if (e.target.value < 33){
      controlIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if (e.target.value < 67){
      controlIcon.src = "assets/icons/volume-level-2.svg";
    }
    else{
      controlIcon.src = "assets/icons/volume-level-3.svg";
    }

    hornSound.volume = e.target.value/100; 
  });

  playButton.addEventListener('click', (e) => {
    hornSound.play(); 
    if(hornChoice.value == "party-horn"){
      confetti.addConfetti(); 
    }
  })

  document.addEventListerner('click', (e) => {
    
  });

}