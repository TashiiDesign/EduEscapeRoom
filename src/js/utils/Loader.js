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
      this.load.image('loading_btn', 'assets/ui/loading_bg.png');
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
      this.load.image('start_scene_bg', 'assets/scenes/start_scene/bg/start_scene_bg');
    //   this.load.audio('background_music', 'assets/scenes/bedroom/sounds/background_music.mp3');
    //   this.load.image('lab_bg', 'assets/scenes/laboratory/graphics/lab_bg.png');
    //   this.load.audio('lab_music', 'assets/scenes/laboratory/sounds/lab_music.mp3');
    //   this.load.atlas('characters', 'assets/spritesheets/characters.png', 'assets/spritesheets/characters.json');

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
