import wixLocation from 'wix-location';

$w.onReady(function () {

    let propertyUrl = $w("#dynamicDataset").getCurrentItem().url;
    let brochureUrl = $w("#dynamicDataset").getCurrentItem().qr;
	setTimeout(() => { $w('#description').text = 'Brochure download is ready'; }, 500);

	if(brochureUrl) {
    	wixLocation.to(brochureUrl);
		setTimeout(() => { wixLocation.to(propertyUrl);	}, 2000);
	}
	else {
		wixLocation.to(propertyUrl);
	}
});
