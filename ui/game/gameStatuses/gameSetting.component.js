import { Settings } from '../settings/settings.component.js'
import { Button } from '../button/button.component.js'
import { buttonStartStop } from '../../../data/game.data.js';

export function GameSetting() {
   const containerElement = document.createElement('div');

   const settingsElement = Settings();
   containerElement.append(settingsElement);

   const button = Button('START GAME', buttonStartStop);
   button.classList = 'button_in_setting'
   containerElement.append(button);

   return containerElement;
}