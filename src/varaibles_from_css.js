const cssVariables = document.styleSheets[0].cssRules[0].style.cssText.split(
	';',
);

// Usunięcie z listy koloru szarego i czarnego (dwa pierwsze elementy)
cssVariables.splice(0, 2);
// Usunięcie z listy zmiennej --radius i pustego stringa (dwa ostatnie elementy)
cssVariables.splice(-2, 2);

export default cssVariables;
