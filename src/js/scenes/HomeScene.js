import Phaser from 'phaser';

class HomeScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HomeScene' });
  }

  create() {
    this.add.text(400, 300, 'HomeScene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('HomeScene'));
  }
}

export default HomeScene;
