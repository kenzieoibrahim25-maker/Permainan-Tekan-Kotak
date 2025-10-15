const startBtn = document.getElementById("start-btn");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
let score = 0;
let time = 30;
let gameInterval;
let countdown;
startBtn.addEventListener("click", startGame);
function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  startBtn.disabled = true;
  gameArea.innerHTML = "";

  gameInterval = setInterval(showBox, 1000);
  countdown = setInterval(updateTime, 1000);
}
function showBox() {
  gameArea.innerHTML = ""; // Hapus kotak sebelumnya
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.top = Math.random() * 350 + "px";
  box.style.left = Math.random() * 350 + "px";

  // Event ketika diklik
  box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    box.classList.add("destroy"); // Tambahkan animasi hancur
    setTimeout(() => {
      box.remove(); // Hapus setelah animasi selesai
    }, 400);
  });

  gameArea.appendChild(box);
}
function updateTime() {
  time--;
  timeDisplay.textContent = time;
  if (time <= 0) {
    endGame();
  }
}
function endGame() {
    clearInterval(gameInterval);
    clearInterval(countdown);
    gameArea.innerHTML = "";
    alert(`Game selesai! Skor kamu: ${score}`);
    startBtn.disabled = false;
}
