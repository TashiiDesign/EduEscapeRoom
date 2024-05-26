import Phaser from 'phaser';
import PlayerModel from '../model/PlayerModel';

class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: 'GameStart' });
  }

create() {
  this.player = new PlayerModel();
  this.add.text(400, 300, 'Enter', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
  this.input.on('pointerdown', () => this.scene.start('GameStart'));
  
}
}
export default GameStart;
