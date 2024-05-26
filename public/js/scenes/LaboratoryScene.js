import Phaser from 'phaser';

class LaboratoryScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LaboratoryScene' });
  }

  create() {
    this.add.text(400, 300, 'LaboratoryScene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('LaboratoryScene'));
  }
}

export default LaboratoryScene;
