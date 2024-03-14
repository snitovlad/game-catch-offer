import { Settings } from '../settings/settings.component.js'
import { Scores } from '../scores/scores.component.js'
import { Greed } from '../greed/grid.component.js'
import { CatchSound, MissSound } from '../../../sound/player.js';

export function Game() {
   CatchSound();
   MissSound();

   const containerElement = document.createElement('div');

   const settingsElement = Settings();
   containerElement.append(settingsElement);

   const scoresElement = Scores();
   containerElement.append(scoresElement);

   const greedElement = Greed();
   containerElement.append(greedElement);

   return containerElement;
}