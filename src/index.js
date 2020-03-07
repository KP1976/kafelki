import changeThemeColorMode from './change-mode';
import getTilesBoardDimension from './get-rows-and-columns';

document.querySelector('.radios-container__radio').checked = true;

getTilesBoardDimension();
changeThemeColorMode();

// DO ZROBIENIA
/*
	1. Plansza startowa, gdzie mamy do wyboru 4 plansze: 4 x 3, 4 x 4, 6 x 3 i 5 x 4 (rząd x kolumna).
	2. Po wybraniu rodzaju planszy generowanie odpowiedniej liczby kafelków.
	3. Losowe przydzielanie koloru do połowy liczby kafelków.
	4. Pojawienie się kolorowej planszy na 3 sekundy po czym wszystkie stają się szare.
*/
