const canvas = document.getElementById('game-canvas');
const titleEl = document.getElementById('game-title');
const buttons = document.querySelectorAll('.game-btn');

let currentGame = null;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.game;
    if (!mode) return;

    stopCurrentGame();

    if (mode === 'voxel') {
      currentGame = startVoxelMode(canvas);
      titleEl.textContent = 'Voxel.js Demo';
    }
  });
});

function stopCurrentGame() {
  if (currentGame && typeof currentGame.stop === 'function') {
    currentGame.stop();
  }
  currentGame = null;

  const ctx = canvas.getContext('2d');
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}
