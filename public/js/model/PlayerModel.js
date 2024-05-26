export default class PlayerModel {
    constructor() {
      this.progress = {};
      this.hintsUsed = 0;
      this.puzzlesCompleted = [];
      this.informationLearned = [];
      this.currentPosition = '';
    }
  
    // Add methods to update player progress, hints, etc.
    updateProgress(milestone) {
      this.progress[milestone] = true;
    }
  
    useHint() {
      this.hintsUsed += 1;
    }
  
    completePuzzle(puzzle) {
      this.puzzlesCompleted.push(puzzle);
    }
  
    learnInformation(info) {
      this.informationLearned.push(info);
    }
  
    updatePosition(position) {
      this.currentPosition = position;
    }
  }
  