import Phaser from 'phaser';

class GameFinish extends Phaser.Scene {
  constructor() {
    super({ key: 'GameFinish' });
  }

  create() {
    this.add.text(400, 300, 'Game Finish', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('GameStart'));
  }
}

export default GameFinish;
