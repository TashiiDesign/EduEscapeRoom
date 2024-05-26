import Phaser from 'phaser';

export function bootGame(game, callback) {
  game.scene.add('BootScene', BootScene);
  game.scene.start('BootScene');

  class BootScene extends Phaser.Scene {
    constructor() {
      super('BootScene');
    }

    preload() {
      // Load assets needed for the loading screen
    
    }

    create() {
      this.scene.start('LoadScene');
    }
  }

  class LoadScene extends Phaser.Scene {
    constructor() {
      super('LoadScene');
    }

    preload() {
      // Load main assets directly
     
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
