class PlayerModel {
    constructor() {
        this.progress = {
            milestones: [],
            hintsUsed: 0,
            puzzlesCompleted: [],
            informationLearned: [],
            currentPosition: '',
        };
    }

    updateMilestone(milestone) {
        this.progress.milestones.push(milestone);
    }

    useHint() {
        this.progress.hintsUsed += 1;
    }

    completePuzzle(puzzleId) {
        if (!this.progress.puzzlesCompleted.includes(puzzleId)) {
            this.progress.puzzlesCompleted.push(puzzleId);
        }
    }

    learnInformation(info) {
        this.progress.informationLearned.push(info);
    }

    setCurrentPosition(position) {
        this.progress.currentPosition = position;
    }

    // Add more methods to track player progress
}

const playerModel = new PlayerModel();
export default playerModel;