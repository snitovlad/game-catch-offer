import { data, gameStatusYouLose, gameStatusYouWin, subscribe } from '../../../data/game.data.js'

export function Scores() {
   const containerElement = document.createElement('div');
   containerElement.classList = 'score_table'

   const scoreCaughtElement = document.createElement('span');
   const missCaughtElement = document.createElement('span');

   update(scoreCaughtElement, missCaughtElement);

   subscribe(() => {
      scoreCaughtElement.innerHTML = '';
      missCaughtElement.innerHTML = '';
      update(scoreCaughtElement, missCaughtElement);
   })
   containerElement.append(scoreCaughtElement, missCaughtElement)
   return containerElement;
}

function update(scoreCaughtElement, missCaughtElement) {
   scoreCaughtElement.append('Catch: ' + data.score.caughtCount)
   missCaughtElement.append('Miss: ' + data.score.missCount)
   if (data.score.caughtCount === data.settings.pointToWin) {
      gameStatusYouWin()
   }
   if (data.score.missCount === data.settings.maximumMisses) {
      gameStatusYouLose()
   }

}