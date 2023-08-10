const playButton = document.querySelector("#play-button");
const scoreDisplay = document.querySelector("#score-display");
const highScoreDisplay = document.querySelector("#high-score-display");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

function updateScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    highScoreDisplay.textContent = `High Score: ${highScore}`;
  }
}

playButton.addEventListener("click", () => {
  updateScore();
});

// Hiển thị điểm số và điểm cao nhất khi tải trang
scoreDisplay.textContent = `Score: ${score}`;
highScoreDisplay.textContent = `High Score: ${highScore}`;
