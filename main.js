import { Game } from './ui/game/gameStatuses/game.component.js';
import { GAME_STATUSES, data, globalSubscribe } from './data/game.data.js';
import { youWinLose } from './ui/game/gameStatuses/gameStatusWinLose.component.js';
import { GameSetting } from './ui/game/gameStatuses/gameSetting.component.js';

function renderApp() {
   document.body.innerHTML = "";

   switch (data.gameStatus) {
      case GAME_STATUSES.in_process:
         const gameEl = Game();
         document.body.append(gameEl);
         break;
      case GAME_STATUSES.you_win:
         const winEl = youWinLose('you_win');
         document.body.append(winEl);
         break;
      case GAME_STATUSES.you_lose:
         const loseEl = youWinLose('you_lose');
         document.body.append(loseEl);
         break;
      case GAME_STATUSES.setting:
         const setting = GameSetting();
         document.body.append(setting);
         break;
   }

}

globalSubscribe(renderApp);
renderApp();
