var audioFile = new Audio("audio\\loop.mp3");

function playMusic() {
    audioFile.play();
}
function stopMusic() {
    audioFile.pause();
    audioFile.currentTime = 0;
}
      
let beats = [];
beats.push(new Audio("audio/01_kick_drum.wav"));
beats.push(new Audio("audio/02_closed_hihat.wav"));
beats.push(new Audio("audio/03_open_hihat.wav"));
beats.push(new Audio("audio/04_clap.wav"));
beats.push(new Audio("audio/05_snap.wav"));
beats.push(new Audio("audio/06_crash.wav"));
beats.push(new Audio("audio/07_tom1.wav"));
beats.push(new Audio("audio/08_tom2.wav"));
beats.push(new Audio("audio/09_tambourine.wav"));
      
$(document).on('keydown', addCell);
function addCell(event){
  if((Number(event.key) >= 1) && (Number(event.key) <= 9)){
    $('#cell'+event.key).addClass('playing');
    beats[event.key-1].play();
    beats[event.key-1].currentTime=0;
  }
}
$(document).on('keyup', subtractCell);
function subtractCell(event){
  $('.cell').removeClass('playing');
}