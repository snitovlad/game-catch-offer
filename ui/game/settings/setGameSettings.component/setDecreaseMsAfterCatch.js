import { data, getDecreaseMsAfterTheCatch } from "../../../../data/game.data.js";


export function SetDecreaseMsAfterCatch() {
   const containerElement = document.createElement('div');

   const titleElement = document.createElement('p');
   titleElement.classList = 'title_decrease_after_catch'
   titleElement.append('Decrease ms after the catch');
   containerElement.append(titleElement);

   const selectElement = document.createElement('select');
   selectElement.classList = 'decrease_after_catch'

   data.decreaseMsAfterTheCatch.map((el, index) => {
      const optionElement = document.createElement('option');
      //index - получили порядковый номер в массиве и присвоили в value для option
      optionElement.value = index;
      optionElement.append(`${el} ms`);
      //выделяем нужный option
      if (el === data.settings.decreaseDeltaInMs) {
         optionElement.selected = true
      }
      selectElement.append(optionElement);
   })


   selectElement.addEventListener('change', (e) => {
      const selectedIndex = e.currentTarget.value
      getDecreaseMsAfterTheCatch(selectedIndex)
   })

   containerElement.append(selectElement);

   return containerElement;
}