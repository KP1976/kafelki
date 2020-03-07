const cssVariables = document.styleSheets[1].cssRules[0].style.cssText.split(
	';',
);

// Usunięcie z listy zmiennej --radius --black i pustego stringa (trzy ostatnie elementy)
cssVariables.splice(-3, 3);

export default cssVariables;
