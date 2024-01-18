import { data, moveOfferToRandomPosition, subscribe } from '../../../data/game.data.js';
import { Cell } from './cell/cell.component.js'

export function Greed() {
   moveOfferToRandomPosition(); //запустили случайную отрисовку начальных координат

subscribe(() => updateGrid(data.settings.rowsCount, data.settings.columnsCount, containerElement))

   const containerElement = document.createElement('table');
   containerElement.classList = 'grid';
   updateGrid(data.settings.rowsCount, data.settings.columnsCount, containerElement)

   return containerElement;
}

function updateGrid(rows, columns, containerElement) {
   containerElement.innerHTML = '';
   for (let y = 0; y < rows; y++) {
      const row = document.createElement('tr');
      for (let x = 0; x < columns; x++) {
         const cell = Cell(x, y);
         row.append(cell)
         containerElement.append(row)
      }
   }  
}