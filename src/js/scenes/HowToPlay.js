import Phaser from 'phaser';

class HowToPlay extends Phaser.Scene {
  constructor() {
    super({ key: 'HowToPlay' });
  }

  create() {
    this.add.text(400, 300, 'How To Play', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('HowToPlay'));
  }
}

export default HowToPlay;
