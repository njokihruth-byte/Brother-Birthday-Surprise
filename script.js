const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");
const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");

surpriseButton.addEventListener("click", () => {
  surpriseMessage.hidden = false;
  surpriseButton.textContent = "Surprise opened! 💛";
});

musicButton.addEventListener("click", async () => {
  if (birthdayMusic.paused) {
    try {
      await birthdayMusic.play();
      musicButton.textContent = "❚❚ Pause birthday music";
    } catch (error) {
      alert("Please add birthday-music.mp3 to the project folder first.");
    }
  } else {
    birthdayMusic.pause();
    musicButton.textContent = "▶ Play birthday music";
  }
});
