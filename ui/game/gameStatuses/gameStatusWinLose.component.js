import { buttonStartStop, data, gameStatusSetting, resultTime } from "../../../data/game.data.js";
import { Button } from "../button/button.component.js";

export function youWinLose(classWinLose) {

    const containerElement = document.createElement('div')
    containerElement.classList = classWinLose

    const wrapperForEl = document.createElement('div')
    wrapperForEl.classList = 'score_list'

    const catchEl = document.createElement('p')
    catchEl.innerText = 'Catch: ' + data.score.caughtCount

    const missEl = document.createElement('p')
    missEl.innerText = 'Miss: ' + data.score.missCount

    const timeEl = document.createElement('p')
    timeEl.innerText = 'Time: ' + resultTime()


    wrapperForEl.append(catchEl);
    wrapperForEl.append(missEl);
    wrapperForEl.append(timeEl);

    const button = Button('Play again', buttonStartStop)
    wrapperForEl.append(button)

    const buttonSet = Button('Settings', gameStatusSetting)
    buttonSet.classList = 'button_set'
    wrapperForEl.append(buttonSet)

    containerElement.append(wrapperForEl)

    return containerElement
}
