import Phaser from 'phaser';

export default class HUD extends Phaser.Scene {
  constructor() {
    super({ key: 'HUD' });
  }

  create() {
    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
  }

  updateScore(score) {
    this.scoreText.setText(`Score: ${score}`);
  }
}
