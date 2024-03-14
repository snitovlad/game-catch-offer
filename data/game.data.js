export const OFFER_STATUSES = {
   default: 'default',
   caught: 'caught',
   miss: 'miss'
}
export const GAME_STATUSES = {
   setting: 'setting',
   in_process: 'in_process',
   you_win: 'you_win',
   you_lose: 'you_lose'
}

export const data = {
   settings: {
      rowsCount: 3,
      columnsCount: 3,
      pointToWin: 5,
      maximumMisses: 3,
      decreaseDeltaInMs: 10,
      isMuted: true
   },
   gridSettings: [
      { width: 3, height: 3 },
      { width: 4, height: 4 },
      { width: 5, height: 5 },
      { width: 6, height: 6 },
      { width: 7, height: 7 },
      { width: 8, height: 8 },
   ],
   pointToWinSettings: [5, 20, 30, 40, 60, 80, 100],
   maximumMissesSettings: [3, 5, 7, 9, 11, 13],
   decreaseMsAfterTheCatch: [10, 30, 50, 70, 100, 120, 140],
   stepTimeoutInMs: 2000,
   gameStatus: GAME_STATUSES.setting,
   status: OFFER_STATUSES.default,
   coords: {
      current: {
         x: 0,
         y: 0
      },
      previous: {
         x: 1,
         y: 1
      }
   },
   score: {
      missCount: 0,
      caughtCount: 0
   }
}

let subscribers = [];

export function subscribe(newSubscriber) {
      subscribers.push(newSubscriber);
      console.log(subscribers)
   }
//запускаем по очереди функции-подписчики
function notify() {
   subscribers.forEach(subscriber => subscriber())
}

//subscriber для перерисовки всего
let globalSubscriber = null;
export function globalSubscribe(newGlobalSubscriber) {
   globalSubscriber = newGlobalSubscriber
}

let stepIntervalId;
function runStepInterval() {
   stepIntervalId = setInterval(() => {
      missOffer();
      moveOfferToRandomPosition();
      notify();
   }, data.stepTimeoutInMs)
}
//runStepInterval(); //здесь был бы автоматический запуск игры после загрузки

export function moveOfferToRandomPosition() {
   let newX = null;
   let newY = null;
   do {
      newX = getRandom(data.settings.columnsCount - 1);
      newY = getRandom(data.settings.rowsCount - 1);
   } while (data.coords.current.x === newX && data.coords.current.y === newY)

   //присваиваются новые координаты для offer
   data.coords.current.x = newX;
   data.coords.current.y = newY;
}

//создали функцию для промаха
function missOffer() {
   data.status = OFFER_STATUSES.miss;
   //считаем количество промахов
   data.score.missCount++;
   //присвоили предыдущие координаты для промаха
   data.coords.previous = { ...data.coords.current }

   setTimeout(() => {
      data.status = OFFER_STATUSES.default;
      notify()
   }, 200)
}

//создали функцию для попадания
export function catchOffer() {
   data.status = OFFER_STATUSES.caught;
   //считаем количество промахов
   data.score.caughtCount++;
   //присвоили предыдущие координаты для попадания
   data.coords.previous = { ...data.coords.current }

   data.stepTimeoutInMs -= data.settings.decreaseDeltaInMs;

   setTimeout(() => {
      data.status = OFFER_STATUSES.default;
      notify()
   }, 200)

   //чтобы offer переместился сразу после попадания, а не ждал setInterval
   moveOfferToRandomPosition();
   notify(); //добавили, т.к. убрали из moveOfferToRandomPosition
   //очистили интервал
   clearInterval(stepIntervalId);
   //запустили интервал заново
   runStepInterval()
}

function getRandom(N) {
   return Math.floor(Math.random() * (N + 1))
}

//функция для установки размера сетки
export function getGridSize(index) {
   data.settings.rowsCount = data.gridSettings[index].width;
   data.settings.columnsCount = data.gridSettings[index].height;
   notify(); //перерисовываем в greed.component.js
}

//функция для установки количества попаданий
export function getPointsToWin(index) {
   data.settings.pointToWin = data.pointToWinSettings[index];
   notify()
}
//функция для установки количества пропусков
export function getMaximumMisses(index) {
   data.settings.maximumMisses = data.maximumMissesSettings[index];
   notify()
}
//функция для установки уменьшения времени на попадание
export function getDecreaseMsAfterTheCatch(index) {
   data.settings.decreaseDeltaInMs = data.decreaseMsAfterTheCatch[index];
   notify()
}

export function gameStatusInProcess() {
   data.gameStatus = GAME_STATUSES.in_process
   runStepInterval()
   globalSubscriber()
}
export function gameStatusSetting() {
   data.gameStatus = GAME_STATUSES.setting
   clearInterval(stepIntervalId)
   globalSubscriber()
}
let stopTime = 0
export function gameStatusYouWin() {
   data.gameStatus = GAME_STATUSES.you_win
   stopTime = new Date;
   subscribers = [];
   clearInterval(stepIntervalId)
   globalSubscriber()
}
export function gameStatusYouLose() {
   data.gameStatus = GAME_STATUSES.you_lose
   stopTime = new Date;
   subscribers = [];
   clearInterval(stepIntervalId)
   globalSubscriber()
}

let startTime = 0;
//функция для кнопки
export function buttonStartStop() {
   clearInterval(stepIntervalId)
   moveOfferToRandomPosition();
   startTime = new Date;
   data.score.missCount = 0;
   data.score.caughtCount = 0;
   data.gameStatus = GAME_STATUSES.in_process
   data.stepTimeoutInMs = 2000;
   runStepInterval()
   globalSubscriber()
}

export function resultTime() {
   let result = Math.round((stopTime - startTime) / 1000);
   let min = Math.floor((result / 60));
   let sec = (result - min)
   return min + 'm ' + sec + 's'
}