import wixData from 'wix-data';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

let myLang;
let servicesSlide = [1,2,3,4,5,6,7];
let marker;
let servArr = [];
let tempMarker;

function filter(searchValue) {
    $w('#contactDataset').setFilter(wixData.filter().contains('filter', searchValue));
}

function createTrio(num) {
	let tempArr = [];
	for (let i=1; i<=3; i++) {
		let pushNum = num + i;
		if(pushNum > servicesSlide.length) {
			pushNum -= servicesSlide.length;
		}
		tempArr.push(pushNum);
	}
	servArr = tempArr;
	return tempArr[2];
}

function scrollServices(arr) {
	$w('#servicesDataset').setFilter( wixData.filter()
		.hasSome("order", arr)
	);
	//console.log("temp marker: " + tempMarker + ", marker: " + marker + ", servArr:" + servArr);
}

$w.onReady(function () {
	myLang = wixWindow.multilingual.currentLanguage; 
	marker = $w('#dynamicDataset').getCurrentItem().order;
	marker = parseInt(marker, 10); // NEEDED?

	tempMarker = createTrio(marker);
	scrollServices(servArr);

  	if (myLang === 'en') {
		$w('#serviceHE').hide();
		$w('#contactStripHE').hide();
		$w('#servicesRepeaterHE').hide();
		$w('#serviceEN').show();
		$w('#contactStripEN').show();  
		$w('#servicesRepeaterEN').show()
	}
	else if (myLang === "he") {
		$w('#serviceEN').hide();
		$w('#contactStripEN').hide();
		$w('#servicesRepeaterEN').hide();
		$w('#serviceHE').show();
		$w('#contactStripHE').show();
		$w('#servicesRepeaterHE').show();
	}

	$w("#dynamicDataset").onReady( () => {
		let str = $w("#serviceTitle").text.toUpperCase();
		$w("#serviceTitle").text = str;
		
		let person = $w("#dynamicDataset").getCurrentItem().contact;
		$w("#contactDataset").onReady( () => {
			filter(person);
		});
	});
	
	$w("#serviceButtonRight1").onClick( (event) => {
		tempMarker = createTrio(tempMarker);
		scrollServices(servArr);
	});
	
	$w("#serviceButtonLeft1").onClick((event) => {
		let backwards = tempMarker - 6 + servicesSlide.length;
		tempMarker = createTrio(backwards);
		scrollServices(servArr);
	})
});

function createWhatsup(wasup) {
    wasup = wasup.slice(1, 12);
    wasup = wasup.split("-");
    wasup = 'https://wa.me/972' + wasup[0]+wasup[1]+wasup[2];
    return wasup;
}

export function contactDataset_currentIndexChanged() {
	let mobile = $w('#contactDataset').getCurrentItem().mobile;
    let wasuplink = createWhatsup(mobile);
	if (myLang === 'en') {
	    $w('#aboutTeamRepeaterEN').show();
		$w("#whatsappButtonEN").link = wasuplink;
    }
    else {
        $w('#aboutTeamRepeaterHE').show();
		$w("#whatsappButtonHE").link = wasuplink;
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