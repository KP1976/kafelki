import changeThemeColorMode from './change-theme-color-mode';
import generateTiles from './generate-tiles';
import changeBoardDimension from './change-board-dimension';
import startGame from './start-game';

const tilesGrid = document.querySelector('.tiles-grid');

changeThemeColorMode();
generateTiles(4, 3, tilesGrid, 'tiles-grid__tile');
changeBoardDimension();
startGame();
