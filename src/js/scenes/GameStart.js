import Phaser from 'phaser';
import PlayerModel from '../model/PlayerModel';

class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: 'GameStart' });
  }

preload() {
  this.load.image('loading_btn', 'assets/ui/loading_btn');
}

create() {
  this.player = new PlayerModel();
  this.add.text(400, 300, 'GameStart', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
  this.input.on('pointerdown', () => this.scene.start('GameStart'));
  this.add.image(400, 300, 'loading_btn');
  
}
}
export default GameStart;
