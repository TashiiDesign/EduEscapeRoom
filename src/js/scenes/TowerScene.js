import Phaser from 'phaser';

class TowerScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TowerScene' });
  }

  create() {
    this.add.text(400, 300, 'TowerScene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('TowerScene'));
  }
}

export default TowerScene;
