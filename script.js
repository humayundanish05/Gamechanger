
const prompts = [
  "What are you truly feeling right now?",
  "What’s something you keep postponing?",
  "Who do you miss, but haven’t told?",
  "What makes you feel alive?",
  "What are you avoiding emotionally?",
  "When was the last time you felt deeply understood?",
  "What memory brings you peace?"
];

const secrets = [
  "Sometimes I cry when no one is around.",
  "I still think about someone from years ago.",
  "I pretend to be strong but I feel lost.",
  "I'm afraid of being forgotten.",
  "I write messages I never send."
];

const affirmations = [
  "You are more than enough.",
  "This moment will pass.",
  "You are stronger than you think.",
  "It’s okay to feel lost sometimes.",
  "You are loved, even when you don’t feel it."
];

function setMood(emoji) {
  document.getElementById('mood-result').textContent = `Your current mood: ${emoji}`;
}

function newPrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').textContent = random;
}

function sendSecret() {
  const userSecret = document.getElementById('userSecret').value.trim();
  const random = secrets[Math.floor(Math.random() * secrets.length)];
  document.getElementById('randomSecret').textContent = userSecret ? `A secret from the void: “${random}”` : '';
}

function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById('affirmation').textContent = random;
}

function saveJournal() {
  const content = document.getElementById('journalBox').value;
  localStorage.setItem('innerverseJournal', content);
  document.getElementById('saveStatus').textContent = 'Journal saved locally.';
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
