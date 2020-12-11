import wixWindow from 'wix-window';

$w.onReady(function () {

	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#servicesHE').hide();
		  $w('#servicesEN').show();
	}
	else if (myLang === "he") {
		$w('#servicesEN').hide();
		$w('#servicesHE').show();
	}

});