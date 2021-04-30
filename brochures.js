import wixLocation from 'wix-location';
/*
const brochures = {
	1: {
		name: 'Trade Tower',
		url: "https://2dcd06e3-ad46-402f-a424-9ad7671b3b5d.usrfiles.com/ugd/c5a4e4_995f491fcddf4241ad839c7d56cc6f1f.pdf"
	},
	2: {
		name: '2',
		url: "https://2dcd06e3-ad46-402f-a424-9ad7671b3b5d.usrfiles.com/ugd/c5a4e4_995f491fcddf4241ad839c7d56cc6f1f.pdf"
	},
	3: {
		name: '3',
		url: "https://2dcd06e3-ad46-402f-a424-9ad7671b3b5d.usrfiles.com/ugd/c5a4e4_995f491fcddf4241ad839c7d56cc6f1f.pdf"
	}
}*/

$w.onReady(function () {

    //let propertyName = $w("#dynamicDataset").getCurrentItem().title;
    let propertyUrl = $w("#dynamicDataset").getCurrentItem().url;
    let brochureUrl = $w("#dynamicDataset").getCurrentItem().qr;

	setTimeout(() => { $w('#description').text = 'Brochure download is ready'; }, 500);

	//console.log(brochureUrl);

	if(brochureUrl) {
    	wixLocation.to(brochureUrl);
		setTimeout(() => { wixLocation.to(propertyUrl);	}, 2000);
	}
	else {
		wixLocation.to(propertyUrl);
	}
});







//------------


import wixLocation from 'wix-location';

const brochures = {
	1: {
		name: 'Trade Tower',
		url: "https://2dcd06e3-ad46-402f-a424-9ad7671b3b5d.usrfiles.com/ugd/c5a4e4_995f491fcddf4241ad839c7d56cc6f1f.pdf"
	},
	2: {
		name: '2',
		url: "https://2dcd06e3-ad46-402f-a424-9ad7671b3b5d.usrfiles.com/ugd/c5a4e4_995f491fcddf4241ad839c7d56cc6f1f.pdf"
	},
	3: {
		name: '3',
		url: "https://2dcd06e3-ad46-402f-a424-9ad7671b3b5d.usrfiles.com/ugd/c5a4e4_995f491fcddf4241ad839c7d56cc6f1f.pdf"
	}
}

$w.onReady(function () {

    let propertyName = $w("#dynamicDataset").getCurrentItem().title;
    let propertyUrl = $w("#dynamicDataset").getCurrentItem().url;

	setTimeout(() => { $w('#description').text = 'Brochure download is ready'; }, 500);
	setTimeout(() => { wixLocation.to(propertyUrl);	}, 3000);

	checkQR(propertyName);

});

function checkQR(property) {
	let search = Object.keys(brochures).length;

	for (let i=1; i<=search; i++) {
    	if (property === brochures[i].name) {
    		wixLocation.to(brochures[i].url);
			break;
		}
	}
}

/*
	else {
		wixLocation.to('/properties');
	}
*/
