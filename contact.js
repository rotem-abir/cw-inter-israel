import wixWindow from 'wix-window';

$w.onReady(function () {
	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		$w('#contactHE').hide();
		$w('#contactEN').show();
	}
	else if (myLang === "he") {
		$w('#contactEN').hide();
		$w('#contactHE').show();
	}
});