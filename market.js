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

	$w('#researchDataset').onReady( () => {
		if (myLang === 'en') {
			$w('#marketRepeater').onItemReady( ($w, itemData) => {
				let isPdf = itemData.interNews;
				if (!isPdf) {
					$w('#marketCardImage').link = $w('#marketCardTitle').link = itemData.magazineEn;
				}
			});
		}
		else if (myLang === 'he') {
			$w('#marketRepeaterHe').onItemReady( ($w, itemData) => {
				let isPdf = itemData.interNewsHe;
				if (!isPdf) {
					$w('#marketCardImageHe').link = $w('#marketCardTitleHe').link = itemData.magazineHe;
				}
			});
		}
	});

});

export function loadMoreButton_click(event) {
	num += 3
	$w("#researchDataset").setPageSize(num)
	.then( () => {
		if (num > 10) {
			$w("#loadMoreButtonEN").hide();
		}
	} );
}

export function loadMoreButtonHE_click(event) {
	num += 3
	$w("#researchDataset").setPageSize(num)
	.then( () => {
		if (num > 10) {
			$w("#loadMoreButtonHE").hide();
		}
	} );
}