import Phaser from 'phaser';
const assetPack = require('../../assets/assetpack.json');

export function bootGame(game, callback) {
  game.scene.add('BootScene', BootScene);
  game.scene.start('BootScene');

  // BootScene to handle initial loading
  class BootScene extends Phaser.Scene {
    constructor() {
      super('BootScene');
    }

    preload() {
      this.load.pack('boot', assetPack, 'boot');
    }

    create() {
      this.scene.start('LoadScene');
    }
  }

  // LoadScene to handle main loading with progress
  class LoadScene extends Phaser.Scene {
    constructor() {
      super('LoadScene');
    }

    preload() {
      this.load.pack('preload_ui', assetPack, 'preload_ui');
      this.load.pack('background', assetPack, 'background');

      const progressBar = this.add.graphics();
      this.load.on('progress', (value) => {
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(0, this.sys.game.config.height / 2 - 10, this.sys.game.config.width * value, 20);
      });

      this.load.on('complete', () => {
        progressBar.destroy();
        callback();
      });
    }

    create() {
      this.scene.start('GameStart'); // Start the main menu or first scene
    }
  }

  game.scene.add('LoadScene', LoadScene);
}

// Callback to trigger when assets are loaded
export function assetsLoaded() {
  console.log('Assets loaded, game is ready to start.');
  // Additional logic after assets are loaded, if necessary
}
