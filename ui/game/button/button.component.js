import { buttonStartStop } from "../../../data/game.data.js"

export function Button() {   
   const containerElement = document.createElement('div')
   const buttonElement = document.createElement('button')
   buttonElement.innerText= 'Start'
   buttonElement.addEventListener('click', () => {
      buttonStartStop()
   })
   containerElement.append(buttonElement)
   return containerElement
}