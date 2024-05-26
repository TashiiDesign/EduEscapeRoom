import Phaser from 'phaser';

class CitadelScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CitadelScene' });
  }

  create() {
    this.add.text(400, 300, 'CitadelScene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('CitadelScene'));
  }
}

export default CitadelScene;
