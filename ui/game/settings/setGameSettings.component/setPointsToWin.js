import { data, getPointsToWin } from "../../../../data/game.data.js";


export function SetPointsToWin() {
   const containerElement = document.createElement('div');

   const titleElement = document.createElement('p');
   titleElement.classList = 'title_points_to_win'
   titleElement.append('Points to win');
   containerElement.append(titleElement);

   const selectElement = document.createElement('select');
   selectElement.classList = 'points_to_win'

   data.pointToWinSettings.map((el, index) => {
      const optionElement = document.createElement('option');
      //index - получили порядковый номер в массиве и присвоили в value для option
      optionElement.value = index;
      optionElement.append(`${el} pts`);
      //выделяем нужный option
      if (el === data.settings.pointToWin) {
         optionElement.selected = true
      }
      selectElement.append(optionElement);
   })

   selectElement.addEventListener('change', (e) => {
      const selectedIndex = e.currentTarget.value
      getPointsToWin(selectedIndex)
   })
   containerElement.append(selectElement);

   return containerElement;
}