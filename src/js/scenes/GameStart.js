import Phaser from 'phaser';
import PlayerModel from '../model/PlayerModel';
import Buttons from '../ui/Buttons';

class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: 'GameStart' });
  }

  create() {
    this.player = new PlayerModel();

    const buttons = new Buttons(this, 400, 300);
    buttons.createButton('Start Game', () => this.scene.start('GameSetup'));
    buttons.createButton('How to Play', () => this.scene.start('HowToPlay'));
  }
}

export default GameStart;
