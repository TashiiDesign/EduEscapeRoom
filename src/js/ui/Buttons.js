import Phaser from 'phaser';

export default class Buttons extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.scene = scene;
    scene.add.existing(this);
  }

  createButton(text, callback) {
    const button = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' })
      .setInteractive()
      .on('pointerdown', callback);
    this.add(button);
    return button;
  }
}
