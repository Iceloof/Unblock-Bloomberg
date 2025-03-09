window.onload = function() {
	// Function to hide an element by ID
	function hideElementById(id) {
	  const element = document.getElementById(id);
	  if (element) {
		element.style.display = 'none';
	  }
	}

	// Function to hide elements by class name prefix
	function hideElementsByClassPrefix(prefix) {
	  const elements = document.querySelectorAll(`[class^="${prefix}"]`);
	  elements.forEach(element => {
		element.style.display = 'none';
	  });
	}

	// Function to remove ::after pseudo-element styles
	function removeAfterPseudoElement(attribute, value) {
	  const style = document.createElement('style');
	  style.innerHTML = `[${attribute}="${value}"]::after { content: none !important; }`;
	  document.head.appendChild(style);
	}

	// Function to overwrite overflow-y for class names starting with a prefix
	function overwriteOverflowYForClassPrefix(prefix) {
	  const elements = document.querySelectorAll(`[class^="${prefix}"]`);
	  elements.forEach(element => {
		element.style.setProperty('overflow-y', 'auto', 'important');
		element.style.setProperty('height', 'auto', 'important');
	  });
	}

	function overwriteMaskImageForClassSubstring(substring) {
	  const elements = document.querySelectorAll(`[class*="${substring}"]`);
	  elements.forEach(element => {
		element.style.maskImage = 'none';
	  });
	}

	// Function to remove all class names from the html tag
	function removeAllClassNamesFromHtml() {
		const htmlElement = document.documentElement;
		htmlElement.className = '';
	}
	
	// Function to remove all class names from the body tag
	function removeAllClassNamesFromBody() {
		const bodyElement = document.body;
		bodyElement.className = '';
	}
	removeAfterPseudoElement('data-component', 'nav');
	setInterval(() => {
	// Example usage
	hideElementById('fortress-container-root');
	hideElementsByClassPrefix('media-ui-FullWidthAd');
	overwriteOverflowYForClassPrefix('media-ui-LeaderboardAd');
	overwriteMaskImageForClassSubstring('Blur');
	removeAllClassNamesFromHtml();
	removeAllClassNamesFromBody();
	}, 500);
}