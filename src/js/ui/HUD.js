class HUD {
    constructor(scene) {
        this.scene = scene;
    }

    createHintButton(callback) {
        const hintButton = this.scene.add.text(10, 10, 'Hint', { fontSize: '32px', fill: '#fff' });
        hintButton.setInteractive();
        hintButton.on('pointerdown', callback);
        this.hintButton = hintButton;
    }

    // Add more HUD elements as needed
}

export default HUD;
