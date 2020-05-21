import wixData from 'wix-data';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

let myLang;
let servicesSlide = [];
let itemOrder;

function filter(searchValue) {
    $w('#contactDataset').setFilter(wixData.filter().contains('filter', searchValue));
}

function loadServices(num) {
	for (let i=0; i<3; i++) {
		servicesSlide[i] = num + i + 1;
		if (servicesSlide[i] > 7) {
			servicesSlide[i] -= 7;	
		}
		else if (servicesSlide[i] < 1) {
			servicesSlide[i] += 7;	
		}
		servicesSlide[i] = servicesSlide[i].toString();
	}
	//console.log(servicesSlide);
	$w('#servicesDataset').setFilter( wixData.filter()
		.hasSome("order", servicesSlide)
	);
}

$w.onReady(function () {

	myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#serviceHE').hide();
		  $w('#contactStripHE').hide();
		  $w('#serviceEN').show();
		  $w('#contactStripEN').show();
		  
	}
	else if (myLang === "he") {
		$w('#serviceEN').hide();
		$w('#contactStripEN').hide();
		$w('#serviceHE').show();
		$w('#contactStripHE').show();
		$w('#moreServicesEN').hide();	// fix multilingual feature
	}

	$w("#dynamicDataset").onReady( () => {
		let str = $w("#serviceTitle").text.toUpperCase();
		$w("#serviceTitle").text = str;

		let person = $w("#dynamicDataset").getCurrentItem().contact;
		filter(person);
	});
	
	itemOrder = $w('#dynamicDataset').getCurrentItem().order;
	itemOrder = parseInt(itemOrder, 10);

	$w("#serviceButtonRight1").onClick( (event) => {
		//console.log("before: " + itemOrder);
		loadServices(itemOrder);
		itemOrder += 3;
		if (itemOrder > 7) itemOrder -= 7;
		//console.log("after: " + itemOrder);
	});

	$w("#serviceButtonLeft1").onClick((event) => {
		//console.log("before: " + itemOrder);
		loadServices(itemOrder - 6);
		itemOrder -= 3;
		if (itemOrder <= 0) itemOrder += 7;
		//console.log("after: " + itemOrder);
	})

});

export function contactDataset_currentIndexChanged() {
	if (myLang === 'en') {
	    $w('#aboutCardEN').show();
    }
    else {
        $w('#aboutCardHE').show();
    }
}

// ENGLISH

export function phoneButtonEN_click(event) {
    let $item = $w.at(event.context);
    $item("#switchEmailEN").hide();
    if( $item("#switchPhoneEN").isVisible ) {
	    $item("#switchPhoneEN").hide();
    }
    else {
       	$item("#switchPhoneEN").show();
    } 
}

export function emailButtonEN_mouseIn(event) {
    let $item = $w.at(event.context);
    $item("#switchPhoneEN").hide();
    $item("#switchEmailEN").show();
}

export function aboutCardEN_mouseOut(event) {
	let $item = $w.at(event.context);
    $item("#switchPhoneEN").hide();
    $item("#switchEmailEN").hide();
}

// HEBREW

export function phoneButtonHE_click(event) {
	let $item = $w.at(event.context);
    $item("#switchEmailHE").hide();
    if( $item("#switchPhoneHE").isVisible ) {
	    $item("#switchPhoneHE").hide();
    }
    else {
       	$item("#switchPhoneHE").show();
    } 
}

export function emailButtonHE_mouseIn(event) {
    let $item = $w.at(event.context);
    $item("#switchPhoneHE").hide();
    $item("#switchEmailHE").show();
}

export function aboutCardHE_mouseOut(event) {
	let $item = $w.at(event.context);
    $item("#switchPhoneHE").hide();
    $item("#switchEmailHE").hide();
}