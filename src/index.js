import changeThemeColorMode from './change-mode';
import getTilesBoardDimension from './get-rows-and-columns';
import { startGame } from './game';

document.querySelector('.radios-container__radio').checked = true;

getTilesBoardDimension();
changeThemeColorMode();

const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', startGame);

// DO ZROBIENIA
