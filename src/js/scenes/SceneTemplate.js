import Phaser from 'phaser';
import playerModel from '../model/PlayerModel';
import HUD from '../ui/HUD';

class SceneTemplate extends Phaser.Scene {
    constructor(sceneKey, sceneConfig) {
        super({ key: sceneKey });
        this.sceneConfig = sceneConfig;
    }

    preload() {
        this.loadAssets();
    }

    create() {
        this.createBackground();
        this.createHUD();
        this.createPuzzles();
        this.setupInteractions();
    }

    loadAssets() {
        const { graphics, sounds } = this.sceneConfig;

        graphics.forEach(graphic => {
            this.load.image(graphic.key, graphic.path);
        });

        sounds.forEach(sound => {
            this.load.audio(sound.key, sound.path);
        });
    }

    createBackground() {
        this.add.image(400, 300, this.sceneConfig.background);
    }

    createHUD() {
        this.hud = new HUD(this);
        this.hud.createHintButton(() => {
            playerModel.useHint();
            // Show hint logic
        });
    }

    createPuzzles() {
        this.puzzles = this.sceneConfig.puzzles.map(puzzleConfig => {
            return this.createPuzzle(puzzleConfig);
        });
    }

    createPuzzle(puzzleConfig) {
        const puzzle = this.add.sprite(puzzleConfig.x, puzzleConfig.y, puzzleConfig.spriteKey);
        puzzle.setInteractive();
        puzzle.on('pointerdown', () => this.handlePuzzleClick(puzzleConfig));
        return puzzle;
    }

    handlePuzzleClick(puzzleConfig) {
        if (this.isPuzzleAvailable(puzzleConfig.id)) {
            // Puzzle interaction logic
            playerModel.completePuzzle(puzzleConfig.id);
            if (puzzleConfig.onComplete) {
                puzzleConfig.onComplete();
            }
        } else {
            // Show message that this puzzle cannot be solved yet
        }
    }

    isPuzzleAvailable(puzzleId) {
        // Logic to determine if the puzzle can be solved
        return true; // Replace with actual logic
    }

    setupInteractions() {
        // Additional interactive elements setup
    }
}

export default SceneTemplate;
