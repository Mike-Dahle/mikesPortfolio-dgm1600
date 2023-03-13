console.log("hello")

fetch('bosses.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the JSON data
    console.log(data); // This will output the JSON data to the console
  });

var audio = document.getElementById("bg-music");
var playPauseBtn = document.getElementById("play-pause-btn");

playPauseBtn.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "volume_up";
  } else {
    audio.pause();
    playPauseBtn.textContent = "volume_off";
  }
});
