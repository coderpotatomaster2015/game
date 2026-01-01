function startVoxelMode(canvas) {
    // Create a Voxel.js game instance
    const game = voxel({
      generate: voxel.generator['Valley'],
      chunkDistance: 2,
      materials: ['#fff'],
      texturePath: 'https://voxel.github.io/voxeljs-site/textures/',
      container: canvas.parentElement
    });
  
    // Attach controls
    const createPlayer = require('voxel-player')(game);
    const player = createPlayer('https://voxel.github.io/voxeljs-site/textures/player.png');
    player.possess();
    player.yaw.position.set(0, 10, 0);
  
    game.on('tick', function() {
      // Game loop runs automatically
    });
  
    return {
      stop() {
        game.destroy();
      }
    };
  }
  