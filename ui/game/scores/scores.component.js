import { data, subscribe, youAreWinLose } from '../../../data/game.data.js'

export function Scores() {

   subscribe(() => {
      containerElement.innerHTML = '';
      youAreWinLose(containerElement)
      update(containerElement);
      
   })

   
   const containerElement = document.createElement('div');
   update(containerElement);
   return containerElement;
}

function update(containerElement) {
   containerElement.append('catch: ' + data.score.caughtCount + '; miss: ' + data.score.missCount);
   if (data.score.caughtCount === data.settings.pointToWin) {      
      data.isWinner = true;     
   }
   if (data.score.missCount === data.settings.maximumMisses) {      
      data.isWinner = false;     
   }

}