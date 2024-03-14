import { catchOffer, data, OFFER_STATUSES, subscribe } from "../../../../data/game.data.js";


export function Cell(x, y) {

   //если subscribe здесь - то каждый интервал будет обновляться содержимое ячейки,
   //но также будет добавляться много функций в массив subscriber
   //если subscribe в grid.component - то будет пересоздаваться вся таблица, 
   
   // subscribe(() => {
   //    update(x, y, cellEl)
   // })

   const cellEl = document.createElement('td');
   update(x, y, cellEl);
   return cellEl;
}

function update(x, y, cellEl) {
   //cellEl.innerHTML = ''; //очищать наверно не надо, т.к. каждый раз создаем заново
   if (x === data.coords.current.x && y === data.coords.current.y) {
      const offerEl = document.createElement('img');
      offerEl.addEventListener('click', catchOffer)
      offerEl.src = 'assets/images/offer.png';
      cellEl.append(offerEl);
   }
   if (data.status === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
      const caughtEl = document.createElement('img');
      caughtEl.src = 'assets/images/caught-offer.png';
      cellEl.append(caughtEl);
   }
   if (data.status === OFFER_STATUSES.miss && x === data.coords.previous.x && y === data.coords.previous.y) {
      const missedEl = document.createElement('img');
      missedEl.src = 'assets/images/missed-offer.png';
      cellEl.append(missedEl);
   }
}