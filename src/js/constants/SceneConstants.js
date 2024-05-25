import GameStart from '../scenes/GameStartScene';
import GameFinish from '../scenes/GameFinish';
import HowToPlay from '../scenes/HowToPlay';
import HomeScene from '../scenes/HomeScene';
import LaboratoryScene from '../scenes/LaboratoryScene';
import CitadelScene from '../scenes/CitadelScene';
import TowerScene from '../scenes/TowerScene';

export const KEYS = {
  GameStart: 'GameStart',
  GameFinish: 'GameFinish',
  HowToPlay: 'HowToPlay',
  HomeScene: 'HomeScene',
  LaboratoryScene: 'LaboratoryScene',
  CitadelScene: 'CitadelScene',
  TowerScene: 'TowerScene',
};

export const SCENE_MAP = [
  { key: KEYS.GameStart, state: GameStart },
  { key: KEYS.GameFinish, state: GameFinish },
  { key: KEYS.HowToPlay, state: HowToPlay },
  { key: KEYS.HomeScene, state: HomeScene },
  { key: KEYS.LaboratoryScene, state: LaboratoryScene },
  { key: KEYS.CitadelScene, state: CitadelScene },
  { key: KEYS.TowerScene, state: TowerScene },
];
