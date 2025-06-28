
let timer;
let timeLeft = 300;
let isPaused = false;

const timerDisplay = document.getElementById('timerDisplay');
const durationSelect = document.getElementById('duration');
const audio = document.getElementById('meditationSound');
const volumeSlider = document.getElementById('volumeControl');

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timer);
  timeLeft = parseInt(durationSelect.value);
  isPaused = false;
  updateDisplay();
  audio.play();

  timer = setInterval(() => {
    if (!isPaused) {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        audio.pause();
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = !isPaused;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = parseInt(durationSelect.value);
  updateDisplay();
  audio.pause();
  audio.currentTime = 0;
}
