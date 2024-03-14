import { data, getGridSize } from "../../../../data/game.data.js";

export function SetGridSize() {

   const containerElement = document.createElement('div');

   const titleElement = document.createElement('p');
   titleElement.classList = 'title_grid_size'
   titleElement.append('Grid size');
   containerElement.append(titleElement);

   const selectElement = document.createElement('select');
   selectElement.classList = 'grid_size'

   data.gridSettings.map((el, index) => {
      const optionElement = document.createElement('option');
      //index - получили порядковый номер в массиве размеров игрового поля и присвоили в value для option
      optionElement.value = index;
      optionElement.append(`${el.width} x ${el.height}`);
      //выделяем нужный option
      if (el.width === data.settings.columnsCount && el.height === data.settings.rowsCount) {
         optionElement.selected = true
      }
      selectElement.append(optionElement);
   })
   selectElement.addEventListener('change', (e) => {
      const selectedIndex = e.currentTarget.value
      getGridSize(selectedIndex)
   })

   containerElement.append(selectElement);
   return containerElement;
}