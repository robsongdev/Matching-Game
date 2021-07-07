import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from './src/components/CardGame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame() //return da função executada


$root.insertAdjacentHTML('beforeend', $htmlCardGame)

