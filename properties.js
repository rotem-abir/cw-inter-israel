import wixWindow from 'wix-window';

$w.onReady(function () {
	/*
	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#researchStockHE').hide();
		  $w('#researchStockEN').show();
	}
	else if (myLang === "he") {
		$w('#researchStockEN').hide();
		$w('#researchStockHE').show();
	}*/
});



export function loadMoreButtonEN_click(event) {
	$w("#propDataset").loadMore()
	.then( () => {
		let pageCount = $w("#propDataset").getTotalPageCount()
		console.log("pageCount: "+ pageCount);
	})
	.catch( (err) => {
		console.log(err.message)
		let hasNextPage = $w("#propDataset").hasNextPage();
		console.log("has Next Page?: " + hasNextPage);
		let hasNext = $w("#propDataset").hasNext();
		console.log("has Next item?: " + hasNext);
	});
	/*
	let hasNextPage = $w("#propDataset").hasNextPage();
	console.log("has Next Page?: " + hasNextPage);
	let hasNext = $w("#propDataset").hasNext();
	console.log("has Next item?: " + hasNext);
	if (!hasNextPage) {
		$w("#loadMoreButtonEN").hide();
	}*/

	/*
	num += 3
	$w("#propDataset").setPageSize(num)
	.then( () => {
		if (num > 10) {
			$w("#loadMoreButtonEN").hide();
		}
	} );*/
}