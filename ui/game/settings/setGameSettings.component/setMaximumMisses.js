import { data, getMaximumMisses } from "../../../../data/game.data.js";


export function SetMaximumMisses() {
   const containerElement = document.createElement('div');

   const titleElement = document.createElement('p');
   titleElement.classList = 'title_maximum_misses'
   titleElement.append('Maximum misses');
   containerElement.append(titleElement);

   const selectElement = document.createElement('select');
   selectElement.classList = 'maximum_misses'

   data.maximumMissesSettings.map((el, index) => {
      const optionElement = document.createElement('option');
      //index - получили порядковый номер в массиве и присвоили в value для option
      optionElement.value = index;
      optionElement.append(el);
      //выделяем нужный option
      if (el === data.settings.maximumMisses) {
         optionElement.selected = true
      }
      selectElement.append(optionElement);
   })


   selectElement.addEventListener('change', (e) => {
      const selectedIndex = e.currentTarget.value
      getMaximumMisses(selectedIndex)
   })

   containerElement.append(selectElement);

   return containerElement;
}