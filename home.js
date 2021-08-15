import wixWindow from 'wix-window';

const dropOptionsEN = [
	{"label": 'Real Estate Consultants', "value": "Consulting", "url": "/services/Occupier-Services"},
	{"label": "Property for rent", "value": "Rent", "url": "/properties"},
	{"label": "Tenants for my property", "value": "Tenant", "url": "/contact-us"},
	{"label": "Sale or Purchase of property", "value": "Capital markets)", "url": "/services/Capital-Markets"},
	{"label": "Insights on markets and trends", "value": "Insights", "url": "/market-research"},
	{"label": "Career opportunities", "value": "Career", "url": "/careers"},
];

const dropOptionsHE = [
	{"label": 'ייעוץ נדל"ני', "value": "Consulting", "url": "/services/Occupier-Services?lang=he"},
	{"label": "משרד להשכרה", "value": "Rent", "url": "/properties?lang=he"},
	{"label": "מציאת שוכר/ת למשרד שלי", "value": "Tenant", "url": "/contact-us?lang=he"},
	{"label": "רכישה או מכירה של נכס מניב", "value": "Capital markets)", "url": "/services/Capital-Markets?lang=he"},
	{"label": "מידע על מצב השוק", "value": "Insights", "url": "/market-research?lang=he"},
	{"label": "פיתוח הקריירה שלי", "value": "Career", "url": "/careers?lang=he"},
];

$w.onReady(function () {
	
	$w("#howToHelpDropdown").options = dropOptionsEN;
	$w("#howToHelpDropdownHE").options = dropOptionsHE;

	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		$w('#howToHelpDropdown').show();
		$w('#howToHelpDropdownHE').hide();
		$w('#repeaterEN').show();
		$w('#repeaterHE').hide();
	}
	else if (myLang === "he") {
		$w('#howToHelpDropdownHE').show();
		$w('#howToHelpDropdown').hide();
		$w('#repeaterHE').show();
		$w('#repeaterEN').hide();
		
	}

	$w("#serviceButtonRight1").onClick((event) => {
		$w("#servicesSlideshow").next();
	})

	$w("#serviceButtonLeft1").onClick((event) => {
		$w("#servicesSlideshow").previous();
	})

	$w("#serviceButtonRight2").onClick((event) => {
	$w("#servicesSlideshow").next();
	})

	$w("#serviceButtonLeft2").onClick((event) => {
		$w("#servicesSlideshow").previous();
	})

	$w("#serviceButtonRight3").onClick((event) => {
		$w("#servicesSlideshow").next();
	})

	$w("#serviceButtonLeft3").onClick((event) => {
		$w("#servicesSlideshow").previous();
	})

});

import wixLocation from 'wix-location';

export function homeLookingForDropdown_change(event) {
	let userInput = $w('#howToHelpDropdown').value;
	for (let i=0; i<dropOptionsEN.length; i++) {
		if (userInput === dropOptionsEN[i].value) {
			wixLocation.to(dropOptionsEN[i].url);
			break;
		}
	}
}

export function howToHelpDropdownHE_change(event) {
	let userInput = $w('#howToHelpDropdownHE').value;
	for (let i=0; i<dropOptionsHE.length; i++) {
		if (userInput === dropOptionsHE[i].value) {
			wixLocation.to(dropOptionsHE[i].url);
			break;
		}
	}
}