import { OFFER_STATUSES, data, subscribe } from "../data/game.data.js";

export function CatchSound() {
   const catchAudio = new Audio();
   catchAudio.src = 'assets/sounds/catch.wav';
   subscribe(() => {
      updateSound(OFFER_STATUSES.caught, catchAudio)
   })
}

export function MissSound() {
   const missAudio = new Audio();
   missAudio.src = 'assets/sounds/miss.mp3';
   subscribe(() => {
      updateSound(OFFER_STATUSES.miss, missAudio)
   })
}

function updateSound(status, audio) {
   if (data.status === status && data.settings.isMuted === false) {
      audio.currentTime = 0;
      audio.play()      
   }
}
