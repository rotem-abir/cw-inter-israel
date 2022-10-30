import wixLocation from 'wix-location';

$w.onReady(function () {
	$w("#dataset1").onReady(function () {
		$w('#dataset1').getItems(0, 2)
		.then( (result) => {
    		let posts = result.items;
			let path = wixLocation.path[1]; // the second part of the path: "\post\THIS PART"
			for (let i = 0; i < posts.length; i++) {
				let postUrl = posts[i].postPageUrl.slice(6); // cut the first part of "\post\THIS STAYS"
				if (postUrl == path) {
					$w("#hero").src = posts[i].coverImage;
					$w("#hero").tooltip = '';
					$w("#hero").alt = postUrl; // NEED A BETTER SOLUTION
					break;
				}
			}
		});	
	});	
});

/*myLang = wixWindow.multilingual.currentLanguage;
if (myLang === "en") {
    $w("#bannerBottom").link += "?lang=he";
}*/