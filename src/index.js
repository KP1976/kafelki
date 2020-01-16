const cssVariables = document.styleSheets[0].cssRules[0].style.cssText.split(
	';',
);
cssVariables.pop();
cssVariables.pop();
cssVariables.shift();
cssVariables.shift();
console.log(cssVariables);
