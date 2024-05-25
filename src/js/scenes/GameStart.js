import Phaser from 'phaser';

class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: 'GameStart' });
  }

  create() {
    this.add.text(400, 300, 'Start', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('GameStart'));
  }
}

export default GameStart;
