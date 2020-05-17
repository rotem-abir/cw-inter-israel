import wixWindow from 'wix-window';

let num;

$w.onReady(function () {
	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#researchStockHE').hide();
		  $w('#researchStockEN').show();
	}
	else if (myLang === "he") {
		$w('#researchStockEN').hide();
		$w('#researchStockHE').show();
	}
	num = 3;
});

export function loadMoreButton_click(event) {
	num += 6
	$w("#researchDataset").setPageSize(num)
	.then( () => {
		if (num > 10) {
			$w("#loadMoreButtonEN").hide();
		}
	} );
}

export function loadMoreButtonHE_click(event) {
	num += 6
	$w("#researchDataset").setPageSize(num)
	.then( () => {
		if (num > 10) {
			$w("#loadMoreButtonHE").hide();
		}
	} );
}