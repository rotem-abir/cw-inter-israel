import wixWindow from 'wix-window';
import wixData from 'wix-data';

let debounceTimer;
let lastSearchValue;

function filter(searchValue) {
    if(searchValue !== lastSearchValue) {
        $w('#aboutDataset').setFilter(
            wixData.filter().startsWith('titleEn', searchValue)
            .or(wixData.filter().startsWith('title', searchValue))
            .or(wixData.filter().startsWith('familyNameEn', searchValue))
            .or(wixData.filter().startsWith('familyNameHe', searchValue))
            .or(wixData.filter().startsWith('positionEn', searchValue))
            .or(wixData.filter().startsWith('position', searchValue))
            .or(wixData.filter().startsWith('departmentEn', searchValue))
            .or(wixData.filter().startsWith('department', searchValue))
        );
        lastSearchValue = searchValue;  
    }
}

function filterInside(searchValue) {
    //console.log("looking for " + searchValue);
    $w('#aboutDataset').setFilter(
        wixData.filter().contains('titleEn', searchValue)
        .or(wixData.filter().contains('title', searchValue))
        .or(wixData.filter().contains('familyNameEn', searchValue))
        .or(wixData.filter().contains('familyNameHe', searchValue))
        .or(wixData.filter().contains('positionEn', searchValue))
        .or(wixData.filter().contains('position', searchValue))
        .or(wixData.filter().contains('departmentEn', searchValue))
        .or(wixData.filter().contains('department', searchValue))
    );
}

$w.onReady(function () {
    let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#ourTeamHE').hide();
		  $w('#ourTeamEN').show();
	}
	else if (myLang === "he") {
		$w('#ourTeamEN').hide();
		$w('#ourTeamHE').show();
	}
    filter('III')
});

export function aboutDataset_currentIndexChanged() {
	let count = $w("#aboutDataset").getTotalCount();
    //console.log(count + " results for " + lastSearchValue);
    if(count === 0) {
        filterInside(lastSearchValue);
    }
}


// ENGLISH

export function aboutSearchInput_keyPress(event) {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
        debounceTimer = undefined;
    }
    debounceTimer = setTimeout(() => {
        filter($w('#aboutSearchInput').value);
    }, 200);
}

export function phoneButton_click(event) {
    let $item = $w.at(event.context);
    $item("#switchEmail").hide();
	$item("#switchPhone").show();
}

export function emailButton_mouseIn(event) {
    let $item = $w.at(event.context);
    $item("#switchPhone").hide();
    $item("#switchEmail").show();
}

export function aboutCard_mouseOut(event) {
	let $item = $w.at(event.context);
    $item("#switchPhone").hide();
    $item("#switchEmail").hide();
}

// HEBREW

export function aboutSearchInputHE_keyPress(event) {
	if (debounceTimer) {
        clearTimeout(debounceTimer);
        debounceTimer = undefined;
    }
    debounceTimer = setTimeout(() => {
        filter($w('#aboutSearchInputHE').value);
    }, 200);
}

export function phoneButtonHE_click(event) {
    let $item = $w.at(event.context);
    $item("#switchEmailHE").hide();
    $item("#switchPhoneHE").show();
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