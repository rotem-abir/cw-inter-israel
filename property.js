import wixData from 'wix-data';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

let myLang;
let mobile;
let fixFont;

$w.onReady(function () {

    myLang = wixWindow.multilingual.currentLanguage;
    let isHidden = $w("#dynamicDataset").getCurrentItem().topResaults;
    if (isHidden === undefined) {
        wixLocation.to("/properties");   
    }
    else if (isHidden > 555) {
        if (myLang === 'en') {
            $w('#soldEN').show()
            if (isHidden === 777) {
                $w('#soldEN').text = "FULLY LET";   
            }
        }
        else {
            $w('#soldHE').show()
            if (isHidden === 777) {
                $w('#soldHE').text = "שווק במלואו";   
            }
        }
    }
    
    let isBrouchure;
  	if (myLang === 'en') {
		$w('#ListStripHE').hide();
		$w('#ListStripEN').show();
        isBrouchure = $w("#dynamicDataset").getCurrentItem().brochure;
	}
	else if (myLang === "he") {
		$w('#ListStripEN').hide();
		$w('#ListStripHE').show();
        isBrouchure = $w("#dynamicDataset").getCurrentItem().brochureHe;
        //fixFont = $w('#textOccHe').html;
        //console.log(fixFont);
	}   
    if (isBrouchure === undefined) {
         $w('#brochureButton').hide();
         $w('#brochureButtonHE').hide();
    }

	let person = $w("#dynamicDataset").getCurrentItem().contact;
    filter(person);
});

function filter(searchValue) {
    $w('#contactDataset').setFilter(wixData.filter().contains('titleEn', searchValue));
}

export function contactDataset_currentIndexChanged() {
    mobile = $w('#contactDataset').getCurrentItem().mobile;
    let wasuplink = createWhatsup(mobile);

  	if (myLang === 'en') {
	    $w('#aboutCardEN').show();
        $w("#whatsappButtonEN").link = wasuplink;
    }
    else {
        $w('#aboutCardHE').show();
        $w("#whatsappButtonHE").link = wasuplink;
    }
}

function createWhatsup(wasup) {
    wasup = wasup.slice(1, 12);
    wasup = wasup.split("-");
    wasup = 'https://wa.me/972' + wasup[0]+wasup[1]+wasup[2];
    return wasup;
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

export function phoneButton_click(event) {
    let $item = $w.at(event.context);
    $item("#switchEmailHE").hide();
    if( $item("#switchPhoneHE").isVisible ) {
	    $item("#switchPhoneHE").hide();
    }
    else {
       	$item("#switchPhoneHE").show();
    } 
}

export function emailButton_mouseIn(event) {
    let $item = $w.at(event.context);
    $item("#switchPhoneHE").hide();
    $item("#switchEmailHE").show();
}

export function aboutCard_mouseOut(event) {
	let $item = $w.at(event.context);
    $item("#switchPhoneHE").hide();
    $item("#switchEmailHE").hide();
}
