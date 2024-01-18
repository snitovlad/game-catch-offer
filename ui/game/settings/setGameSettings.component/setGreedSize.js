import { data, getGridSize } from "../../../../data/game.data.js";

export function SetGridSize() {

   const containerElement = document.createElement('div');

   const titleElement = document.createElement('p');
   titleElement.append('Grid size');
   containerElement.append(titleElement);

   const selectElement = document.createElement('select');

   data.gridSettings.map((el, index) => {
      const optionElement = document.createElement('option');
      //index - получили порядковый номер в массиве размеров игрового поля и присвоили value в option
      optionElement.value = index;
      optionElement.append(`${el.width} x ${el.height}`);
      selectElement.append(optionElement);
   })


   selectElement.addEventListener('change', (e) => {
      const selecredIndex = e.currentTarget.value
      getGridSize(selecredIndex)
   })

   containerElement.append(selectElement);
   return containerElement;
}