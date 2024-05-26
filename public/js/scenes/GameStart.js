import Phaser from 'phaser';
import PlayerModel from '../model/PlayerModel';

class GameStart extends Phaser.Scene {
    constructor() {
        super({ key: 'GameStart' });
    }

    preload() {
        // Load the background, title, and start button assets
        // this.load.atlas('startbg', '/assets/spritesheets/backgrounds-0.png','/assets/spritesheets/backgrounds.json' );
        // this.load.atlas('start-btn', '/assets/spritesheets/backgrounds-0.png','/assets/spritesheets/backgrounds.json' );
        this.load.image('start-bg', '/src/assets/static/start_scene.jpg')
        this.load.image('start-btn', 'src/assets/graphics/ui/buttons/startgame_button.png')
    }

    create() {
        this.player = new PlayerModel()
        // Create and center the background using a frame from the spritesheet
        const bg = this.add.image(0, 0, 'start-bg' ); // Use the frame name from the JSON
        const startBtn = this.add.image(0,0, 'start-btn')
        // Create and center the title
       // const title = this.add.image(960, 300, 'sprites', 'title_frame'); // Use the frame name from the JSON

        // Create and center the start button
      //  const startButton = this.add.image(960, 700, 'sprites', 'startButton_frame'); // Use the frame name from the JSON

        // Make the start button interactive
        // startButton.setInteractive();
        // startButton.on('pointerdown', () => {
        //     this.scene.start('home'); // Replace 'NextScene' with your next scene key
        // });
    }
}

export default GameStart;
