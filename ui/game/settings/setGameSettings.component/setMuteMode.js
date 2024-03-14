import { data } from "../../../../data/game.data.js";


export function SetMuteMode() {
   const containerElement = document.createElement('div');

   const titleElement = document.createElement('p');
   titleElement.classList = 'title_mute_mode'
   titleElement.append('Mute mode');
   containerElement.append(titleElement);

   const checkboxElement = document.createElement('img');
   checkboxElement.classList = 'mute_mode_image'
   if (data.settings.isMuted) {
      checkboxElement.src = 'assets/images/mute-off.png';
   } else {
      checkboxElement.src = 'assets/images/mute-on.png';
   }

   checkboxElement.addEventListener('click', () => {
      if (data.settings.isMuted) {
         data.settings.isMuted = false
         checkboxElement.src = 'assets/images/mute-on.png';
      } else {
         data.settings.isMuted = true
         checkboxElement.src = 'assets/images/mute-off.png';}
      console.log('audio')
   })
   containerElement.append(checkboxElement);

   return containerElement;
}