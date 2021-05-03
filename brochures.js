import wixLocation from 'wix-location';

$w.onReady(function () {

	let propertyName = $w("#dynamicDataset").getCurrentItem().title;
    let propertyUrl = $w("#dynamicDataset").getCurrentItem().url + '?lang=he';
    let brochureUrl = $w("#dynamicDataset").getCurrentItem().qr;

	setTimeout(() => { $w('#description').text = propertyName; }, 300);

	if(brochureUrl) {
		brochureUrl = "http://docs.google.com/gview?embedded=true&url=" + brochureUrl
    	wixLocation.to(brochureUrl);
		setTimeout(() => { wixLocation.to(propertyUrl);	}, 2000); // if brochure doensnt load
	}
	else {
		wixLocation.to(propertyUrl); // if there's no brochure
	}
});