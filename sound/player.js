import { OFFER_STATUSES, data, subscribe } from "../data/game.data.js";

export function Player() {
   const catchAudio = new Audio();
   catchAudio.src = 'assets/sounds/catch.wav';
   if (!data.settings.isMuted) {
      alert('jhfghdjfg')
      }
      subscribe(() => {
         if (data.status === OFFER_STATUSES.caught && data.settings.isMuted === false) {
            catchAudio.currentTime = 0;
            catchAudio.play()
         }
      })
   
}