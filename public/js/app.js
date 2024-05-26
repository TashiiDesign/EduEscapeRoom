import Phaser from 'phaser' ;
import { SCENE_MAP } from './constants/SceneConstants';
import { bootGame, assetsLoaded } from './boot.js'

// Main game configuration
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: SCENE_MAP.map(scene => scene.state),
};

// Initialize the Phaser game instance
const game = new Phaser.Game(config);

// Boot the game with initial assets and configuration
bootGame(game, assetsLoaded);

export default game;
